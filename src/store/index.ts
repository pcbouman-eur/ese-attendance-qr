import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scheduleData: {
      courseNames: [],
      sessions: [],
    },
    templateURL: 'https://my-survey-website/survey?course={{courseCode}}&group={{group}}&session={{session}}&time={{time}}'
  },
  mutations: {
    setScheduleData(state: any, payload: any) {
      state.scheduleData = payload;
    },
    setTemplateURL(state: any, payload: any) {
      state.templateURL = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})