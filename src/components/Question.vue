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
      <div class="result">
        <section >
          <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="33.557px" height="27.118px" viewBox="0 0 33.557 27.118" enable-background="new 0 0 33.557 27.118" xml:space="preserve">
<path class="path"  display="none" fill="#010202" d="M-246.798-169.002l-11.285,11.566l-5.286-5.01l-3.714,3.716l9,8.728l15-15.285
	L-246.798-169.002z"/>
<polyline fill="none" stroke="#010202" stroke-width="5" stroke-miterlimit="10" points="6.261,12.759 13.708,19.331 27.205,6.168 
	"/>
</svg>
          <p>Correct</p>
        </section>
        <p v-if="isCorrect === false">False</p>
      </div>
  </section>
</template>

<script>
import axios from 'axios'

import answer from './Answer'

export default {
  name: 'question',
  components: { answer },
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

  .path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 10s linear forwards;
}

@keyframes dash {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

</style>
font: 25px Georgia;
padding: 25px 20px;
border: 1px solid black;
background-color: rgba(0, 0, 0, .5);
border-radius: 100px;
color: white;