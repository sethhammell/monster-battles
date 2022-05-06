<template>
  <div>
    <button @clicked="$emit('clicked')">
      <slot> </slot>
    </button>
  </div>
</template>

<style scoped>
button {
  font: inherit;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border: 3px solid #000000;
  width: 12rem;
  cursor: pointer;
  margin: 0.5rem;
  box-shadow: 2px 4px 10px gray;
}

button:focus {
  outline: none;
}

button:active {
  border-color: #423b3b;
  background-color: #af0a78;
  box-shadow: 0 0 0 white;
  margin-top: 9px;
  padding-top: 15px;
}

button:hover {
  background-color: #af0a78;
}
</style>
