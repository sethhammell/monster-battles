<template>
  <section id="controls">
    <action-button
      v-for="action in playerBattleActionsList"
      :key="action.name"
      :disable="action.manaCost > currentPlayerMana"
      @click="playerAction({ action: action.name })"
    >{{ action.name.toUpperCase() }}</action-button>
    <action-button @click="surrender">SURRENDER</action-button>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ActionButton from "./UI/ActionButton.vue";

export default {
  components: { ActionButton },
  computed: {
    ...mapGetters("playerStats", ["playerBattleActionsList", "currentPlayerMana"]),
  },
  methods: {
    ...mapActions("playerStats", ["playerAction", "surrender"]),
  },
};
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
