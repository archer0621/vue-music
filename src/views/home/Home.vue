<template>
  <div id="home">
    <RightTop></RightTop>
    <transition :name="transitionName">
      <keep-alive exclude="RightSinger">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import RightTop from "@/views/right/RightTop.vue"

export default {
  name: 'name',
  components: {
    RightTop
  },
  data() {
    return {
      transitionName: "",
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left"
      } 
      if(to.meta.index < from.meta.index){
        this.transitionName = "slide-right"
      }
    },
  },
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 255, 0.1);
  border-radius: 3px;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>