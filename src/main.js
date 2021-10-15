import { createApp } from 'vue';

import App from './App.vue'

import MainMenuButton from './components/battle/UI/MainMenuButton.vue';
import ActionButton from './components/battle/UI/ActionButton.vue';
import BattleResultButton from './components/battle/UI/BattleResultButton.vue';
import HealthBar from './components/battle/UI/HealthBar.vue';
import ManaBar from './components/battle/UI/ManaBar.vue';
import MonsterHeader from './components/battle/UI/MonsterHeader.vue';
import MonsterImage from './components/battle/UI/MonsterImage.vue';

import PlayerActions from './components/battle/PlayerActions';
import BattleLog from './components/battle/BattleLog.vue';
import BattleResult from './components/battle/BattleResult.vue';

import MainMenuHeader from './components/main-menu/UI/MainMenuHeader.vue';
import StartButton from './components/main-menu/UI/StartButton.vue';

import router from './router';
import store from './store';

const app = createApp(App);

app.component('main-menu-button', MainMenuButton);
app.component('action-button', ActionButton);
app.component('battle-result-button', BattleResultButton);
app.component('health-bar', HealthBar);
app.component('mana-bar', ManaBar);
app.component('monster-header', MonsterHeader);
app.component('monster-image', MonsterImage);

app.component('player-actions', PlayerActions);
app.component('battle-log', BattleLog);
app.component('battle-result', BattleResult);

app.component('main-menu-header', MainMenuHeader);
app.component('start-button', StartButton);

app.use(store);
app.use(router);

app.mount('#app');
