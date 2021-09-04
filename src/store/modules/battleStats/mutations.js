export default {
  incrementCurrentRound(state) {
    state.currentRound++;
  },
  updateWinner(state) {
    state.winner = null;
  },
  surrender(state) {
    state.winner = 'monster';
  }
}