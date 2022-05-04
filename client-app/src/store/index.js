import { createStore } from 'vuex';

import playerStatsModule from './modules/playerStats/index.js';
import monsterStatsModule from './modules/monsterStats/index.js';
import battleStatsModule from './modules/battleStats/index.js';
import battleMessagesModule from './modules/battleMessages/index.js';

const store = createStore({
  modules: {
    playerStats: playerStatsModule,
    monsterStats: monsterStatsModule,
    battleStats: battleStatsModule,
    battleMessages: battleMessagesModule
  }
});

export default store;
