import { boundedAdd, boundedSub } from "@/helper-functions/boundedOperations";

export default {
  increaseMonsterHealth(state, payload) {
    state.currentMonsterStats.currentHealth = boundedAdd(state.currentMonsterStats.currentHealth, payload.value, state.currentMonsterStats.maxHealth);
  },
  decreaseMonsterHealth(state, payload) {
    state.currentMonsterStats.currentHealth = boundedSub(state.currentMonsterStats.currentHealth, payload.value);
  },
  nextMonster(state) {
    state.currentMonsterIndex++
    if (state.currentMonsterIndex < state.monsters.length)
    {
      state.currentMonsterStats = state.monsters[state.currentMonsterIndex];
    }
  },
  resetStats(state) {
    state.currentMonsterStats.currentHealth = state.currentMonsterStats.maxHealth;
    state.currentMonsterStats.currentMana = state.currentMonsterStats.maxMana;
  }
}
