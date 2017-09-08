<template>
  <section class="question">
    <div v-if="Object.keys(question).length > 0 && isCorrect === null">
      <h1 v-text="question.question"></h1>
      <form @submit.prevent="handleSubmit">
        <ul class="answers">
          <li v-for="answer in question.answers" :key="answer.id">
            <input 
              type="radio"
              @change="handleSubmit"
              :value="answer.id"
              :id="answer.id"
              v-model="response">
            <label :for="answer.id">
              <span>{{ answer.title }}</span>
            </label>
          </li>
        </ul>
      </form>
    </div>
      <div class="result">
        <p v-if="isCorrect === true">Correct</p>
        <p v-if="isCorrect === false">False</p>
      </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'question',
  data () {
    return {
      question: {},
      response: null,
      isCorrect: null,
      answers: []
    }
  },
  created () {
    this.fetchAnswer()
  },
  methods: {
    handleSubmit (e) {
      const questionAnswer = this.question.response_id
      if (questionAnswer === this.response) {
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
      this.response = null
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

  .answers li {
    box-sizing: border-box;
    flex: 1 1 calc(50% - 6px);
    height: 50px;
    border: 1px solid #d1d1d1;

    margin: 3px;

    &:hover {
      background-color: #cecece;
      color: white;
      font-weight: bold;
    }

    & input[type="radio"] {
      display: none;
    }

    & label {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & input[type="radio"]:active + label {
      color: red;
      @nest li & {
        background-color: red;
      }
    }
  }

</style>
font: 25px Georgia;
padding: 25px 20px;
border: 1px solid black;
background-color: rgba(0, 0, 0, .5);
border-radius: 100px;
color: white;