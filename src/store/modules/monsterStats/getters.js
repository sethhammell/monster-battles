export default {
  currentMonsterHealth(state) {
    return state.currentMonsterHealth;
  },
  monsterBarStyles(state) {
    return { width: state.currentMonsterHealth + '%' };
  }
}