<template>
  <v-card>
    <v-card-title>Session Statistics</v-card-title>
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel v-for="[courseCode, courseMap] of attendanceData['tutorialStatistics']" :key="courseCode">
          <v-expansion-panel-header>{{courseCode}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-for="[index, tutStats] of courseMap" :key="index">
              <strong>Tutorial {{index}}</strong>: {{tutStats.getUniqueStudents()}} unique participants
              <repeat-chips :data="tutStats.repeatCounts" word="attended" />
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
  import {State} from 'vuex-class';
  import RepeatChips from '@/components/analyzer/RepeatChips.vue';


  @Component({
    components: {RepeatChips}
  })
  export default class Load extends Vue {

    @State('attendanceData') attendanceData: any;

}
</script>
