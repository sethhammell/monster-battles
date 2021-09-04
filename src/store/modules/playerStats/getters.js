export default {
  currentPlayerHealth(state) {
    return state.currentPlayerHealth;
  },
  playerBarStyles(state) {
    return { width: state.currentPlayerHealth + '%' };
  }
}