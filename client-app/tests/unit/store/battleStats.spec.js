import playerStatsModule from '@/store/modules/playerStats/index.js';
import monsterStatsModule from '@/store/modules/monsterStats/index.js';
import battleStatsModule from '@/store/modules/battleStats/index.js';
import battleMessagesModule from '@/store/modules/battleMessages/index.js';
import { Characters } from "@/enums/characters";
import { createStore } from 'vuex';
import { cloneDeep } from 'lodash';

describe('battleStats', () => {
  const storeCopy = () => {
    return createStore({
      modules: {
        playerStats: cloneDeep(playerStatsModule),
        monsterStats: cloneDeep(monsterStatsModule),
        battleStats: cloneDeep(battleStatsModule),
        battleMessages: cloneDeep(battleMessagesModule)
      }
    });
  }

  it('updates "winner" when updateWinner is dispatched', () => {
    const store = storeCopy();

    store.dispatch('battleStats/updateWinner', { winner: Characters.PLAYER });
    expect(store.getters['battleStats/winner']).toBe(Characters.PLAYER);
    store.dispatch('battleStats/updateWinner', { winner: Characters.MONSTER });
    expect(store.getters['battleStats/winner']).toBe(Characters.MONSTER);
  });

  it('updates "winner" when checkForWinner is dispatched and "currentMonsterHealth" or "currentPlayerHealth" is 0', () => {
    const store = storeCopy();
    const playerHealth = store.getters['playerStats/currentPlayerHealth'];
    const monsterHealth = store.getters['monsterStats/currentMonsterHealth'];

    store.commit('playerStats/decreasePlayerHealth', { value: playerHealth });
    store.dispatch('battleStats/checkForWinner');
    expect(store.getters['battleStats/winner']).toBe(Characters.MONSTER);
    store.commit('playerStats/increasePlayerHealth', { value: playerHealth });

    store.commit('monsterStats/decreaseMonsterHealth', { value: monsterHealth });
    store.dispatch('battleStats/checkForWinner');
    expect(store.getters['battleStats/winner']).toBe(Characters.PLAYER);
  });

  it('updates "currentMonsterStats", "winner" to null, and "currentRound" to 0 when "nextBattle" is dispatched', () => {
    const store = storeCopy();
    const currentMonster = store.getters['monsterStats/monsterLevelName'];

    store.dispatch('battleStats/updateWinner', { winner: Characters.PLAYER });
    store.commit('battleStats/incrementCurrentRound');
    store.dispatch('battleStats/nextBattle');
    expect(store.getters['monsterStats/monsterLevelName']).not.toBe(currentMonster);
    expect(store.getters['battleStats/winner']).toBe(null);
    expect(store.getters['battleStats/currentRound']).toBe(0);
  });

  it('updates "winner" to null and "currentRound" to 0 when "resetBattle" is dispatched', () => {
    const store = storeCopy();

    store.dispatch('battleStats/updateWinner', { winner: Characters.PLAYER });
    store.commit('battleStats/incrementCurrentRound');
    store.dispatch('battleStats/resetBattle');
    expect(store.getters['battleStats/winner']).toBe(null);
    expect(store.getters['battleStats/currentRound']).toBe(0);
  });

  it('updates all battle stat values to their original when "resetStats" is dispatched', () => {
    const store = storeCopy();

    store.dispatch('battleStats/updateWinner', { winner: Characters.PLAYER });
    store.commit('battleStats/incrementCurrentRound');
    store.commit('playerStats/decreasePlayerHealth', { value: 1 });
    store.commit('playerStats/decreasePlayerMana', { value: 1 });
    store.commit('monsterStats/decreaseMonsterHealth', { value: 1 });
    store.commit('monsterStats/decreaseMonsterMana', { value: 1 });
    store.dispatch('battleStats/resetStats');
    expect(store.getters['battleStats/winner']).toBe(null);
    expect(store.getters['battleStats/currentRound']).toBe(0);
    expect(store.getters['playerStats/currentPlayerHealth']).toBe(store.getters['playerStats/maxPlayerHealth']);
    expect(store.getters['playerStats/currentPlayerMana']).toBe(store.getters['playerStats/maxPlayerMana']);
    expect(store.getters['monsterStats/currentMonsterHealth']).toBe(store.getters['monsterStats/maxMonsterHealth']);
    expect(store.getters['monsterStats/currentPlayerHealth']).toBe(store.getters['monsterStats/maxMonsterMana']);
    expect(store.getters['battleMessages/battleMessagesLog'].length).toBe(1);
    expect(store.getters['battleMessages/battleActionsLog']).toStrictEqual([]);
    expect(store.getters['battleMessages/battleAnimationMessage']).toBe('');
    expect(store.getters['battleMessages/battleResultHeader']).toBe('');
    expect(store.getters['battleMessages/battleResultMessage']).toBe('');
    expect(store.getters['battleMessages/battleResultButtonsVisibility']).toBe(false);
  });

  it('updates "inOptionsMenu" to "!inOptionsMenu" when "toggleOptionsMenu" is dispatched', () => {
    const store = storeCopy();

    const inOptionsMenu = store.getters['battleStats/inOptionsMenu'];
    store.dispatch('battleStats/toggleOptionsMenu');
    expect(store.getters['battleStats/inOptionsMenu']).toBe(!inOptionsMenu);
  });

  it('updates "battleAnimationMessageSpeed", "playerHealthBarAnimationSpeed", and "monsterHealthBarAnimationSpeed" to double when "doubleBattleSpeed" is dispatched', () => {
    const store = storeCopy();
    store.dispatch('battleStats/halfBattleSpeed');
    const battleAnimationMessageSpeed = store.getters['battleMessages/battleAnimationMessageSpeed'];
    const playerHealthBarAnimationSpeed = store.getters['playerStats/playerHealthBarAnimationSpeed'];
    const monsterHealthBarAnimationSpeed = store.getters['monsterStats/monsterHealthBarAnimationSpeed'];

    store.dispatch('battleStats/doubleBattleSpeed');
    expect(store.getters['battleMessages/battleAnimationMessageSpeed']).toBe(battleAnimationMessageSpeed * 2);
    expect(store.getters['playerStats/playerHealthBarAnimationSpeed']).toBe(playerHealthBarAnimationSpeed * 2);
    expect(store.getters['monsterStats/monsterHealthBarAnimationSpeed']).toBe(monsterHealthBarAnimationSpeed * 2);
  });

  it('updates "battleAnimationMessageSpeed", "playerHealthBarAnimationSpeed", and "monsterHealthBarAnimationSpeed" to half when "halfBattleSpeed" is dispatched', () => {
    const store = storeCopy();
    store.dispatch('battleStats/doubleBattleSpeed');
    const battleAnimationMessageSpeed = store.getters['battleMessages/battleAnimationMessageSpeed'];
    const playerHealthBarAnimationSpeed = store.getters['playerStats/playerHealthBarAnimationSpeed'];
    const monsterHealthBarAnimationSpeed = store.getters['monsterStats/monsterHealthBarAnimationSpeed'];

    store.dispatch('battleStats/halfBattleSpeed');
    expect(store.getters['battleMessages/battleAnimationMessageSpeed']).toBe(battleAnimationMessageSpeed / 2);
    expect(store.getters['playerStats/playerHealthBarAnimationSpeed']).toBe(playerHealthBarAnimationSpeed / 2);
    expect(store.getters['monsterStats/monsterHealthBarAnimationSpeed']).toBe(monsterHealthBarAnimationSpeed / 2);
  });
});
