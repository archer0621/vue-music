<template>
  <div class="rt-style">
    <Swiper></Swiper>
    <MusicList></MusicList>
    <OnlyOne> </OnlyOne>
    <NewMusic> </NewMusic>
  </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue'
import MusicList from '@/components/common/musiclist/MusicList.vue'
import OnlyOne from '@/components/common/onlyone/OnlyOne.vue'
import NewMusic from '@/components/common/newmusic/NewMusic.vue'
export default {
  name: 'RightStyle',
  components: {
    Swiper,
    MusicList,
    OnlyOne,
    NewMusic
  }
}
</script>

<style scoped>
.rt-style {
  width: 100%;
  max-height: 600px;
  overflow: auto;
}
</style>