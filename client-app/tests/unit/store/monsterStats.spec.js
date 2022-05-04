import playerStatsModule from '@/store/modules/playerStats/index.js';
import monsterStatsModule from '@/store/modules/monsterStats/index.js';
import battleStatsModule from '@/store/modules/battleStats/index.js';
import battleMessagesModule from '@/store/modules/battleMessages/index.js';
import { Characters } from "@/enums/characters";
import { MonsterActions } from "@/enums/monsterActions";
import { createStore } from 'vuex';
import { cloneDeep } from 'lodash';

describe('monsterStats', () => {
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

  it('updates "playerHealth" when "monsterAction" is dispatched', async () => {
    const store = storeCopy();
    const playerHealth = store.getters['playerStats/currentPlayerHealth'];

    await store.dispatch('monsterStats/monsterAction');
    expect(store.getters['playerStats/currentPlayerHealth']).toBeLessThan(playerHealth)
  });

  it('updates "battleMessagesLog" and "battleActionsLog" when "endMonsterTurn" is dispatched', async () => {
    const store = storeCopy();
    const battleMessagesLog = store.getters['battleMessages/battleMessagesLog'].slice();
    const battleActionsLog = store.getters['battleMessages/battleActionsLog'].slice();
    const by = Characters.MONSTER;
    const type = MonsterActions.ATTACK;
    const value = 98;

    await store.dispatch('monsterStats/endMonsterTurn', { by: by, type: type, value: value });
    expect(store.getters['battleMessages/battleMessagesLog'].length).toBe(battleMessagesLog.length + 1);
    expect(store.getters['battleMessages/battleActionsLog'].length).toBe(battleActionsLog.length + 1);
    expect(store.getters['battleMessages/battleMessagesLog'][0]).toContain(type);
    expect(store.getters['battleMessages/battleMessagesLog'][0]).toContain(value);
    expect(store.getters['battleMessages/battleActionsLog'][0]).toContain(type);
    expect(store.getters['battleMessages/battleActionsLog'][0]).toContain(value);
  });

  it('updates "monsterHealth" getter when "monsterHealthBarChangeAnimation" is dispatched', async () => {
    const store = storeCopy();
    const monsterHealth = store.getters['monsterStats/currentMonsterHealth'];
    
    await store.dispatch('monsterStats/monsterHealthBarChangeAnimation', { increase: true, value: 1 });
    expect(store.getters['monsterStats/currentMonsterHealth']).toBe(monsterHealth);
    await store.dispatch('monsterStats/monsterHealthBarChangeAnimation', { increase: false, value: 2 });
    expect(store.getters['monsterStats/currentMonsterHealth']).toBe(monsterHealth - 2);
    await store.dispatch('monsterStats/monsterHealthBarChangeAnimation', { increase: true, value: 1 });
    expect(store.getters['monsterStats/currentMonsterHealth']).toBe(monsterHealth - 1);
  });
});
