import { boundedAdd, boundedSub } from "@/helper-functions/boundedOperations";

export default {
  increaseMonsterHealth(state, payload) {
    state.currentMonsterStats.currentHealth = boundedAdd(state.currentMonsterStats.currentHealth, payload.value, state.currentMonsterStats.maxHealth);
  },
  decreaseMonsterHealth(state, payload) {
    state.currentMonsterStats.currentHealth = boundedSub(state.currentMonsterStats.currentHealth, payload.value);
  },
  newGame(state) {
    state.currentMonsterStats.currentHealth = state.currentMonsterStats.maxHealth;
  }
}
