export default {
  playerBarStyles(state) {
    return { width: state.currentPlayerHealth + '%' };
  },
  currentPlayerHealth(state) {
    return state.currentPlayerHealth;
  }
}