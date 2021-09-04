import { createApp } from 'vue';

import App from './App.vue'
import BaseButton from './components/UI/BaseButton';
import BattleOptions from './components/UI/BattleOptions';

import router from './router';
import store from './store';

const app = createApp(App);

app.component('battle-options', BattleOptions);
app.component('base-button', BaseButton);

app.use(store);
app.use(router);

app.mount('#app');
