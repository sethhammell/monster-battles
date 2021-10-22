<template>
  <header>
    <h1>{{ monsterLevelName }}</h1>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters("monsterStats", ["monsterLevelName"]),
  },
}
</script>

<style scoped>
header {
  width: 900px;
  box-shadow: 0 9px 10px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  background-color: #880017;
  border: 3px solid #000000;
  color: white;
  text-align: center;
  padding-bottom: 0rem;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
</style>
