<template>
  <v-card>
    <v-card-title>Load Attendance Data</v-card-title>
    <v-card-text>
      <h3>Prepare</h3>
      Use this tool to analyze recorded attendance data. There are two types of attendance data:
      <ol>
        <li>The data recorded via the Qualtrics Survey.</li>
        <li>Headcounts recorded by the TA's</li>
      </ol>
      <br />
      <h3>Import Attendance Data</h3>
      <template v-if="Object.keys(attendanceData).length == 0">
        <FileDropZone accept=".xlsx" acceptError="Please provide an .xlsx Spreadsheet with recorded attendance data"
          :autoSubmit="true" @change="changeFile" />
      </template>
      <template v-if="Object.keys(attendanceData).length > 0">
        <v-alert color="success">
          <h3>Data loaded</h3>
          <ul>
            <li v-for="stats of attendanceData['statistics']" :key="stats.getCourse()">
              {{stats.getCourse()}} : {{stats.getFinished()}} Finished / {{stats.getUnfinished()}} Unfinished. 
            </li>
          </ul>
        </v-alert>
        <br />
        <v-btn color="error" @click="clearData">Clear</v-btn>
      </template>
      <!-- <h3>Import Headcount Data</h3>
      <template v-if="Object.keys(headcountData).length == 0">
        <FileDropZone accept=".xlsx" acceptError="Please provide an .xlsx Spreadsheet with recorded headcount data"
          :autoSubmit="true" @change="changeFile" />
      </template>
      <template v-if="Object.keys(headcountData).length > 0">
        <v-alert color="success">
          <h3>Data loaded</h3>
          <div>Headcount data: {{Object.keys(headcountData)}}.</div>
        </v-alert>
        <br />
        <v-btn color="error" @click="clearData">Clear</v-btn>
      </template> -->
  </v-card-text>
    <v-divider />
    <v-card-actions>
      <!-- <v-btn color="primary" @click="$emit('nextStep')">Prev</v-btn> -->
      <v-spacer />
      <v-btn color="primary" @click="$emit('nextStep')">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
  import {dataFromArrayBuffer} from '@/analyze';

  import {Component, Vue} from 'vue-property-decorator';
  import {State, Mutation} from 'vuex-class';

  import FileDropZone from '@/components/FileDropZone.vue';

  import dayjs from 'dayjs';
  import duration from 'dayjs/plugin/duration';
  dayjs.extend(duration);

  @Component({
    components: { FileDropZone }
  })
  export default class Load extends Vue {

    @State('attendanceData') attendanceData: any;
    @State('headcountData') headcountData: any;

    // eslint-disable-next-line no-unused-vars
    @Mutation('setAttendanceData') setAttendanceData!: (payload: any) => void;
    @Mutation('setHeadcountData') setHeadcountData!: () => void;
    

    changeFile(data: any): void {
      console.log(data);
      if (data.length == 1) {
        const reader = new FileReader();
        reader.addEventListener('load', this.processAttendanceFile);
        reader.readAsArrayBuffer(data[0]);
      }
    }

    processAttendanceFile(ev: ProgressEvent<FileReader>): void {
      const data = ev?.target?.result as ArrayBuffer;
      if (data) {
        const attendanceData = dataFromArrayBuffer(data);
        console.log(attendanceData);
        this.setAttendanceData(attendanceData);
      }
    } 

    processHeadcountFile(ev: ProgressEvent<FileReader>): void {
      const data = ev?.target?.result as ArrayBuffer;
      if (data) {
        const headcountData = dataFromArrayBuffer(data);
        this.setAttendanceData(headcountData);
      }
    } 

    formatDuration(seconds: number): string {
      return dayjs.duration(Math.round(seconds), 's').toISOString();
    }

    clearData(): void {
      this.setAttendanceData({});
    }
  }
</script>
