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
import { playerActions } from '@/enums/playerActions';
import ActionButton from './UI/ActionButton.vue';

export default {
  components: { ActionButton },
  computed: {
    ...mapGetters('playerStats', ['canUseSpecialAttack'])
  },
  methods: {
    ...mapActions('playerStats', ['playerAction', 'surrender']),
    attackMonster() {
      this.playerAction({ action: playerActions.ATTACK });
    },
    specialAttackMonster() {
      this.playerAction({ action: playerActions.SPECIAL_ATTACK });
    },
    healPlayer() {
      this.playerAction({ action: playerActions.HEAL });
    }
  }
}
</script>

<style scoped>
#controls {
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: center;
}
</style>
