<template>
  <header>
    <h1>{{ mainMenuWelcomeText }}</h1>
  </header>
</template>

<script>
export default {
  computed: {
    mainMenuWelcomeText() {
      return "Welcome to Monster Battles";
    }
  }
}
</script>

<style scoped>
header {
  width: 1250px;
  box-shadow: 0 9px 10px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  background-color: #880017;
  border: 3px solid #000000;
  color: white;
  text-align: center;
  margin: auto;
}
</style>
