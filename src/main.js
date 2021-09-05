import { createApp } from 'vue';

import App from './App.vue'
import BaseButton from './components/Battle/UI/BaseButton';
import PlayerActions from './components/Battle/PlayerActions';

import router from './router';
import store from './store';

const app = createApp(App);

app.component('player-actions', PlayerActions);
app.component('base-button', BaseButton);

app.use(store);
app.use(router);

app.mount('#app');
