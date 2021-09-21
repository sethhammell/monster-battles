<template>
  <section>
    <div class="manabar">
      <div
        class="manabar__value"
        :style="playerManaBarStyles"
      >
        <div class="manabar__number">
          {{ currentPlayerMana }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('playerStats', ['playerManaBarStyles', 'currentPlayerMana']),
  }
}
</script>

<style scoped>
.manabar {
  width: 100%;
  height: 40px;
  border: 3px solid #000000;
  margin: 1rem 0;
  background: #fde5e5;
  position: relative;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.26);
}

.manabar__value {
  background-color: #4f5bff;
  width: 100%;
  height: 100%;
}

.manabar__number {
  position: absolute;
  padding-top: 2.5rem;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
