<template>
  <div>
    <main-menu-header></main-menu-header>
    <start-button></start-button>
  </div>
</template>

<script>
import MainMenuHeader from "../components/main-menu/UI/MainMenuHeader.vue";
import StartButton from '../components/main-menu/UI/StartButton.vue';

export default {
  components: { MainMenuHeader, StartButton }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "munro";
  font-size: 105%;
}
</style>