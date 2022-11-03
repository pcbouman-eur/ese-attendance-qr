<template>
  <v-card>
    <v-card-title>Session Statistics</v-card-title>
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel v-for="[courseCode, courseMap] of attendanceData['sessionStatistics']" :key="courseCode">
          <v-expansion-panel-header>{{courseCode}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-expansion-panels>
              <v-expansion-panel v-for="[group, groupMap] of courseMap" :key="group">
                <v-expansion-panel-header>{{group}} ({{groupMap.size}} Tutorials)</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div v-for="[sesId, sesStats] of groupMap" :key="sesId">
                    <strong>Tutorial {{sesId}}:</strong>
                    {{sesStats.countParticipants()}} unique participants
                    <repeat-chips :data="sesStats.repeatCounts" word="registered" />
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
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
