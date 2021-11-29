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
      <body class="background" :style="{ 'background-image': 'url(' + monsterBackgroundImage + ')' }">
        <div class="battle-header">
          <battle-speed-decrease-button></battle-speed-decrease-button>
          <current-battle-speed-display></current-battle-speed-display>
          <battle-speed-increase-button></battle-speed-increase-button>
          <monster-header></monster-header>
          <options-button></options-button>
        </div>
        <div>
          <health-bar character="monster"></health-bar>
          <monster-image></monster-image>
          <battle-log></battle-log>
          <health-bar character="player"></health-bar>
          <mana-bar></mana-bar>
          <battle-result v-show="winner"></battle-result>
          <options-menu v-show="inOptionsMenu"></options-menu>
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
import OptionsMenu from '../components/battle/OptionsMenu.vue';
import PlayerActions from '../components/battle/PlayerActions.vue';
import BattleSpeedDecreaseButton from '../components/battle/UI/header/BattleSpeedDecreaseButton.vue';
import BattleSpeedIncreaseButton from '../components/battle/UI/header/BattleSpeedIncreaseButton.vue';
import HealthBar from '../components/battle/UI/HealthBar.vue';
import ManaBar from '../components/battle/UI/ManaBar.vue';
import MonsterHeader from '../components/battle/UI/header/MonsterHeader.vue';
import MonsterImage from '../components/battle/UI/MonsterImage.vue';
import OptionsButton from '../components/battle/UI/header/OptionsButton.vue';
import CurrentBattleSpeedDisplay from '../components/battle/UI/header/CurrentBattleSpeedDisplay.vue';

export default {
  components: { PlayerActions, BattleLog, HealthBar, MonsterHeader, BattleResult, ManaBar, OptionsButton, OptionsMenu, MonsterImage, BattleSpeedIncreaseButton, BattleSpeedDecreaseButton, CurrentBattleSpeedDisplay },
  computed: {
    ...mapGetters('battleStats', ['winner', 'inOptionsMenu']),
    ...mapGetters('playerStats', ['playerActionsVisibility']),
    ...mapGetters("monsterStats", ['monsterImage', 'monsterBackgroundImage']),
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

.background {
  /* background-repeat: repeat-x; */
  background-size: auto 100vh;
  height: 100vh;
}

section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}
</style>
