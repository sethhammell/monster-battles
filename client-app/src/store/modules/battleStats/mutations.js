export default {
  incrementCurrentRound(state) {
    state.currentRound++;
  },
  updateWinner(state, payload) {
    state.winner = payload.winner;
  },
  resetStats(state) {
    state.currentRound = 0;
    state.winner = null;
  },
  toggleOptionsMenu(state) {
    state.inOptionsMenu = !state.inOptionsMenu;
  }
}
