<template>
  <section>
    <div class="manabar">
      <div
        class="manabar__value"
        :style="playerManaBarStyles"
      ></div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('playerStats', ['playerManaBarStyles']),
  }
}
</script>

<style scoped>
.manabar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
}

.manabar__value {
  background-color: #4f5bff;
  width: 100%;
  height: 100%;
}
</style>
