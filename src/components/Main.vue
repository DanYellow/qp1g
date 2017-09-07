<template>
  <div class="main">
    <question></question>
  </div>
</template>

<script>
import question from './Question'

export default {
  components: { question },
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">

</style>
