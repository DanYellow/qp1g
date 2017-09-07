<template>
  <section>
    <div class="question" v-if="Object.keys(question).length > 0">
      <h1 v-text="question.question"></h1>
      <form @submit.prevent="handleSubmit">
        <ul>
          <li v-for="answer in question.answers" :key="answer.id">
            <button
              name="foo"
              :data-id="answer.id"
              :value="answer.id" 
              class="btn--reset"
              type="submit">{{ answer.title }}</button>
          </li>
        </ul>
      </form>
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
      response: null
    }
  },
  async created () {
    const questionsRaw = await axios('static/datas/questions.json')
    const questions = questionsRaw.data
    const randQuestion = questions[Math.floor(Math.random() * questions.length)]
    this.question = randQuestion
  },
  methods: {
    handleSubmit (e) {
      console.log('e', e.target.elements)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">

</style>
