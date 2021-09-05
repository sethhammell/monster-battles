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
  increasePlayerMana(state, payload) {
    if (state.currentPlayerMana + payload.value > state.maxPlayerv) {
      state.currentPlayerMana = state.maxPlayerMana;
    } else {
      state.currentPlayerMana += payload.value;
    }
  },
  decreasePlayerMana(state, payload) {
    if (state.currentPlayerMana - payload.value < 0) {
      state.currentPlayerMana = 0;
    } else {
      state.currentPlayerMana -= payload.value;
    }
  },
  newGame(state) {
    state.currentPlayerHealth = state.maxPlayerHealth;
  }
}
