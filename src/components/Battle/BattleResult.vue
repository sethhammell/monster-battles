<template>
  <section class="container">
    <h2>Game Over!</h2>
    <h3 v-if="monsterWin">You Lost!</h3>
    <h4 v-else-if="playerWin">Your Won!</h4>
    <button @click="newGame">Start New Game</button>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('battleStats', ['playerWin', 'monsterWin']),
  },
  methods: {
    ...mapActions('battleStats', ['newGame'])
  },
}
</script>

<style scoped>
@import './UI/BattleStyles.css';
</style>