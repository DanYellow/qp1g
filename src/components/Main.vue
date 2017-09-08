<template>
  <div class="main">
    <question v-if="!isQuizEnded"></question>
    <progression v-if="!isQuizEnded"></progression>
    <score v-if="isQuizEnded"></score>

    <router-link :to="{ name: 'intro' }" class="back-index">Retourner à l'accueil</router-link>
  </div>
</template>

<script>
import question from './Question'
import progression from './Progression'
import score from './Score'

export default {
  components: { question, progression, score },
  name: 'main',
  computed: {
    isQuizEnded () {
      return this.$store.state.isQuizEnded
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
  .back-index {
    text-align: center;
    display: block;
    margin-top: 20px;
  }
</style>
