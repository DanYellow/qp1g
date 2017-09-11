<template>
  <section class="question">
    <div v-if="Object.keys(question).length > 0 && isCorrect === null">
      <p class="text">Qui a dit : </p>
      <blockquote class="quote">“{{ question.question }}”</blockquote>
      <ul class="answers">
        <answer
          @answered="handleAnswer"
          v-for="answer in question.answers" 
          :key="answer.id"
          :isCorrectAnswer="(isEasyModeEnabled && question.response_id === answer.id) ? true : false"
          :answer="answer"></answer>
      </ul>
    </div>
    <result
      v-if="isCorrect !== null"
      :isCorrect="isCorrect"></result>
  </section>
</template>

<script>
import axios from 'axios'
import { findIndex, shuffle } from 'lodash'

import answer from './Answer'
import result from './Result'

const NB_PROPOSITIONS = 3
const NB_QUESTIONS = 5

export default {
  name: 'question',
  components: { answer, result },
  data () {
    return {
      question: {},
      isCorrect: null,
      questionIndex: 0
    }
  },
  created () {
    if (process.env.NODE_ENV === 'testing') { return }

    this.fetchUsers().then((users) => {
      this.users = users
      this.$store.commit('setQuestionsNumber', NB_QUESTIONS)
      this.fetchQuestions()
    })
  },
  methods: {
    handleAnswer (response) {
      const questionAnswer = this.question.response_id
      if (questionAnswer === response) {
        this.isCorrect = true
      } else {
        this.isCorrect = false
      }

      this.$store.commit('setResponse', {
        response: this.isCorrect,
        index: this.questionIndex
      })

      this.$store.commit('isLoadingNextQuestion', true)

      setTimeout(() => {
        this.getNewQuestion()
      }, 2500)

      this.questionIndex += 1
    },
    async fetchQuestions () {
      const questionsRaw = await axios('static/datas/questions.json')
      const questions = questionsRaw.data
      this.questions = questions

      this.getNewQuestion()
    },
    getNewQuestion () {
      if (this.questionIndex >= this.$store.state.responses.length) {
        this.$store.commit('isQuizEnded', true)
        return
      }

      const randQuestionId = Math.floor(Math.random() * this.questions.length)
      const randQuestion = this.questions[randQuestionId]
      const goodResponseId = findIndex(this.users, {id: randQuestion.response_id})

      const getRandAnwsers = () => {
        const usersCopy = [...this.users]
        usersCopy.splice(goodResponseId, 1)

        const randAnwsers = [this.users[goodResponseId]]
        for (let i = 0; i < NB_PROPOSITIONS; i++) {
          const randIndex = Math.floor(Math.random() * this.questions.length)
          randAnwsers.push(usersCopy[randIndex])
          usersCopy.splice(randIndex, 1)
        }

        this.questions.splice(randQuestionId, 1)

        // We shuffle the answers to avoid to have good answer at the first place
        return shuffle(randAnwsers)
      }

      this.question = randQuestion
      this.question.answers = getRandAnwsers()
      this.isCorrect = null

      this.$store.commit('isLoadingNextQuestion', false)
    },
    fetchUsers () {
      return axios.get('static/datas/users.json')
        .then((users) => {
          return users.data
        })
        .catch((error) => {
          throw new Error(error)
        })
    }
  },
  computed: {
    isQuizEnded () {
      return this.$store.state.isQuizEnded
    },
    isEasyModeEnabled () {
      return this.$store.state.easyModeEnabled
    }
  }
}
</script>

<style scoped lang="postcss">
  .question {
    max-width: 1200px;
    margin: 0 auto;
  }

  .quote {
    font: 25px Georgia;
    padding: 0;
    margin: 0 0 25px 0;
    position: relative;
    font-style: italic;
  }

  .answers {
    display: flex;
    flex-wrap: wrap;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
  }

  .text {
    margin-bottom: 7px;
    font-size: 1.4rem;
  }
</style>