<template>
  <div class="root-component" ref="windowBox">
    <app-bar-component :bg-color="appBarBgColor">
      <div slot="backText">返回</div>
      <div>歌单详情</div>
    </app-bar-component>
    <song-page-des
    :playlistImage="coverImgUrl"
    :playlist="playlist"
    ></song-page-des>
    <div class="song-list">
      <song-list-title
      :songListCount="trackCount"
      :likeCount="subscribedCount"
      :isFixedPosition="isFixedListTitle"
      >
      </song-list-title>
      <song-item
      v-for="(item,index) in playlistSongs"
      :key="item.id"
      :song="item"
      :index="index"
      >
      </song-item>
    </div>

    <div class="blur-bg">
      <img :src="coverImgUrl" class="bg-img">
      <div class="bg-shade"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SongItem from "./components/song-item"
import SongListTitle from "./components/song-list-title"
import AppBarComponent from "../../common/components/app-bar-component"
import SongPageDes from "./components/song-page-des"
export default {
  name: 'root-component',
  components: {SongPageDes, AppBarComponent, SongListTitle, SongItem},
  props: {},
  data() {
    return {
      appBarAlpha: 0,
      coverImgUrl: '',
      subscribedCount: 0,
      trackCount: 0,
      playlist: {
        name: '',
        description: '',
        creator: {
          nickname: '',
          avatarUrl: '',
        }
      },
      playlistSongs: [],
      playlistDetailInfo: {},
      isFixedListTitle: false
    }
  },
  watch: {},
  computed: {
    appBarBgColor() {
      return `rgba(211,58,49,${this.appBarAlpha})`
    }
  },
  methods: {
    async requestPlaylistDetail(playlistId) {
      const resData = (await this.$axios.get(`/playlist/detail?id=${playlistId}`)).data
      // 获取背景图片
      this.coverImgUrl = resData.playlist.coverImgUrl
      // 歌单描述信息
      this.playlist = {
        name: resData.playlist.name,
        description: resData.playlist.description,
        creator: {
          nickname: resData.playlist.creator.nickname,
          avatarUrl: resData.playlist.creator.avatarUrl,
        },
        playCount: resData.playlist.playCount,
        commentCount: resData.playlist.commentCount,
        shareCount: resData.playlist.shareCount,
      }
      // 订阅总数
      this.subscribedCount = resData.playlist.subscribedCount
      // 歌单歌曲总数
      this.trackCount = resData.playlist.trackCount
      // 歌单中的歌曲列表
      this.playlistSongs = resData.playlist.tracks.map((track) => {
        return {
          //歌曲id
          id: track.id,
          // 歌曲名
          name: track.name,
          // 作者
          ar: track.ar.map((ar) => {
            return {id: ar.id, name: ar.name}
          }),
          // 专辑id
          alId: track.al.id,
          // 专辑名
          alName: track.al.name,
          // 专辑图片
          alPicUrl: track.al.picUrl,
        }
      })
      // 歌单详情
    }
  },
  created() {
  },
  mounted() {
  },
  activated() {
    // 默认清除一下Stick
    this.isFixedListTitle = false
    // 清除一下透明度
    this.appBarAlpha = 0
    this.playlistSongs = []
    this.playlistDetailInfo = {}
    this.coverImgUrl = ''
    this.playlist = {
      name: '',
      description: '',
      creator: {
        nickname: '',
        avatarUrl: '',
      }
    }
    const playlistId = this.$route.params.playlistId
    this.requestPlaylistDetail(playlistId)
    window.onscroll = () => {
      if (window.pageYOffset <= 200) {
        this.appBarAlpha = (window.pageYOffset / 200) * .6
        this.isFixedListTitle = false
      } else {
        // 固定listTitle
        this.isFixedListTitle = true
      }
    }
  },
  deactivated() {
    window.onscroll = undefined
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.root-component
  width 100%
  display flex
  flex-direction column
  position absolute
  left 0
  top 0
  overflow hidden

  .song-list
    width 100%
    background-color white
    border-top-left-radius 25px
    border-top-right-radius 25px

  .blur-bg
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    z-index -1
    filter blur(100px)

    .bg-img
      position absolute
      left 0
      top 0
      width 100%
      height 100%

    .bg-shade
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      background-color rgba(0, 0, 0, .3)
</style>

