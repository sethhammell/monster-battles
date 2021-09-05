<template>
  <section id="controls">
    <action-button @click="attackMonster">ATTACK</action-button>
    <action-button :disable="canUseSpecialAttack" @click="specialAttackMonster">SPECIAL ATTACK</action-button>
    <action-button @click="healPlayer">HEAL</action-button>
    <action-button @click="surrender">SURRENDER</action-button>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ActionButton from './UI/ActionButton.vue';

export default {
  components: { ActionButton },
  computed: {
    ...mapGetters('playerStats', ['canUseSpecialAttack'])
  },
  methods: {
    ...mapActions('playerStats', ['healPlayer']),
    ...mapActions('monsterStats', ['attackMonster', 'specialAttackMonster']),
    ...mapActions('battleStats', ['surrender'])
  }
}
</script>

<style scoped>
@import './UI/BattleStyles.css';

#controls {
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: center;
}
</style>
