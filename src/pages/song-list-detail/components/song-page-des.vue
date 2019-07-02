<template>
  <div class="song-page-des" >
    <div class="page-des">
      <div class="playlist-image-container">
        <img class="playlist-image"
             :src="playlistImage">
        <span class="play-count">
          <i class="icon-share"></i>
          <span class="count">{{playCountStr}}</span>
        </span>
      </div>
      <div class="right-column">
        <div class="playlist-name text-line-2">{{playlist.name}}</div>
        <div class="playlist-creator">
          <img class="creator-avatar" :src="playlist.creator.avatarUrl">
          <div class="creator-name">{{playlist.creator.nickname}}</div>
          <i class="cuIcon-right icon-right"></i>
        </div>
        <div class="des-text-container">
          <div class="des-text text-line-2">{{playlist.description}}</div>
          <i class="cuIcon-right icon-right"></i>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <div class="btn-container">
        <div class="btn">
          <i class="btn-icon icon-share"></i>
          <div class="btn-text">{{playlist.commentCount}}</div>
        </div>
      </div>
      <div class="btn-container">
        <div class="btn">
          <i class="btn-icon icon-share"></i>
          <div class="btn-text">{{shareCountStr}}</div>
        </div>
      </div>
      <div class="btn-container">
        <div class="btn">
          <i class="btn-icon icon-download"></i>
          <div class="btn-text">下载</div>
        </div>
      </div>
      <div class="btn-container">
        <div class="btn">
          <i class="btn-icon icon-share"></i>
          <div class="btn-text">多选</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'song-page-des',
  components: {},
  props: {
    playlistImage: {
      type: String,
      required: true,
    },
    playlist: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {
    playCountStr() {
      const playCount = this.playlist.playCount
      if (playCount) {
        if (playCount > 9999) {
          return Math.floor(playCount / 10000) + '万'
        } else {
          return playCount + ''
        }
      } else {
        return '0'
      }
    },
    shareCountStr() {
      const shareCount = this.playlist.shareCount
      if (shareCount && shareCount > 0) {
        return shareCount + ''
      } else {
        return '分享'
      }
    }
  },
  methods: {},
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.song-page-des
  width 100%
  height 200px
  display flex
  flex-direction column

  .page-des
    width 100%
    height 0
    flex 1
    align-items center
    display flex
    flex-direction row

    .playlist-image-container
      margin-left 20px
      width 120px
      height 120px
      position relative

      .playlist-image
        width 100%
        height 100%
        border-radius 9px

      .play-count
        padding-top 2px
        padding-right 6px
        padding-bottom 2px
        font-size 14px
        display flex
        flex-direction row
        justify-content flex-end
        align-items center
        position absolute
        top 0
        right 0
        left 0
        color white
        background-image linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))
        border-top-left-radius 9px
        border-top-right-radius 9px

        .count
          font-size 13px
          margin-left 4px

    .right-column
      width 0
      height 120px
      flex 1
      display flex
      flex-direction column
      justify-content space-evenly
      margin-left 20px
      margin-right 20px

      .playlist-name
        font-size 16px
        color white

      .playlist-creator
        display flex
        flex-direction row
        align-items center
        color #E0E0E0

        .creator-avatar
          width 30px
          height 30px
          border-radius 15px

        .creator-name
          font-size 14px
          margin-left 6px

        .icon-right
          margin-left 4px
          font-size 18px

      .des-text-container
        display flex
        flex-direction row
        color #E0E0E0
        align-items center

        .des-text
          font-size 12px

        .icon-right
          font-size 18px
          margin-left 4px

  .btn-group
    height 50px
    width 100%
    display flex
    flex-direction row

    .btn-container
      width 25%
      height 100%

      .btn
        display flex
        flex-direction column
        color white
        align-items center

        .btn-icon
          font-size 22px

        .btn-text
          font-size 12px
          height 20px
          line-height 20px
</style>

