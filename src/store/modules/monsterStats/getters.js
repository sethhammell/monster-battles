export default {
  monsterHealthBarStyles(state) {
    return { width: state.currentMonsterHealth + '%' };
  },
  currentMonsterHealth(state) {
    return state.currentMonsterHealth;
  }
}
