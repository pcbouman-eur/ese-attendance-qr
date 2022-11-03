<template>
  <v-card>
    <v-card-title>Course Heat Maps</v-card-title>
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel v-for="[courseCode, heatMap] of attendanceData['heatMaps']" :key="courseCode">
          <v-expansion-panel-header>{{courseCode}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-simple-table>
              <thead>
                <tr>
                  <th span="col"></th>
                  <th v-for="week of heatMap['weeks']" :key="week" span="col">{{week}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="weeklySlot of heatMap['weeklySlots']" :key="weeklySlot">
                  <th scope="row">{{weeklySlot}}</th>
                  <td v-for="week of heatMap['weeks']" :key="week" span="col">
                    {{heatMap['heatmap'].get(weeklySlot).get(week)}}
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn color="primary" @click="$emit('prevStep')">Prev</v-btn>
      <v-spacer />
      <!-- <v-btn color="primary" @click="$emit('nextStep')">Next</v-btn> -->
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

<style scoped>
table.heatmap {
  width: 100%;
}
</style>

