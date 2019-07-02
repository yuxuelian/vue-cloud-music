<template>
  <transition :name="'we-slide-' + (direction === 'forward' ? 'in' : 'out')">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState({
      direction: (state) => state.direction,
    })
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.we-slide-out-enter-active,
.we-slide-out-leave-active,
.we-slide-in-enter-active,
.we-slide-in-leave-active
  transition all .4s linear
  overflow-x hidden
  width 100%
  position absolute
  left 0
  top 0

.we-slide-out-enter
  transform translateX(-100%)

.we-slide-out-leave-active
  transform translateX(100%)

.we-slide-in-enter
  transform translateX(100%)

.we-slide-in-leave-active
  transform translateX(-100%)
</style>
