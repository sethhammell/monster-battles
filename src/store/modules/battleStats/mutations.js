import { characters } from "@/enums/characters";

export default {
  incrementCurrentRound(state) {
    state.currentRound++;
  },
  updateWinner(state, payload) {
    state.winner = payload.winner;
  },
  surrender(state) {
    state.winner = characters.MONSTER;
  },
  newGame(state) {
    state.currentRound = 0;
    state.winner = null;
  }
}
