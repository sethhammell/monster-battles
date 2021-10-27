<template>
  <img :src="monsterImage" height="340"/>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters("monsterStats", ["monsterImage"]),
  },
}
</script>
