<template>
  <ul class="progression">
    <li v-for="(response, index) in responses" :key="index">
      <img src="../assets/check.svg" class="right" alt="" v-if="response === true">
      <img src="../assets/wrong.svg" class="wrong" alt="" v-if="response === false">
      <div class="empty" v-if="response === null"></div>
    </li>
  </li>
  </ul>
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
  .progression {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    & li {
      width: 40px;
      display: flex;
      justify-content: center;
    }

    & .empty {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: gray;
    }
  }
</style>