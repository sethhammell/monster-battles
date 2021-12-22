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
  margin: 1rem;
  width: 16rem;
  height: 5rem;
  font-size: 160%;
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
</style>
