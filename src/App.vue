<template>
  <v-app>
    <v-app-bar
      app
      color="#ffd500"
    >
    <div>
        <v-img
          alt="Erasmus School of Economics"
          class="shrink mr-2"
          contain
          src="./assets/ese-logo-text.png"
          transition="scale-transition"
          width="60"
        />
    </div>
    <div class="d-flex align-center" style="width: 15em;">
      Attendance QR-Codes
    </div>
    <v-spacer></v-spacer>
    <v-tabs class="d-flex align-center">
      <v-tab to="/Generator">Generator</v-tab>
      <v-tab to="/Analyzer">Analyzer</v-tab>
    </v-tabs>
      
      <!-- &nbsp;
      <router-link to="/Generator">Generator</router-link>
      &nbsp;
      <router-link to="/Analyzer">Analyzer</router-link> -->
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
});
</script>
