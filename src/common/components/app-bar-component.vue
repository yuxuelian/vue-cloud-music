<template>
  <div
  class="app-bar-component cu-bar bg-cloud-red text-white"
  :style="`height:${AppBarHeight+StatusBarHeight};padding-top:${StatusBarHeight}px;`"
  >
    <div class="back-btn" @click="backPage" v-if="isBack">
      <i class="cuIcon-back back-icon"></i>
      <slot name="backText"></slot>
    </div>

    <div class="bar-title">
      <slot name="content"></slot>
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
    console.log('app-bar-component beforeCreate')
  },
  created() {
    console.log('app-bar-component created')
  },
  beforeMount() {
    console.log('app-bar-component beforeMount')
  },
  mounted() {
    console.log('app-bar-component mounted')
  },
  beforeUpdate() {
    console.log('app-bar-component beforeUpdate')
  },
  updated() {
    console.log('app-bar-component update')
  },
  beforeDestroy() {
    console.log('app-bar-component beforeDestroy')
  },
  destroyed() {
    console.log('app-bar-component destroyed')
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.app-bar-component
  width 100%
  position relative
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

