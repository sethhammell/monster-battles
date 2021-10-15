export default {
  incrementCurrentRound(state) {
    state.currentRound++;
  },
  updateWinner(state, payload) {
    state.winner = payload.winner;
  },
  newGame(state) {
    state.currentRound = 0;
    state.winner = null;
  }
}
