<template>
  <ul class="progression">
    <li v-for="(response, index) in responses" :key="index" :class="shouldSetActiveClass(index)">
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
    },
    isLoadingNextQuestion () {
      return this.$store.state.isLoadingNextQuestion
    }
  },
  methods: {
    shouldSetActiveClass (index) {
      const responses = this.responses
      return (responses[index] !== null && responses[index + 1] === null && this.isLoadingNextQuestion) ? 'active' : ''
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
      width: 70px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      
      &.active {
        &:after {
          content: '';
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 100%;
          background-color: black;
          top: 13px;
          position: absolute;
          right: 8px;
          animation: loading 0.6s linear infinite alternate;
        }
      }
    }

    & .empty {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: gray;
    }
  }

  @keyframes loading {
    from {
      transform: translateX(0)
    }
    to {
      transform: translateX(550%)
    }
  }
</style>