<template>
  <span>
    <v-chip v-for="repCount of elems" :key="repCount.getRepeats()" color="warning" x-small >
      {{repCount.getCount()}} students {{word}} {{repCount.getRepeats()}} times
    </v-chip>
  </span>
</template>

<script lang="ts">

  import {Component, Vue, Prop} from 'vue-property-decorator';
  import {RepeatCount} from '@/analyze';

  @Component({
    components: {}
  })
  export default class Load extends Vue {
    @Prop(Array) readonly data?: RepeatCount[];
    @Prop(String) readonly word?: String;

    get elems() {
      if (this.data) {
        return this.data.filter(reps => reps.getCount() > 0);
      }
      return [];
    }

}
</script>
