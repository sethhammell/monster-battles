export default {
  playerHealthBarStyles(state) {
    return { width: state.currentPlayerHealth + '%' };
  },
  playerManaBarStyles(state) {
    return { width: state.currentPlayerMana + '%' };
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
