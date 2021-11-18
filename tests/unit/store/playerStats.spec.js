import playerStatsModule from '@/store/modules/playerStats/index.js';
import monsterStatsModule from '@/store/modules/monsterStats/index.js';
import battleStatsModule from '@/store/modules/battleStats/index.js';
import battleMessagesModule from '@/store/modules/battleMessages/index.js';
import { Characters } from "@/enums/characters";
import { PlayerActions } from "@/enums/playerActions";
import { createStore } from 'vuex';
import { cloneDeep } from 'lodash';

describe('playerStats', () => {
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

  it('updates "monsterHealth" and "playerMana" when "playerAction" is dispatched with "PlayerActions.SPECIAL_ATTACK"', async () => {
    const store = storeCopy();
    const monsterHealth = store.getters['monsterStats/currentMonsterHealth'];
    const playerMana = store.getters['playerStats/currentPlayerMana'];

    await store.dispatch('playerStats/playerAction', { action: PlayerActions.SPECIAL_ATTACK });
    expect(store.getters['monsterStats/currentMonsterHealth']).toBeLessThan(monsterHealth);
    expect(store.getters['playerStats/currentPlayerMana']).toBeLessThan(playerMana);
  });

  it('sets "winner" getter to monster when "surrender" is dispatched', () => {
    const store = storeCopy();

    expect(store.getters['battleStats/winner']).toBe(null);
    store.dispatch('playerStats/surrender');
    expect(store.getters['battleStats/winner']).toBe(Characters.MONSTER);
  });

  it('updates "battleMessagesLog" and "battleActionsLog" when "endPlayerTurn" is dispatched', async () => {
    const store = storeCopy();
    const battleMessagesLog = store.getters['battleMessages/battleMessagesLog'].slice();
    const battleActionsLog = store.getters['battleMessages/battleActionsLog'].slice();
    const by = Characters.PLAYER;
    const type = PlayerActions.SPECIAL_ATTACK;
    const value = 99;
    const increase = false;

    await store.dispatch('playerStats/endPlayerTurn', { by: by, type: type, value: value, increase: increase });
    expect(store.getters['battleMessages/battleMessagesLog'].length).toBe(battleMessagesLog.length + 2);
    expect(store.getters['battleMessages/battleActionsLog'].length).toBe(battleActionsLog.length + 2);
    expect(store.getters['battleMessages/battleMessagesLog'][1]).toContain(type);
    expect(store.getters['battleMessages/battleMessagesLog'][1]).toContain(value);
    expect(store.getters['battleMessages/battleActionsLog'][1]).toContain(type);
    expect(store.getters['battleMessages/battleActionsLog'][1]).toContain(value);
  });

  it('updates "playerHealth" getter when "playerHealthBarChangeAnimation" is dispatched', async () => {
    const store = storeCopy();
    const playerHealth = store.getters['playerStats/currentPlayerHealth'];
    
    await store.dispatch('playerStats/playerHealthBarChangeAnimation', { increase: true, value: 1 });
    expect(store.getters['playerStats/currentPlayerHealth']).toBe(playerHealth);
    await store.dispatch('playerStats/playerHealthBarChangeAnimation', { increase: false, value: 2 });
    expect(store.getters['playerStats/currentPlayerHealth']).toBe(playerHealth - 2);
    await store.dispatch('playerStats/playerHealthBarChangeAnimation', { increase: true, value: 1 });
    expect(store.getters['playerStats/currentPlayerHealth']).toBe(playerHealth - 1);
  });
});
