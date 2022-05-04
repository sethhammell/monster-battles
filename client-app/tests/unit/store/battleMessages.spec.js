import playerStatsModule from '@/store/modules/playerStats/index.js';
import monsterStatsModule from '@/store/modules/monsterStats/index.js';
import battleStatsModule from '@/store/modules/battleStats/index.js';
import battleMessagesModule from '@/store/modules/battleMessages/index.js';
import { Characters } from "@/enums/characters";
import { PlayerActions } from "@/enums/playerActions";
import { createStore } from 'vuex';
import { cloneDeep } from 'lodash';

describe('battleMessages', () => {
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

  it('updates "battleMessagesLog" and "battleActionsLog" when "logBattleAction" is dispatched', () => {
    const store = storeCopy();
    const battleMessagesLog = store.getters['battleMessages/battleMessagesLog'].slice();
    const battleActionsLog = store.getters['battleMessages/battleActionsLog'].slice();
    const by = Characters.PLAYER;
    const type = PlayerActions.SPECIAL_ATTACK;
    const value = 99;

    store.dispatch('battleMessages/logBattleAction', { by: by, type: type, value: value });
    expect(store.getters['battleMessages/battleMessagesLog'].length).toBe(battleMessagesLog.length + 1);
    expect(store.getters['battleMessages/battleActionsLog'].length).toBe(battleActionsLog.length + 1);
    expect(store.getters['battleMessages/battleMessagesLog'][0]).toContain(type);
    expect(store.getters['battleMessages/battleMessagesLog'][0]).toContain(value);
    expect(store.getters['battleMessages/battleActionsLog'][0]).toContain(type);
    expect(store.getters['battleMessages/battleActionsLog'][0]).toContain(value);
  });

  it('updates "battleAnimationMessage" when "battleMessageAnimation" is dispatched', async () => {
    const store = storeCopy();
    const by = Characters.PLAYER;
    const type = PlayerActions.SPECIAL_ATTACK;
    const value = 99;

    store.dispatch('battleMessages/logBattleAction', { by: by, type: type, value: value });
    await store.dispatch('battleMessages/battleMessageAnimation');
    expect(store.getters['battleMessages/battleAnimationMessage']).toContain(type);
    expect(store.getters['battleMessages/battleAnimationMessage']).toContain(value);
  });

  it('updates "battleAnimationMessage" when "enemyApproaches" is dispatched', async () => {
    const store = storeCopy();

    await store.dispatch('battleMessages/enemyApproaches');
    expect(store.getters['battleMessages/battleAnimationMessage']).toContain('An enemy ');
    expect(store.getters['battleMessages/battleAnimationMessage']).toContain(' approaches.');
  });

  it('updates "battleResultHeader" when "battleResultTextAnimation" is dispatched', async () => {
    const store = storeCopy();

    const headerMessage = 'Victory!';
    await store.dispatch('battleMessages/battleResultTextAnimation', { currentMessage: headerMessage, variable: 'BattleResultHeader' });
    expect(store.getters['battleMessages/battleResultHeader']).toBe(headerMessage);
  });

  it('updates "battleResultHeader" and "battleResultMessage when "displayBattleResults" is dispatched', async () => {
    const store = storeCopy();

    store.commit('battleStats/updateWinner', { winner: Characters.PLAYER });
    await store.dispatch('battleMessages/displayBattleResults');
    expect(store.getters['battleMessages/battleResultHeader']).toBe('Victory!');
    expect(store.getters['battleMessages/battleResultMessage']).toContain('You defeated the ');
    expect(store.getters['battleMessages/battleResultButtonsVisibility']).toBe(true);
  });
});
