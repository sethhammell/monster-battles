<template>
  <div>
    <button @click="redirectToMainMenu">
      {{ redirectToMainMenuText }}
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    redirectToMainMenuText() {
      return "MAIN MENU";
    },
  },
  methods: {
    redirectToMainMenu() {
      this.$router.push("/main-menu");
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
  border: 3px solid #000000;
  margin: 1rem;
  width: 16rem;
  height: 5rem;
  font-size: 125%;
  cursor: pointer;
  margin-right: 7rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.26);
  justify-content: right;
  position: absolute;
  right: 0;
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

button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}
</style>
