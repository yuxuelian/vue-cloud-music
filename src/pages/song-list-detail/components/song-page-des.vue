<template>
  <div class="song-page-des">
    <div class="page-des">
      <img class="playlist-image"
           :src="playlistImage">
      <div class="right-column">
        <div class="playlist-name text-line-2">{{playlist.name}}</div>
        <div class="playlist-creator">
          <img class="creator-avatar"
               :src="playlist.creator.avatarUrl">
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
          <i class="btn-icon cuIcon-share"></i>
          <div class="btn-text">下载</div>
        </div>
      </div>
      <div class="btn-container">
        <div class="btn">
          <i class="btn-icon cuIcon-share"></i>
          <div class="btn-text">下载</div>
        </div>
      </div>
      <div class="btn-container">
        <div class="btn">
          <i class="btn-icon cuIcon-share"></i>
          <div class="btn-text">下载</div>
        </div>
      </div>
      <div class="btn-container">
        <div class="btn">
          <i class="btn-icon cuIcon-share"></i>
          <div class="btn-text">下载</div>
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
  computed: {},
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

    .playlist-image
      margin-left 20px
      width 120px
      height 120px
      border-radius 5px

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
</style>

