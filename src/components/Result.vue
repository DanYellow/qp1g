<template>
  <div class="result">
    <section>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="100%" height="200px" viewBox="0 0 33.557 27.118" enable-background="new 0 0 33.557 27.118" xml:space="preserve">
        <polyline v-if="isCorrect === true" class="path correct" fill="none" stroke="#2dac01" stroke-width="5" stroke-miterlimit="10" points="6.261,12.759 13.708,19.331 27.205,6.168"/>
        <line v-if="isCorrect === false" class="path wrong" fill="none" stroke="#ac0101" stroke-width="5" stroke-miterlimit="10" x1="9.024" y1="5.806" x2="24.533" y2="21.313"/>
        <line v-if="isCorrect === false" class="path wrong" fill="none" stroke="#ac0101" stroke-width="5" stroke-miterlimit="10" x1="24.532" y1="5.806" x2="9.023" y2="21.313"/>
      </svg>
      <p v-if="isCorrect === true">Correct</p>
      <p v-if="isCorrect === false">Faux</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'result',
  props: ['isCorrect']
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