<template>
  <img :src="monsterImage"/>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters("monsterStats", ["monsterImage"]),
  },
}
</script>
