import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scheduleData: {
      courseNames: [],
      sessions: [],
    },
    templateURL: 'https://erasmusuniversity.eu.qualtrics.com/jfe/form/SV_6zzW1oIVYXLtlI2?courseCode={{courseCode}}&courseName={{courseName}}&datetime={{time}}&group={{group}}&sessionIndex={{index}}&sessionId={{sessionId}}&location={{location}}',
    attendanceData: {},
    headcountData: {},
  },
  mutations: {
    setScheduleData(state: any, payload: any) {
      state.scheduleData = payload;
    },
    setTemplateURL(state: any, payload: any) {
      state.templateURL = payload;
    },
    setAttendanceData(state: any, payload: any) {
      state.attendanceData = payload;
    },
    setHeadcountData(state: any, payload: any) {
      state.headcountData = payload;
    }


  },
  actions: {
  },
  modules: {
  }
})
