<template>
  <section class="score">
    <h2>Score : </h2>
  </section>
</template>

<script>
export default {
  name: 'progress',
  computed: {
    responses () {
      return this.$store.state.responses
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
  .score {
    display: flex;

   
  }

</style>