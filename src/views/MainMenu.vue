<template>
  <div class="background" :style="backgroundImageStyle">
    <main-menu-header></main-menu-header>
    <main-menu-base-button @click="redirectToBattle()">{{ redirectToBattleText }}</main-menu-base-button>
  </div>
</template>

<script>
import MainMenuHeader from "../components/main-menu/UI/MainMenuHeader.vue";
import MainMenuBaseButton from '../components/main-menu/UI/MainMenuBaseButton.vue';
import mainMenuBackground from '@/assets/backgrounds/greenMountain.jpg';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      backgroundImageStyle: {
        backgroundImage: `url(${mainMenuBackground})`
      }
    }
  },
  components: { MainMenuHeader, MainMenuBaseButton },
  computed: {
    redirectToBattleText() {
      return "START";
    },
  },
  methods: {
    redirectToBattle() {
      this.$router.push("/battle");
      this.resetBattle();
    },
    ...mapActions('battleStats', ['resetBattle'])
  },
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