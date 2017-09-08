<template>
  <div class="intro">
      <router-link :to="{ name: 'quiz' }" @click.native='enabledEasyMode(false)'> Accéder au quizz</router-link>
      <router-link :to="{ name: 'quiz' }" @click.native='enabledEasyMode(true)' title="ou ror">Je suis journaliste de la presse vidéoludique</router-link>
  </div>
</template>

<script>

export default {
  name: 'intro',
  methods: {
    enabledEasyMode (enable) {
      this.$store.commit('toggleEasyMode', enable)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;

    & a {
      display: inline-block;
      margin-bottom: 25px;
      position: relative;
      color: black;
      text-align: center;
      &:visited {
        color: black;
      }
      &:hover {
        &:before {
          content: '▶ ';
          position: absolute;
          left: -20px;
        }
      }
    }
  }
</style>
