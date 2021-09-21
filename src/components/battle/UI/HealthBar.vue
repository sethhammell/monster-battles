<template>
  <section>
    <div class="healthbar">
      <div
        class="healthbar__value"
        :style="character === 'player' ? playerHealthBarStyles + playerHealthBarColor : monsterHealthBarStyles + monsterHealthBarColor"
      >
        <div class="healthbar__number">
          {{ character === 'player' ? currentPlayerHealth : currentMonsterHealth }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['character'],
  computed: {
    ...mapGetters('playerStats', ['playerHealthBarStyles', 'playerHealthBarColor', 'currentPlayerHealth']),
    ...mapGetters('monsterStats', ['monsterHealthBarStyles', 'monsterHealthBarColor', 'currentMonsterHealth']),
  }
}
</script>

<style scoped>
.healthbar {
  width: 100%;
  height: 40px;
  border: 3px solid #000000;
  margin: 1rem 0;
  background: #fde5e5;
  position: relative;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.26);
}

.healthbar__value {
  width: 100%;
  height: 100%;
}

.healthbar__number {
  position: absolute;
  padding-top: 2.5rem;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
