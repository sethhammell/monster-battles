import { boundedAdd, boundedSub } from "@/helper-functions/boundedOperations";
import { BattleSpeeds } from "@/enums/battleSpeeds";
import { boundedDiv, boundedMult } from "@/helper-functions/boundedOperations";

export default {
  increaseMonsterHealth(state, payload) {
    state.currentMonsterStats.currentHealth = boundedAdd(
      state.currentMonsterStats.currentHealth,
      payload.value,
      state.currentMonsterStats.maxHealth
    );
  },
  decreaseMonsterHealth(state, payload) {
    state.currentMonsterStats.currentHealth = boundedSub(
      state.currentMonsterStats.currentHealth,
      payload.value
    );
  },
  increaseMonsterMana(state, payload) {
    state.currentMonsterStats.currentMana = boundedAdd(
      state.currentMonsterStats.currentMana,
      payload.value,
      state.currentMonsterStats.maxMana
    );
  },
  decreaseMonsterMana(state, payload) {
    state.currentMonsterStats.currentMana = boundedSub(
      state.currentMonsterStats.currentMana,
      payload.value
    );
  },
  nextMonster(state) {
    state.currentMonsterIndex++;
  },
  updateMonster(state) {
    if (state.currentMonsterIndex < state.monsters.length) {
      state.currentMonsterStats = state.monsters[state.currentMonsterIndex];
    }
  },
  setCurrentMonster(state, payload) {
    state.currentMonsterIndex = payload.value;
    if (state.currentMonsterIndex < state.monsters.length) {
      state.currentMonsterStats = state.monsters[state.currentMonsterIndex];
    }
  },
  resetStats(state) {
    state.currentMonsterStats.currentHealth =
      state.currentMonsterStats.maxHealth;
    state.currentMonsterStats.currentMana = state.currentMonsterStats.maxMana;
  },
  doubleMonsterHealthBarAnimationSpeed(state) {
    state.monsterHealthBarAnimationSpeed = boundedMult(
      state.monsterHealthBarAnimationSpeed,
      2,
      BattleSpeeds.MAX_BATTLE_SPEED
    );
  },
  halfMonsterHealthBarAnimationSpeed(state) {
    state.monsterHealthBarAnimationSpeed = boundedDiv(
      state.monsterHealthBarAnimationSpeed,
      2,
      BattleSpeeds.MIN_BATTLE_SPEED
    );
  },
};
