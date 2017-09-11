<template>
  <li class="answer">
    <button
      @click="handleClick"
      type="button"
      :data-reponse-id="answer.id"
      class="btn--reset">
      <p>{{ answer.title }}
        <span v-if="isCorrectAnswer" class="hint">C'est la bonne réponse</span>
      </p>
    </button>
  </li>
</template>

<script>
export default {
  name: 'answer',
  props: ['answer', 'isCorrectAnswer'],
  methods: {
    handleClick (e) {
      this.$emit('answered', ~~e.target.dataset.reponseId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
  .answer {
    box-sizing: border-box;
    flex: 1 1 calc(50% - 6px);
    height: 50px;
    border: 1px solid #d1d1d1;
    margin: 3px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 640px)  {
      flex: 1 1 100%;
      -webkit-flex: 1 1 100%;
    }

    &:hover {
      background-color: #f3f3f3;
      color: black;
      font-weight: bold;
      border-color: black;
    }

    & button {
      width: 100%;
      height: 100%;
      font-size: .8rem;
      font-weight: 400;
      &:focus, &:active {
        background-color: #f5f7f6;
      }
    }

    & .hint {
      vertical-align:super;
      color: #2dac01;
      font-size: 0.8rem;
    }
  }

</style>