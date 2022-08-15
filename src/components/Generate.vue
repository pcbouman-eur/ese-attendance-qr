<template>
  <v-card>
    <v-card-title>Generate QR Codes</v-card-title>
    <v-card-text>
      <div>
        Click the button below to generate the QR codes. <br />
        <em>(Your browser may become inresponsive for a few seconds while generating the final zip-file)</em>
      </div>
      <v-btn block color="primary" @click="generate()">Generate QR Codes</v-btn>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn color="primary" @click="$emit('prevStep')">Prev</v-btn>
      <v-spacer />      
    </v-card-actions>

  </v-card>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {State} from 'vuex-class';
  import {ScheduleData} from '@/data';

  import Handlebars from 'handlebars';
  import JSZip from 'jszip';
  import QRCode from 'qrcode';
  import {groupSessionsNested, truncateLocation} from '@/utils';

  @Component
  export default class Generate extends Vue {

    @State('templateURL') templateURL!: string;
    @State('scheduleData') scheduleData!: ScheduleData;

    generate(): void {
      const promises = [];
      const zip = new JSZip();
      const template = Handlebars.compile(this.templateURL);
      const grouped = groupSessionsNested(this.scheduleData.sessions);
      for (const [course, courseMap] of grouped.entries()) {
        const path1 = course.replaceAll('/', '_');
        zip.folder(path1);
        for (const [group, sessions] of courseMap.entries()) {
          const path2 = group.replaceAll('/', '_');
          zip.folder(`${path1}/${path2}`);
          for (const [offset, session] of sessions.entries()) {
            const truncLocation = truncateLocation(session.location, 60);
            const sessionData = {
              courseCode: encodeURIComponent(session.courseCode),
              courseName: encodeURIComponent(session.courseName),
              time: encodeURIComponent(session.timeSlot.start.toLocaleString()),
              group: encodeURIComponent(session.group.name),
              sessionId: encodeURIComponent(session.id),
              location: encodeURIComponent(truncLocation),
              index: offset+1,
              offset
            };
            const url = template(sessionData);
            const prom: Promise<void> = new Promise((resolve, reject) => {
              const canvasEl = document.createElement('canvas');
              canvasEl.width = 260;
              canvasEl.height = 360;
              console.log(`Attempting to generate QR code for url of length ${url.length} : ${url}`);
              QRCode.toCanvas(canvasEl, url, { errorCorrectionLevel: 'Q' }, (err: any, canvas:any) => {
                if (err) {
                  reject(err);
                }
                else {
                  const ctx = canvasEl.getContext("2d");
                  if (ctx) {
                    const data = ctx.getImageData( 0, 0, canvas.width, canvas.height );
                    const yOffset = canvas.height;
                    const xOffset = 15;

                    const lineHeight = 25;
                    ctx.font = "15px Arial";

                    const textLines = [
                      `${session.courseCode} ${session.courseName}`,
                      `${session.group.name} Session ${offset+1}`,
                      session.timeSlot.start.toLocaleString(),
                      truncLocation
                    ];
                    
                    let maxWidth = canvas.width;
                    for (const line of textLines) {
                      const dims = ctx.measureText(line);
                      maxWidth = Math.max(maxWidth, dims.width + xOffset);
                    }

                    canvas.height += lineHeight * textLines.length;
                    canvas.width = maxWidth;

                    const fillTemp = ctx.fillStyle;
                    const compOpTemp = ctx.globalCompositeOperation;
                    ctx.globalCompositeOperation = 'destination-under';
                    ctx.fillStyle = 'white';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = fillTemp;                    
                    ctx.globalCompositeOperation = compOpTemp;

                    ctx.putImageData( data, 0, 0 );
                    ctx.font = "15px Arial";
                    for (const [idx, line] of textLines.entries()) {
                      ctx.fillText(line, xOffset, yOffset + idx*lineHeight);
                    }
                  }
                  canvas.toBlob(
                    (blob:Blob) => {
                      zip.file(`${path1}/${path2}/session_${offset+1}.png`, blob);
                      resolve();
                    }
                  );
                  canvas.remove();
                }
              });
            });
            promises.push(prom);            
          }
        }
      }
      (async () => {await Promise.all(promises);
        zip.generateAsync({type: "blob"}).then(blob => {
          const el = document.createElement('a');
          el.href = window.URL.createObjectURL(blob);
          el.download = 'qr-codes.zip';
          el.click();
          el.remove();
        });
      })();
    }

  }
</script>
