<template>
  <div>
    <button>
      <slot> </slot>
    </button>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border: 3px solid #000000;
  margin: 1rem;
  width: 12rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #af0a78;
  border-color: #423b3b;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}
</style>
