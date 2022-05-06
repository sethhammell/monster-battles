import { boundedAdd, boundedSub } from "@/helper-functions/boundedOperations";
import { BattleSpeeds } from "@/enums/battleSpeeds";
import { boundedDiv, boundedMult } from "@/helper-functions/boundedOperations";

export default {
  increasePlayerHealth(state, payload) {
    state.playerStats.currentHealth = boundedAdd(state.playerStats.currentHealth, payload.value, state.playerStats.maxHealth);
  },
  decreasePlayerHealth(state, payload) {
    state.playerStats.currentHealth = boundedSub(state.playerStats.currentHealth, payload.value);
  },
  increasePlayerMana(state, payload) {
    state.playerStats.currentMana = boundedAdd(state.playerStats.currentMana, payload.value, state.playerStats.maxMana);
  },
  decreasePlayerMana(state, payload) {
    state.playerStats.currentMana = boundedSub(state.playerStats.currentMana, payload.value);
  },
  resetStats(state) {
    state.playerStats.currentHealth = state.playerStats.maxHealth;
    state.playerStats.currentMana = state.playerStats.maxMana;
  },
  showPlayerActions(state) {
    state.playerActionsVisibility = true;
  },
  hidePlayerActions(state) {
    state.playerActionsVisibility = false;
  },
  doublePlayerHealthBarAnimationSpeed(state) {
    state.playerHealthBarAnimationSpeed = boundedMult(state.playerHealthBarAnimationSpeed, 2, BattleSpeeds.MAX_BATTLE_SPEED);
  },
  halfPlayerHealthBarAnimationSpeed(state) {
    state.playerHealthBarAnimationSpeed = boundedDiv(state.playerHealthBarAnimationSpeed, 2, BattleSpeeds.MIN_BATTLE_SPEED);
  },
  increasePlayerExp(state, payload) {
    state.playerStats.exp += payload.value;
    state.playerStats.applyCurrentLevel();
  },
  setPlayerName(state, payload) {
    state.playerStats.name = payload.value;
  }
}
