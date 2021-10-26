<template>
  <div>
    <button :disabled="maxBattleSpeedReached" @click="doubleBattleSpeed">
      {{ decreaseBattleSpeedText }}
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { BattleSpeeds } from "@/enums/battleSpeeds";

export default {
  computed: {
    ...mapGetters("battleMessages", ["battleAnimationMessageSpeed"]),
    decreaseBattleSpeedText() {
      return "x0.5";
    },
    maxBattleSpeedReached() {
      return this.battleAnimationMessageSpeed == BattleSpeeds.MAX_BATTLE_SPEED;
    }
  },
  methods: {
    ...mapActions("battleStats", ["doubleBattleSpeed"])
  }
};
</script>

<style scoped>
button {
  font: inherit;
  background-color: #88005b;
  color: white;
  border: 3px solid #000000;
  margin: 16px 10px 4px 10px;
  width: 5rem;
  height: 5rem;
  font-size: 125%;
  cursor: pointer;
  box-shadow: 2px 4px 10px gray;
  justify-content: left;
  position: absolute;
  left: 10rem;
}

button:focus {
  outline: none;
}

button:active {
  border-color: #423b3b;
  background-color: #af0a78;
  box-shadow: 0 0 0 white;
  margin: 17px 10px 2px 10px;
}

button:hover {
  background-color: #af0a78;
}

button:disabled {
  background-color: #ccc;
  border-color: #423b3b;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}
</style>
