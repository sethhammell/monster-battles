import { characters } from "@/enums/characters";

export default {
  currentRound(state) {
    return state.currentRound;
  },
  winner(state) {
    return state.winner;
  },
  inOptionsMenu(state) {
    return state.inOptionsMenu;
  },
  playerWin(getters) {
    return getters.winner === characters.PLAYER;
  },
  monsterWin(getters) {
    return getters.winner === characters.MONSTER;
  },
  gameOver(getters) {
    return getters.winner !== null;
  }
}
