<template>
  <drawer-component ref="drawerComponent">
    <div slot="drawerPage" class="drawer-page-content">

      <app-bar-component>
        <span slot="backText">返回</span>
        <span slot="content">歌单广场</span>
      </app-bar-component>

      <tab-layout
      ref="tabLayout"
      :tabData="hotPlaylist"
      :currentTabIndex="currentPageIndex"
      @clickTabRightBtn="clickTabRightBtn"
      @tabSelectChange="tabSelectChange"
      >
      </tab-layout>

      <swiper
      class="swiper-view-pager"
      ref="swiperViewPager"
      :options="viewPagerOptions"
      @slideChange="slideChange"
      >
        <swiper-slide
        class="pager-item"
        v-for="(playlistData,index) in hotPlaylist"
        :key="index"
        >
          <div
          class="page-item-wrapper"
          id="pageItemWrapper"
          >
            <grid-component
            :gridData="playlistData.listData"
            @selectGridItem="selectGridItem"
            >
            </grid-component>
          </div>
        </swiper-slide>
      </swiper>

    </div>

    <div slot="drawerWindow"
         class="flex-column bg-gradual-blue"
         :style="[{'padding-top':StatusBar + 'px'}]">
      <btn-group
      v-for="(item,index) in allPlaylist"
      :key="index"
      :groupTitle="item.categoryName"
      :groupData="item.playlist"
      @selectPlaylist="selectPlaylist"
      >
      </btn-group>
    </div>
  </drawer-component>
</template>

<script type="text/ecmascript-6">
import TabLayout from "./components/tab-layout"
import DrawerComponent from "../../common/components/drawer-component"
import BtnGroup from "./components/btn-group"
import GridComponent from "../../common/components/grid-component"
import AppBarComponent from "../../common/components/app-bar-component"
import BScroll from 'better-scroll'
export default {
  name: 'root-component',
  components: {AppBarComponent, GridComponent, BtnGroup, DrawerComponent, TabLayout},
  props: {},
  data() {
    return {
      viewPagerOptions: {},
      StatusBar: this.StatusBar,
      hotPlaylist: [],
      allPlaylist: [],
      playlistDatas: [],
      currentPageIndex: 0
    }
  },
  watch: {
    playlistDatas() {
      if (this.scroll) {
        this.scroll.refresh()
      }
    }
  },
  computed: {},
  methods: {
    clickTabRightBtn() {
      this.$refs.drawerComponent.showDrawer()
    },
    tabSelectChange(index) {
      this.currentPageIndex = index
      this.$refs.swiperViewPager.swiper.slideTo(index)
    },
    selectPlaylist(name) {
      console.log('选择的歌单是 name = ' + name)
      this.$refs.drawerComponent.hideDrawer()
    },
    selectGridItem(index) {
      const playlistId = this.hotPlaylist[this.currentPageIndex].listData[index].id
      // TODO 路由跳转
    },
    slideChange() {
      this.currentPageIndex = this.$refs.swiperViewPager.swiper.activeIndex
    },
    _groupBy(array, groupBy) {
      const res = []
      for (let key in groupBy) {
        res.push(
          {
            categoryName: groupBy[key],
            playlist: []
          }
        )
      }
      array.forEach((item) => {
        res[item.category].playlist.push({
          name: item.name,
          hot: item.hot
        })
      })
      return res
    },
    async requestPlaylistHot() {
      const resData = await this.$axios.get('/playlist/hot')
      this.hotPlaylist = resData.data.tags.map((item) => {
        return {
          id: item.id,
          name: item.name,
          listData: []
        }
      })
      this.requestPlaylistData()
    },
    async requestAllPlaylist() {
      // 请求全部歌单
      const resData = (await this.$axios.get('/playlist/catlist')).data
      this.allPlaylist = this._groupBy(resData.sub, resData.categories)
    },
    requestPlaylistData() {
      const requests = this.hotPlaylist.map((playlist) => {
        return this.$axios.get('/top/playlist?cat=' + playlist.name + '&limit=' + 30)
      })
      // 同时发起请求
      Promise.all(requests)
        .then((resDatas) => {
          this.hotPlaylist.forEach((playlist, index) => {
            playlist.listData = resDatas[index].data.playlists.map((item) => {
              return {
                id: item.id,
                name: item.name,
                imageUrl: item.coverImgUrl,
              }
            })
          })
        })
        .catch((error) => {
        })
    },
    testScroll() {
      this.currentPageIndex = (this.currentPageIndex + 1) % this.hotPlaylist.length
    }
  },
  beforeCreate() {
    console.log('song-list beforeCreate')
  },
  created() {
    console.log('song-list created')
  },
  beforeMount() {
    console.log('song-list beforeMount')
  },
  mounted() {
    // 启动的时候选择到第0页
    this.currentPageIndex = 0
    this.requestPlaylistHot()
    this.requestAllPlaylist()
    if (!this.scroll) {
      console.log(this.$refs)
      this.scroll = new BScroll('#pageItemWrapper', {
        click: true
      })
    }
  },
  beforeUpdate() {
    console.log('song-list beforeUpdate')
  },
  updated() {
    console.log('song-list update')
  },
  beforeDestroy() {
    console.log('song-list beforeDestroy')
  },
  destroyed() {
    console.log('song-list destroyed')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.drawer-page-content
  display flex
  flex-direction column
  width 100%
  height 100%

  .swiper-view-pager
    width 100%
    height 0
    flex 1

    .pager-item
      width 100%
      height 100%

      .page-item-wrapper
        width 100%
        height 100%
</style>
