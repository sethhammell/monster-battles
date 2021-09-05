<template>
  <section>
    <div class="healthbar">
      <div
        class="healthbar__value"
        :style="character === 'player' ? playerHealthBarStyles : monsterHealthBarStyles"
      ></div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['character'],
  computed: {
    ...mapGetters('playerStats', ['playerHealthBarStyles']),
    ...mapGetters('monsterStats', ['monsterHealthBarStyles']),
  }
}
</script>

<style scoped>
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
</style>
