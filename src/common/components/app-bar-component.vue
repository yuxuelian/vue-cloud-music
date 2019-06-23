<template>
  <div
  class="app-bar-component-wrapper"
  :style="`height:${AppBarHeight+StatusBarHeight}px;`"
  >
    <div
    class="app-bar-component cu-bar text-white"
    :style="`height:${AppBarHeight+StatusBarHeight}px;padding-top:${StatusBarHeight}px;background-color:${bgColor}`"
    >
      <div class="back-btn" @click="backPage" v-if="isBack">
        <i class="cuIcon-back back-icon"></i>
        <slot name="backText"></slot>
      </div>

      <div class="bar-title">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'app-bar-component',
  components: {},
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
  watch: {},
  computed: {},
  methods: {
    backPage() {
      this.$router.go(-1)
    }
  },
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.app-bar-component-wrapper
  width 100%
  position relative

.app-bar-component
  width 100%
  position fixed
  z-index 9999

  .back-btn
    display flex
    flex-direction row
    align-items center
    margin-left 10px
    z-index 100

    .back-icon
      margin-top 3px
      margin-right 2px

  .bar-title
    position absolute
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
</style>

