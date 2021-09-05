export default {
  increasePlayerHealth(state, payload) {
    if (state.currentPlayerHealth + payload.value > state.maxPlayerHealth) {
      state.currentPlayerHealth = state.maxPlayerHealth;
    } else {
      state.currentPlayerHealth += payload.value;
    }
  },
  decreasePlayerHealth(state, payload) {
    if (state.currentPlayerHealth - payload.value < 0) {
      state.currentPlayerHealth = 0;
    } else {
      state.currentPlayerHealth -= payload.value;
    }
  },
  newGame(state) {
    state.currentPlayerHealth = state.maxPlayerHealth;
  }
}