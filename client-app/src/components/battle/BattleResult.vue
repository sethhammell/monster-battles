<template>
  <div class="popup">
    <div class="popup-content">
      <div>
        <h2>{{ battleResultHeader }}</h2>
        <h3 class="text-wrap">{{ battleResultMessage }}</h3>
      </div>
      <div v-show="battleResultButtonsVisibility">
        <battle-result-button v-show="playerWin" @click="nextBattle">{{ nextBattleText }}</battle-result-button>
        <battle-result-button v-show="monsterWin" @click="resetBattle">{{ resetBattleText }}</battle-result-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BattleResultButton from './UI/BattleResultButton.vue';

export default {
  components: { BattleResultButton },
  computed: {
    ...mapGetters("battleStats", ["playerWin", "monsterWin"]),
    ...mapGetters("battleMessages", ["battleResultHeader", "battleResultMessage", "battleResultButtonsVisibility"]),
    nextBattleText() {
      return "NEXT BATTLE";
    },
    resetBattleText() {
      return "RETRY";
    }
  },
  methods: {
    ...mapActions("battleStats", ["nextBattle", "resetBattle"]),
    ...mapActions("battleMessages", ["hideBattleResultButtons"])
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
  width: 20rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  border-color: #fff;
}

.text-wrap {
  white-space: pre-wrap;
}
</style>
