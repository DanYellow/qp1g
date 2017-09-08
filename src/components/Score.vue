<template>
  <section class="score">
    <h2>Score</h2>
    <article>
      <h3>{{ score }} %</h3>
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
  }

</style>