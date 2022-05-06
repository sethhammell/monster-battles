<template>
  <div class="background" :style="backgroundImageStyle">
    <main-menu-header />
    <main-menu-name-input
      :value="username"
      @input="(e) => (username = e.target.value)"
    />
    <main-menu-base-button :disable="username === ''" @clicked="redirectToBattle">{{
      redirectToBattleText
    }}</main-menu-base-button>
  </div>
</template>

<script>
import MainMenuHeader from "../components/main-menu/UI/MainMenuHeader.vue";
import MainMenuBaseButton from "../components/main-menu/UI/MainMenuBaseButton.vue";
import mainMenuBackground from "@/assets/backgrounds/greenMountain.jpg";
import { mapActions } from "vuex";
import PlayerService from "./../services/PlayerService";
import MainMenuNameInput from "../components/main-menu/UI/MainMenuNameInput.vue";

export default {
  data() {
    return {
      backgroundImageStyle: {
        backgroundImage: `url(${mainMenuBackground})`,
      },
      username: ''
    };
  },
  components: { MainMenuHeader, MainMenuBaseButton, MainMenuNameInput },
  computed: {
    redirectToBattleText() {
      return "START";
    },
  },
  methods: {
    redirectToBattle() {
      console.log(this.username);
      this.$router.push("/battle");
      this.resetBattle();
    },
    ...mapActions("battleStats", ["resetBattle"]),
  },
  async mounted() {
    const test = await PlayerService.getPlayers();
    console.log(test);
  },
};
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
