<template>
  <v-container>
    <v-row justify="center" >
      <v-col cols="6">
        <v-stepper v-model="step" non-linear>
          <v-stepper-header>
            <v-stepper-step step="1" :complete="step > 1" editable>
              Load Schedule Data
            </v-stepper-step>
            <v-divider />
            <v-stepper-step step="2" :complete="step > 2" editable>
              Define Template URL
            </v-stepper-step>          
            <v-divider />
            <v-stepper-step step="3" editable>
              Generate QR Codes
            </v-stepper-step>          
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <Step0 @nextStep="step++" />
            </v-stepper-content>
            <v-stepper-content step="2">
              <Step1 @nextStep="step++" @prevStep="step--" />
            </v-stepper-content>
            <v-stepper-content step="3">
              <Step2 @prevStep="step--" />
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Step0 from '@/components/generator/Load.vue'
  import Step1 from '@/components/generator/Template.vue'
  import Step2 from '@/components/generator/Generate.vue'

  export default Vue.extend({
    name: 'Generator',
    
    components: {Step0, Step1, Step2},

    data: () => ({
      step: 1
    }),
  })
</script>
