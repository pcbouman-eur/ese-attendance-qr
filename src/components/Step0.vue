<template>
  <v-card>
    <v-card-title>Load Schedule Data</v-card-title>
    <v-card-text>
      <h3>Prepare</h3>
      To use this tool you need to have a Spreadsheet file with session exported from <a href="https://timetables.eur.nl" target="_blank">https://timetables.eur.nl</a>.
      Follow these steps to make this export.
      <ol>
        <li>Add the courses for which you want to export data, and make sure only these courses are selected.</li>
        <li>Click the download button <img src="img/timetables-download.png" alt="Picture of the download button on timetables.eur.nl" /> and choose "Microsoft Excel"</li>
        <li>Make sure a proper date range is selected that contains all the sessions you want to include. If you have the proper selection, click "Download"</li>
      </ol>
      <br />
      <h3>Import Data</h3>
      <template v-if="scheduleData.sessions == null || scheduleData.sessions.length == 0">
        <FileDropZone accept=".xlsx" acceptError="Please provide an .xlsx Spreadsheet with a timetables.eur.nl schedule"
          :autoSubmit="true" @change="changeFile" />
      </template>
      <template v-if="scheduleData.sessions != null  && scheduleData.sessions.length > 0">
        <v-alert color="success">
          <h3>Data loaded</h3>
          <div>{{scheduleData.sessions.length}} sessions have been loaded.</div>
        </v-alert>
        <v-list>
          <v-subheader>Course Names</v-subheader>
          <v-list-item v-for="course in scheduleData.courseNames" :key="course">{{course}}</v-list-item>
        </v-list>
        <br />
        <v-btn color="error" @click="clearData">Clear</v-btn>
      </template>
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
  import {dataFromArrayBuffer} from '@/utils';

  import {Component, Vue} from 'vue-property-decorator';
  import {State, Mutation} from 'vuex-class';
  import {ScheduleData} from '@/data';

  import FileDropZone from '@/components/FileDropZone.vue';

  @Component({
    components: { FileDropZone }
  })
  export default class Step0 extends Vue {

    @State('scheduleData') scheduleData: any;

    // eslint-disable-next-line no-unused-vars
    @Mutation('setScheduleData') setScheduleData!: (payload: ScheduleData) => void;

    changeFile(data: any): void {
      console.log(data);
      if (data.length == 1) {
        const reader = new FileReader();
        reader.addEventListener('load', this.processFile);
        reader.readAsArrayBuffer(data[0]);
      }
    }

    processFile(ev: ProgressEvent<FileReader>): void {
      const data = ev?.target?.result as ArrayBuffer;
      if (data) {
        const scheduleData = dataFromArrayBuffer(data);
        this.setScheduleData(scheduleData);
      }
    } 

    clearData(): void {
      this.setScheduleData({courseNames: [], sessions: []});
    }
  }
</script>
