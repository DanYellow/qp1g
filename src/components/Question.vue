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
    this.fetchAnswer()
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
        this.fetchAnswer()
      }, 2500)
    },
    async fetchAnswer () {
      const questionsRaw = await axios('static/datas/questions.json')
      const questions = questionsRaw.data
      const randQuestion = questions[Math.floor(Math.random() * questions.length)]

      this.question = randQuestion
      this.isCorrect = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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