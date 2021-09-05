export default {
  increaseMonsterHealth(state, payload) {
    if (state.currentMonsterHealth + payload.value > state.maxMonsterHealth) {
      state.currentMonsterHealth = state.maxMonsterHealth;
    } else {
      state.currentMonsterHealth += payload.value;
    }
  },
  decreaseMonsterHealth(state, payload) {
    if (state.currentMonsterHealth - payload.value < 0) {
      state.currentMonsterHealth = 0;
    } else {
      state.currentMonsterHealth -= payload.value;
    }
  },
  newGame(state) {
    state.currentMonsterHealth = state.maxMonsterHealth;
  }
}
