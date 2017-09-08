<template>
  <li class="answer">
    <input 
      type="radio"
      @change="handleChange"
      :value="answer.id"
      :id="answer.id"
      name="answer"
      v-model="response">
    <label :for="answer.id">
      <span>{{ answer.title }}</span>
    </label>
  </li>
</template>

<script>
export default {
  name: 'answer',
  props: ['answer'],
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
  .answer {
    box-sizing: border-box;
    flex: 1 1 calc(50% - 6px);
    height: 50px;
    border: 1px solid #d1d1d1;
    margin: 3px;

    @media screen and (max-width: 640px)  {
      flex: 1 1 100%;
    }

    &:hover {
      background-color: #f3f3f3;
      color: black;
      font-weight: bold;
      border-color: black;
    }

    & input[type="radio"] {
      display: none;
    }

    & label {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & input[type="radio"]:active + label {
      color: red;
      @nest li & {
        background-color: red;
      }
    }
  }

</style>