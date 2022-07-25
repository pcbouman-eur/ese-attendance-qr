<template>
  <v-card>
    <v-card-title>Define Template URL</v-card-title>
    <v-card-text>
      <div>
        Here you can define the URL template that should be used to generate the URL's for the QR-codes. <br />
        The following variables can be used in the URL. The contents will be properly escaped for usage in a
        URL query string.
        <ul>
          <li v-pre>{{courseCode}} : the course code</li>
          <li v-pre>{{courseName}} : the name of the course</li>
          <li v-pre>{{time}} : the date and time of the session</li>
          <li v-pre>{{group}} : the group of the session (this is Plenary for a plenary session)</li>
          <li v-pre>{{index}} : the number of the session within the sessions of the group</li>
          <li v-pre>{{sessionId}} : the session ID from the schedule</li>
          <li v-pre>{{location}} : the room and building in which the session takes place</li>
        </ul>
      </div>
      <br />
      <v-text-field @change="newVal => setTemplateURL(newVal)" :value="templateURL"
        label="Template URL" />
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn color="primary" @click="$emit('prevStep')">Prev</v-btn>
      <v-spacer />
      <v-btn color="primary" @click="$emit('nextStep')">Next</v-btn>
    </v-card-actions>    
  </v-card>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {State, Mutation} from 'vuex-class';
  import {ScheduleData} from '@/data';

  @Component
  export default class Template extends Vue {

    @State('templateURL') templateURL: any;

    // eslint-disable-next-line no-unused-vars
    @Mutation('setTemplateURL') setTemplateURL!: (payload: ScheduleData) => void;
  }
</script>
