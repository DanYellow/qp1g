<template>
  <section class="score">
    <h2>Score</h2>
    <article>
      <h3 v-if="score">{{ score }} %</h3>
      <button class="btn--reset btn--restart" type="button" @click="restart">Recommencer</button>
    </article>
  </section>
</template>

<script>
export default {
  name: 'score',
  computed: {
    responses () {
      return this.$store.state.responses
    },
    score () {
      const rightResponses = this.$store.state.responses.filter(response => response === true)

      return ((rightResponses.length / this.$store.state.responses.length) * 100)
    }
  },
  methods: {
    restart () {
      this.$store.commit('reInitQuiz')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
  .score {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & h2 {
      font-size: 50px;
    }

    & h3 {
      font-size: 100px;
      font-weight: bold;
      margin-top: 15px;
    }

    & .btn--restart {
      border: 1px solid black;
      text-align: center;
      padding: 10px;
      width: 100%;
      &:hover {
        background-color: #80b0b0;
      }
    }
  }
</style>