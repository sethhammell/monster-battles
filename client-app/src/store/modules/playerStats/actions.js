import { Characters } from "@/enums/characters";
import PlayerService from "../../../services/PlayerService";

export default {
  async playerAction({ commit, dispatch, getters }, payload) {
    commit("battleStats/incrementCurrentRound", null, { root: true });
    commit("hidePlayerActions");

    var playerAction = getters.playerBattleActions[payload.action];

    var actionValue = playerAction.getActionValue();
    var manaCost = playerAction.manaCost;
    var increase = playerAction.heal;

    commit("decreasePlayerMana", { value: manaCost });
    await dispatch("endPlayerTurn", {
      by: Characters.PLAYER,
      type: payload.action,
      value: actionValue,
      increase: increase,
    });
  },
  surrender({ dispatch }) {
    dispatch(
      "battleStats/updateWinner",
      { winner: Characters.MONSTER },
      { root: true }
    );
  },
  async endPlayerTurn({ commit, dispatch, rootGetters }, payload) {
    dispatch(
      "battleMessages/logBattleAction",
      { by: payload.by, type: payload.type, value: payload.value },
      { root: true }
    );
    await dispatch("battleMessages/battleMessageAnimation", null, {
      root: true,
    }).then(async () => {
      var animationFunction = payload.increase
        ? "playerStats/playerHealthBarChangeAnimation"
        : "monsterStats/monsterHealthBarChangeAnimation";
      await dispatch(
        animationFunction,
        { increase: payload.increase, value: payload.value },
        { root: true }
      ).then(() => {
        dispatch("battleStats/checkForWinner", null, { root: true });
        if (rootGetters["battleStats/gameOver"]) {
          commit("showPlayerActions");
        } else {
          dispatch("monsterStats/monsterAction", null, { root: true });
        }
      });
    });
  },
  playerHealthBarChangeAnimation({ commit, getters }, payload) {
    return new Promise((resolve) => {
      const changeValue = 1;
      var newHealth = payload.increase
        ? getters.currentPlayerHealth + payload.value
        : getters.currentPlayerHealth - payload.value;

      if (newHealth < 0) {
        newHealth = 0;
      } else if (newHealth > getters.maxPlayerHealth) {
        newHealth = getters.maxPlayerHealth;
      }

      var interval = setInterval(() => {
        if (getters.currentPlayerHealth === newHealth) {
          clearInterval(interval);
          resolve();
        } else if (getters.currentPlayerHealth != newHealth) {
          if (payload.increase === true) {
            commit("increasePlayerHealth", { value: changeValue });
          } else {
            commit("decreasePlayerHealth", { value: changeValue });
          }
        }
      }, getters.playerHealthBarAnimationSpeed);
    });
  },
  async increasePlayerExp({ commit, getters }, payload) {
    commit("increasePlayerExp", { value: payload.value });
    await PlayerService.updatePlayer(getters.playerName, getters.currentPlayerExp);
  },
  setPlayerExp({ commit }, payload) {
    commit("setPlayerExp", { value: payload.value });
  },
  setPlayerName({ commit }, payload) {
    commit("setPlayerName", { value: payload.name });
  },
};
