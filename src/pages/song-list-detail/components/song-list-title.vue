<template>
  <div
  class="stick-container"
  >
    <div
    class="song-list-title solid-bottom"
    :class="isFixedPosition?'fixed-position':''"
    :style="`top:${isFixedPosition?AppBarHeight+StatusBarHeight:0}px;`"
    >
      <div class="left-btn">
        <div class="play-icon">
          <i class="cuIcon-video text-sl text-black"></i>
        </div>
        <div class="text-xl text-black">播放全部</div>
        <div class="text-sm text-grey margin-left-xs margin-right-xs">(共{{songListCount}}首)</div>
      </div>
      <div
      class="right-btn cu-btn round bg-cloud-red padding-xs margin-right-xs"
      @click.stop.prevent="clickLikeBtn"
      >
        <i class="cuIcon-add text-xxl text-white"></i>
        <span class="text-sm text-white">收藏({{likeCount}})</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'song-list-title',
  components: {},
  props: {
    songListCount: {
      type: [Number, String],
      required: true
    },
    likeCount: {
      type: [Number, String],
      required: true
    },
    isFixedPosition: {
      type: Boolean,
      default() {
        return false
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
    clickLikeBtn() {
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.stick-container
  width 100%
  height 50px

  .song-list-title
    width 100%
    height 50px
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    background white
    border-top-left-radius 25px
    border-top-right-radius 25px

    &.fixed-position
      position fixed
      left 0
      right 0
      z-index 9998

    .left-btn
      display flex
      align-items center
      flex-direction row
      border-top-left-radius 25px

      &:active
        background-color #fadbd9

      .play-icon
        height 50px
        width 50px
        display flex
        align-items center
        justify-content center

    .right-btn
      display flex
      flex-direction row
      pointer-events all
</style>

