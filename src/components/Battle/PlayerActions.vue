<template>
  <section id="controls">
    <base-button @click="attackMonster">ATTACK</base-button>
    <base-button :disabled="false" @click="specialAttackMonster">SPECIAL ATTACK</base-button>
    <base-button @click="healPlayer">HEAL</base-button>
    <base-button @click="surrender">SURRENDER</base-button>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import BaseButton from './UI/BaseButton.vue';

export default {
  components: { BaseButton },
  methods: {
    ...mapActions('playerStats', ['healPlayer']),
    ...mapActions('monsterStats', ['attackMonster', 'specialAttackMonster']),
    ...mapActions('battleStats', ['surrender'])
  }
}
</script>

<style scoped>
  #controls {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>