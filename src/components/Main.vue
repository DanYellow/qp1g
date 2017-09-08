<template>
  <div class="main">
    <question v-if="!isQuizEnded"></question>
    <progression v-if="!isQuizEnded"></progression>
  </div>
</template>

<script>
import question from './Question'
import progression from './Progression'

export default {
  components: { question, progression },
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

</style>
