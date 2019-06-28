<template>
  <div class="slide-super-wrapper">
    <div class="slide-parent-wrapper">
      <cube-slide
      ref="slide"
      class="my-slide"
      :data="slideData"
      @change="changePage"
      >
        <cube-slide-item
        class="my-slide-item"
        v-for="(item, index) in slideData"
        :key="index"
        @click.native="clickHandler(index)"
        >
          <img :src="item.imageUrl" class="slide-img" alt="轮播图">
        </cube-slide-item>

        <template slot="dots" slot-scope="props">
          <span class="my-dot" :class="{active: props.current === index}"
                v-for="(item, index) in props.dots"></span>
        </template>
      </cube-slide>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'banner-component',
  components: {},
  props: {
    slideData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    changePage(current) {
      console.log(current)
    },
    clickHandler(index) {
      console.log(index)
    },
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.slide-super-wrapper
  width 100%

  .slide-parent-wrapper
    position relative
    width 100%
    padding-bottom 36.8%
    overflow hidden

    .my-slide
      position absolute
      width 100%
      height 100%

      .my-slide-item
        width 100%
        height 100%

        .slide-img
          width 100%
          height 100%
      .my-dot
        width 8px
        height 8px
        background-color white
        border-radius 4px
        margin-right 4px
        margin-bottom 10px
        &:last-child
          margin-right 0
        &.active
          width 16px
          background-color #D33A31
</style>

