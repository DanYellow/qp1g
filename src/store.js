import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    responses: [],
    isQuizEnded: false,
    nbQuestions: 0,
    easyModeEnabled: false
  },
  mutations: {
    setResponse (state, { response, index }) {
      const responses = Object.assign([], state.responses, {[index]: response})
      state.responses = responses
    },
    setQuestionsNumber (state, length = 5) {
      state.responses = new Array(length).fill(null)
      state.nbQuestions = length
    },
    isQuizEnded (state, isQuizEnded = false) {
      state.isQuizEnded = isQuizEnded
    },
    reInitQuiz (state) {
      state.responses = new Array(length).fill(null)
      state.isQuizEnded = false
    },
    toggleEasyMode (state, easyModeEnabled = true) {
      state.easyModeEnabled = easyModeEnabled
    }
  }
})

export default store
