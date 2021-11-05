import playerStatsModule from '@/store/modules/playerStats/index.js';
import monsterStatsModule from '@/store/modules/monsterStats/index.js';
import battleStatsModule from '@/store/modules/battleStats/index.js';
import battleMessagesModule from '@/store/modules/battleMessages/index.js';
import { Characters } from "@/enums/characters";
import { createStore } from 'vuex';
import { cloneDeep } from 'lodash';

describe('OptionsButton.vue', () => {
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

  it('sets "winner" getter to monster when "surrender" is dispatched', () => {
    const store = storeCopy();
    expect(store.getters['battleStats/winner']).toBe(null);
    store.dispatch('playerStats/surrender');
    expect(store.getters['battleStats/winner']).toBe(Characters.MONSTER);
  });

  it('updates "playerHealth" getter when "playerHealthBarChangeAnimation" is dispatched', async () => {
    const store = storeCopy();
    const playerHealth = store.getters['playerStats/currentPlayerHealth'];
    console.log(playerHealth)
    await store.dispatch('playerStats/playerHealthBarChangeAnimation', { increase: true, value: 1 });
    expect(store.getters['playerStats/currentPlayerHealth']).toBe(playerHealth);
    await store.dispatch('playerStats/playerHealthBarChangeAnimation', { increase: false, value: 2 });
    expect(store.getters['playerStats/currentPlayerHealth']).toBe(playerHealth - 2);
    await store.dispatch('playerStats/playerHealthBarChangeAnimation', { increase: true, value: 1 });
    expect(store.getters['playerStats/currentPlayerHealth']).toBe(playerHealth - 1);
  });
});
