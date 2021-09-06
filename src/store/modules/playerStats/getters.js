export default {
  playerHealthBarStyles(state) {
    return { width: state.currentPlayerHealth / state.maxPlayerHealth * 100 + '%' };
  },
  playerManaBarStyles(state) {
    return { width: state.currentPlayerMana / state.maxPlayerMana * 100 + '%' };
  },
  playerName(state) {
    return state.playerName;
  },
  currentPlayerHealth(state) {
    return state.currentPlayerHealth;
  },
  currentPlayerMana(state) {
    return state.currentPlayerMana;
  },
  specialAttackManaCost(state) {
    return state.specialAttackManaCost;
  },
  canUseSpecialAttack(state) {
    return state.currentPlayerMana < state.specialAttackManaCost;
  }
}
