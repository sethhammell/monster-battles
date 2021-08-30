<template>
  <div class="game">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vue Basics</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <!-- <script src="https://unpkg.com/vue@next" defer></script> -->
        <!-- <script src="app.js" defer></script> -->
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
            <h5 v-else-if="draw">It's a Draw!</h5>
            <button @click="startGame">Start New Game</button>
          </section>
          <section id="controls" v-else>
            <button @click="attackMonster">ATTACK</button>
            <button :disabled="mayUseSpecialAttack" @click="specialAttackMonster">SPECIAL ATTACK</button>
            <button @click="healPlayer">HEAL</button>
            <button @click="surrender">SURRENDER</button>
          </section>
          <section id="log" class="container">
            <h2>Battle Log</h2>
            <ul>
              <li v-for="logMessage in logMessages" :key="logMessage" :by="logMessage.actionBy" :type="logMessage.actionType" :value="logMessage.actionValue">
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
function getRandomValue(min, max, neg = false) {
  var sign = neg ? -1 : 1;
  return sign * Math.floor(Math.random() * (max - min) + min);
}

export default {
  name: 'Battle',
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: []
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      return { width: this.playerHealth + '%' };
    },
    mayUseSpecialAttack() {
        return this.currentRound % 3 !== 0;
    },
    playerWin() {
      return this.winner === 'player';
    },
    monsterWin() {
      return this.winner === 'monster';
    },
    draw() {
      return this.winner === 'draw';
    }
  },
  watch: {
    currentRound() {
      if (this.playerHealth === 0 && this.monsterHealth === 0) {
        this.winner = 'draw';
      }
      else if (this.playerHealth === 0) {
        this.winner = 'monster';
      }
      else if (this.monsterHealth === 0) {
        this.winner = 'player';
      }
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
    },
    adjustPlayerHealth(value) {
      if (this.playerHealth + value > 100) {
        this.playerHealth = 100;
      }
      else if (this.playerHealth + value < 0) {
        this.playerHealth = 0;
      }
      else {
        this.playerHealth += value;
      }
    },
    adjustMonsterHealth(value) {
      if (this.monsterHealth + value > 100) {
        this.monsterHealth = 100;
      }
      else if (this.monsterHealth + value < 0) {
        this.monsterHealth = 0;
      }
      else {
        this.monsterHealth += value;
      }
    },
    attackMonster() {
      const attackValue = getRandomValue(5, 12, true);
      this.adjustMonsterHealth(attackValue);
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15, true);
      this.adjustPlayerHealth(attackValue);
      this.addLogMessage('monster', 'attack', attackValue);
      this.currentRound++;
    },
    specialAttackMonster() {
      const attackValue = getRandomValue(10, 25, true);
      this.adjustMonsterHealth(attackValue);
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      const healValue = getRandomValue(8, 20);
      this.adjustPlayerHealth(healValue);
      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = 'monster';
    },
    addLogMessage(by, type, value) {
      this.logMessages.unshift({
        actionBy: by,
        actionType: type,
        actionValue: value
      })
    }
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

#controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin: 1rem;
  width: 12rem;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #af0a78;
  border-color: #af0a78;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
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