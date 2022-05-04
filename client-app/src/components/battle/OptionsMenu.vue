<template>
  <div class="popup">
    <div class="popup-content">
      <div>
        <h2>{{ optionsMenuHeaderText }}</h2>
      </div>
      <div>
        <options-menu-button @click="redirectToMainMenu">{{ redirectToMainMenuText }}</options-menu-button>
        <options-menu-button @click="optionsSurrender">{{ surrenderText }}</options-menu-button>
        <options-menu-button @click="toggleOptionsMenu">{{ resumeButtonText }}</options-menu-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import OptionsMenuButton from './UI/header/OptionsMenuButton.vue';

export default {
  components: { OptionsMenuButton },
  computed: {
    optionsMenuHeaderText() {
      return "Options";
    },
    redirectToMainMenuText() {
      return "MAIN MENU";
    },
    surrenderText() {
      return "SURRENDER";
    },
    resumeButtonText() {
      return "RESUME";
    },
  },
  methods: {
    ...mapActions("battleStats", ["toggleOptionsMenu"]),
    ...mapActions("playerStats", ["surrender"]),
    redirectToMainMenu() {
      this.toggleOptionsMenu();
      this.$router.push("/main-menu");
    },
    optionsSurrender() {
      this.toggleOptionsMenu();
      this.surrender();
    }
  },
};
</script>

<style scoped>
.popup {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.popup-content {
  background: #fff;
  padding: 2rem;
  width: 18rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  border-color: #fff;
}
</style>
