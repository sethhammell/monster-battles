<template>
  <div>
    <button>
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
  margin: 16px 10px 4px 10px;
  box-shadow: 2px 4px 10px gray;
}

button:focus {
  outline: none;
}

button:active {
  border-color: #423b3b;
  background-color: #af0a78;
  box-shadow: 0 0 0 white;
  margin: 17px 10px 2px 10px;
  padding-top: 1.0625rem;
}

button:hover {
  background-color: #af0a78;
}
</style>
