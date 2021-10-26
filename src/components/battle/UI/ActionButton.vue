<template>
  <div>
    <button :disabled="disable">
      <slot> </slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    disable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
button {
  font: inherit;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  /* border-radius: 12px; */
  border: 3px solid #000000;
  margin: 1rem;
  width: 12rem;
  cursor: pointer;
  box-shadow: 2px 4px 10px gray;
}

button:focus {
  outline: none;
}

button:active {
  border-color: #423b3b;
  background-color: #af0a78;
  box-shadow: 0 0 0 white;
  margin-top: 17px;
}

button:hover {
  background-color: #af0a78;
}

button:disabled {
  background-color: #ccc;
  border-color: #423b3b;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}
</style>
