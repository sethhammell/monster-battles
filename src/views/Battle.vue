<template>
  <div class="game">
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
        <header>
          <h1>Monster Slayer</h1>
        </header>
        <div id="game">
          <section id="monster" class="container">
            <h2>Monster Health</h2>
            <div class="healthbar">
              <div
                class="healthbar__value"
                :style="monsterBarStyles"
              ></div>
            </div>
          </section>
          <section id="player" class="container">
            <h2>Your Health</h2>
            <div class="healthbar">
              <div
                class="healthbar__value"
                :style="playerBarStyles"
              ></div>
            </div>
          </section>
          <section class="container" v-if="winner">
            <h2>Game Over!</h2>
            <h3 v-if="monsterWin">You Lost!</h3>
            <h4 v-else-if="playerWin">Your Won!</h4>
            <button @click="newGame">Start New Game</button>
          </section>
          <player-actions v-else></player-actions>
          <section id="log" class="container">
            <h2>Battle Log</h2>
            <ul>
              <li v-for="logMessage in battleActionsLog" :key="logMessage" :by="logMessage.actionBy" :type="logMessage.actionType" :value="logMessage.actionValue">
                <span :class="{'log--player': logMessage.actionBy === 'player', 'log--monster': logMessage.actionBy === 'monster'}">{{ logMessage.actionBy === 'player' ? 'Player' : 'Monster' }}</span>
                <span v-if="logMessage.actionType === 'heal'"> heals themself for <span class="log--heal">{{ logMessage.actionValue }}</span></span>
                <span v-else> attacks and deals <span class="log--damage">{{ logMessage.actionValue }}</span></span>
              </li>
            </ul>
          </section>
        </div>
      </body>
    </html>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PlayerActions from '../components/Battle/PlayerActions.vue';

export default {
  components: { PlayerActions },
  computed: {
    ...mapGetters('playerStats', ['playerBarStyles']),
    ...mapGetters('monsterStats', ['monsterBarStyles']),
    ...mapGetters('battleStats', ['winner', 'playerWin', 'monsterWin']),
    ...mapGetters('battleMessages', ['battleActionsLog'])
  },
  methods: {
    ...mapActions('battleStats', ['newGame'])
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  background-color: #880017;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}

.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
}

.healthbar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}

.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

#monster h2,
#player h2 {
  margin: 0.25rem;
}

#log ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#log li {
  margin: 0.5rem 0;
}

.log--player {
  color: #7700ff;
}

.log--monster {
  color: #da8d00;
}

.log--damage {
  color: red;
}

.log--heal {
  color: green;
}
</style>