<template>
  <img :src="monsterImage"/>
</template>

<script>
import image from '@/assets/monsters/mossGolemMonster.png';

export default {
  data() {
    return {
        monsterImage: image
    }
  }
}
</script>
