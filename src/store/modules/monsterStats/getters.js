export default {
  monsterBarStyles(state) {
    return { width: state.currentMonsterHealth + '%' };
  },
  currentMonsterHealth(state) {
    return state.currentMonsterHealth;
  }
}