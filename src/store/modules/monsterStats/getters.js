export default {
  monsterHealthBarStyles(state) {
    return { width: state.currentMonsterHealth / state.maxMonsterHealth * 100 + '%' };
  },
  monsterName(state) {
    return state.monsterName;
  },
  currentMonsterHealth(state) {
    return state.currentMonsterHealth;
  }
}
