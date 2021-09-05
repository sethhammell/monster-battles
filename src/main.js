import { createApp } from 'vue';

import App from './App.vue'

import ActionButton from './components/Battle/UI/ActionButton.vue';
import HealthBar from './components/Battle/UI/HealthBar.vue';
import ManaBar from './components/Battle/UI/ManaBar.vue';
import MonsterHeader from './components/Battle/UI/MonsterHeader.vue';

import PlayerActions from './components/Battle/PlayerActions';
import BattleLog from './components/Battle/BattleLog.vue';
import BattleResult from './components/Battle/BattleResult.vue';

import router from './router';
import store from './store';

const app = createApp(App);

app.component('action-button', ActionButton);
app.component('health-bar', HealthBar);
app.component('mana-bar', ManaBar);
app.component('monster-header', MonsterHeader);

app.component('player-actions', PlayerActions);
app.component('battle-log', BattleLog);
app.component('battle-result', BattleResult);

app.use(store);
app.use(router);

app.mount('#app');
