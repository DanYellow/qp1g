import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    responses: [],
    isQuizEnded: false
  },
  mutations: {
    setResponse (state, { response, index }) {
      const responses = Object.assign([], state.responses, {[index]: response})
      state.responses = responses
    },
    setQuestionsNumber (state, length = 5) {
      state.responses = new Array(length).fill(null)
    },
    isQuizEnded (state, isQuizEnded = false) {
      state.isQuizEnded = isQuizEnded
    }
  }
})

export default store
