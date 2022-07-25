<template>
  <v-app>
    <v-app-bar
      app
      color="#ffd500"
    >
        <v-img
          alt="Erasmus School of Economics"
          class="shrink mr-2"
          contain
          src="./assets/ese-logo-text.png"
          transition="scale-transition"
          width="60"
        />    
      <div class="d-flex align-center">
        Attendance QR-Codes Generator
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Main/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Main from './components/Main.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    //
  }),
});
</script>
