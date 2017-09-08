<template>
  <div class="result">
    <section>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="100%" height="200px" viewBox="0 0 33.557 27.118" enable-background="new 0 0 33.557 27.118" xml:space="preserve">
        <polyline v-if="isCorrect === true" class="path check" fill="none" stroke="#2dac01" stroke-width="5" stroke-miterlimit="10" points="6.261,12.759 13.708,19.331 27.205,6.168 
"/>
      <path v-if="isCorrect === false" class="path wrong" fill="none" stroke="#ac0101" stroke-width="4.8462" stroke-miterlimit="10" d="M27.48,14.08
	c-0.272,5.676-4.959,10.193-10.702,10.193c-5.918,0-10.715-4.797-10.715-10.715c0-5.917,4.797-10.715,10.715-10.715
	s10.715,4.798,10.715,10.715C27.493,13.733,27.488,13.907,27.48,14.08"/>

      </svg>
      <p v-if="isCorrect === true">Correct</p>
      <p v-if="isCorrect === false">Faux</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'result',
  props: ['isCorrect'],
  data () {
    return {
      response: null
    }
  },
  methods: {
    handleChange () {
      this.$emit('answered', this.response)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
  .path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 5s linear forwards;
  }

  .result {
    text-align: center;

    & p {
      font-size: 50px;
    }
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 1000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

</style>