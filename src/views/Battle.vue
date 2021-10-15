<template>
  <div>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div class="battle-header">
          <monster-header></monster-header>
          <main-menu-button></main-menu-button>
        </div>
        <div>
          <health-bar character="monster"></health-bar>
          <monster-image></monster-image>
          <battle-log></battle-log>
          <health-bar character="player"></health-bar>
          <mana-bar></mana-bar>
          <battle-result v-if="winner"></battle-result>
          <player-actions v-show="playerActionsVisibility"></player-actions>
        </div>
      </body>
    </html>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BattleLog from '../components/battle/BattleLog.vue';
import BattleResult from '../components/battle/BattleResult.vue';
import PlayerActions from '../components/battle/PlayerActions.vue';
import HealthBar from '../components/battle/UI/HealthBar.vue';
import ManaBar from '../components/battle/UI/ManaBar.vue';
import MonsterHeader from '../components/battle/UI/MonsterHeader.vue';

export default {
  components: { PlayerActions, BattleLog, HealthBar, MonsterHeader, BattleResult, ManaBar },
  computed: {
    ...mapGetters('battleStats', ['winner']),
    ...mapGetters('playerStats', ['playerActionsVisibility'])
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "munro";
  font-size: 105%;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

.battle-header {
  width: 1900px;
  display: flex;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}

.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}
</style>
