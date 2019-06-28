<template>
  <div
  class="app-bar-component-wrapper"
  :style="`height:${totalBarHeight}px;`"
  >
    <div
    class="app-bar-component"
    :style="`height:${AppBarHeight}px;padding-top:${StatusBarHeight}px;background-color:${bgColor};`"
    >
      <div
      class="bar-title" :style="`height:${AppBarHeight}px;`"
      >
        <slot name="content"></slot>
      </div>

      <div
      v-if="isBack"
      class="back-btn" :style="`height:${AppBarHeight}px;`"
      @click="backPage"
      >
        <i class="icon-left back-icon"></i>
        <slot name="backText"></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'app-bar-component',
  props: {
    isBack: {
      type: Boolean,
      default() {
        return true
      }
    },
    bgColor: {
      type: String,
      default() {
        return '#D33A31'
      }
    }
  },
  data() {
    return {
      StatusBarHeight: this.StatusBarHeight,
      AppBarHeight: this.AppBarHeight,
    }
  },
  computed: {
    totalBarHeight() {
      return this.AppBarHeight + this.StatusBarHeight
    }
  },
  methods: {
    backPage() {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.app-bar-component-wrapper
  width 100%
  position relative
  color white
  min-height 50px

.app-bar-component
  width 100%
  position fixed
  z-index 9999

  .bar-title
    left 0
    bottom 0
    position absolute
    width 100%
    display flex
    align-items center
    justify-content center
    font-size 18px
    pointer-events none

  .back-btn
    width 60px
    display flex
    flex-direction row
    align-items center
    justify-content center
    font-size 16px

</style>

