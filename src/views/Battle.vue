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
        <monster-header></monster-header>
        <div>
          <health-bar character="monster"></health-bar>
          <health-bar character="player"></health-bar>
          <mana-bar></mana-bar>
          <battle-log></battle-log>
          <battle-result v-if="winner"></battle-result>
          <player-actions v-else></player-actions>
        </div>
      </body>
    </html>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BattleLog from '../components/Battle/BattleLog.vue';
import BattleResult from '../components/Battle/BattleResult.vue';
import PlayerActions from '../components/Battle/PlayerActions.vue';
import HealthBar from '../components/Battle/UI/HealthBar.vue';
import ManaBar from '../components/Battle/UI/ManaBar.vue';
import MonsterHeader from '../components/Battle/UI/MonsterHeader.vue';

export default {
  components: { PlayerActions, BattleLog, HealthBar, MonsterHeader, BattleResult, ManaBar },
  computed: {
    ...mapGetters('battleStats', ['winner'])
  }
}
</script>

<style scoped>
@import '../components/Battle/UI/BattleStyles.css';

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  background-color: #880017;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}
</style>