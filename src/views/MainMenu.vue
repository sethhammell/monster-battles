<template>
  <div class="background" :style="backgroundImageStyle">
    <main-menu-header></main-menu-header>
    <start-button></start-button>
  </div>
</template>

<script>
import MainMenuHeader from "../components/main-menu/UI/MainMenuHeader.vue";
import StartButton from '../components/main-menu/UI/StartButton.vue';
import mainMenuBackground from '@/assets/backgrounds/greenMountain.jpg';

export default {
  data() {
    return {
      backgroundImageStyle: {
        backgroundImage: `url(${mainMenuBackground})`
      }
    }
  },
  components: { MainMenuHeader, StartButton }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "munro";
  font-size: 105%;
}

.background {
  background-repeat: repeat-x;
  background-size: auto 100vh;
  height: 100vh;
}
</style>