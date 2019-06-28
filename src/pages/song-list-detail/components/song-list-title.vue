<template>
  <div class="stick-container">
    <div
    class="song-list-title solid-bottom"
    :class="isFixedPosition?'fixed-position':''"
    :style="`top:${isFixedPosition?AppBarHeight+StatusBarHeight:0}px;`"
    >
      <div class="left-btn">
        <div class="play-icon">
          <i class="icon-share"></i>
        </div>
        <div class="text-black">播放全部</div>
        <div class="text-grey">(共{{songListCount}}首)</div>
      </div>

      <div class="right-btn bg-cloud-red bg-cloud-red-active">
        <i class="icon-plus"></i>
        <span class="text">收藏 ({{likeCountStr}})</span>
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
  computed: {
    likeCountStr() {
      if (this.likeCount > 9999) {
        return Math.floor(this.likeCount / 10000) + '万'
      }
      return this.likeCount + ''
    }
  },
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
    font-size 16px

    &.fixed-position
      position fixed
      left 0
      right 0
      z-index 9998

    .left-btn
      padding-right 6px
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
      border-radius 20px
      width 120px
      margin-right 10px
      height 40px
      display flex
      align-items center
      justify-content center
      color white
      font-size 16px
      &:active
        background-color
      .text
        margin-left 4px

</style>

