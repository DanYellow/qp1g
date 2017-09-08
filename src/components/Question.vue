<template>
  <section class="question">
    <div v-if="Object.keys(question).length > 0 && isCorrect === null">
      <h1 v-text="question.question"></h1>
      <form>
        <ul class="answers">
          <answer
            @answered="handleAnswer"
            v-for="answer in question.answers" 
            :key="answer.id" 
            :answer="answer"></answer>
        </ul>
      </form>
    </div>
    <result :isCorrect="isCorrect"></result>
  </section>
</template>

<script>
import axios from 'axios'
import { findIndex, shuffle } from 'lodash'

import answer from './Answer'
import result from './Result'

export default {
  name: 'question',
  components: { answer, result },
  data () {
    return {
      question: {},
      isCorrect: null,
      answers: []
    }
  },
  created () {
    this.fetchUsers().then((users) => {
      this.users = users
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

      this.answers.push(this.isCorrect)
      setTimeout(() => {
        this.fetchQuestions()
      }, 2500)
    },
    async fetchQuestions () {
      const questionsRaw = await axios('static/datas/questions.json')
      const questions = questionsRaw.data
      const randQuestion = questions[Math.floor(Math.random() * questions.length)]

      const userReponseId = findIndex(this.users, {id: randQuestion.response_id})

      const getRandAnwsers = () => {
        const usersCopy = [...this.users]
        usersCopy.splice(userReponseId, 1)

        const randAnwsers = [this.users[userReponseId]]
        for (let i = 0; i < 3; i++) {
          const randIndex = Math.floor(Math.random() * questions.length)
          randAnwsers.push(usersCopy[randIndex])
          usersCopy.splice(randIndex, 1)
        }

        // We shuffle the answer to avoid to have good answer at the first place
        return shuffle(randAnwsers)
      }

      this.question = randQuestion
      this.question.answers = getRandAnwsers()
      this.isCorrect = null
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
  }
}
</script>

<style scoped lang="postcss">
  .question {
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    font: 25px Georgia;
    // border: 1px solid #d1d1d1;
    padding: 10px;
    margin: 0 3px 15px 3px;
  }

  .answers {
    display: flex;
    flex-wrap: wrap;
  }

</style>
font: 25px Georgia;
padding: 25px 20px;
border: 1px solid black;
background-color: rgba(0, 0, 0, .5);
border-radius: 100px;
color: white;