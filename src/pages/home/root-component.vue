<template>
  <drawer-component ref="drawerComponent">
    <div slot="drawerPage" class="drawer-page-content">
      <div class="drawer-content" ref="pageContent">
        <discover-component v-show="actionCurrent===0"></discover-component>
        <mine-component v-show="actionCurrent===1"></mine-component>
      </div>

      <div class="drawer-header cu-bar bg-cloud-red" :style="style">
        <div class="menu-btn" @click.prevent.stop="leftIconClick">
          <i class="cuIcon-pullleft text-white"></i>
        </div>

        <div :style="[{top:StatusBar + 'px'}]" class="action-item-container">
            <span class="action-item" :class="actionCurrent===0?'select':''"
                  @click="clickTopItem(0)">发现</span>
          <span class="action-item" :class="actionCurrent===1?'select':''"
                @click="clickTopItem(1)">我的</span>
        </div>
      </div>
    </div>

    <div slot="drawerWindow" class="flex-column bg-gradual-blue">
      侧边栏
    </div>
  </drawer-component>
</template>

<script type="text/ecmascript-6">
import DiscoverComponent from "./components/discover-component";
import MineComponent from "./components/mine-component";
import DrawerComponent from "../../common/components/drawer-component"
import BScroll from 'better-scroll'
export default {
  name: 'index',
  components: {
    DrawerComponent,
    MineComponent,
    DiscoverComponent,
  },
  props: {},
  data() {
    return {
      StatusBar: this.StatusBar,
      CustomBar: this.CustomBar,
      isShowDrawer: false,
      actionCurrent: 0,
    }
  },
  watch: {},
  computed: {
    style() {
      const StatusBar = this.StatusBar;
      const CustomBar = this.CustomBar;
      const bgImage = this.bgImage;
      let style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
      if (this.bgImage) {
        style = `${style}background-image:url(${bgImage});`;
      }
      return style
    }
  },
  methods: {
    hideModal() {
      this.isShowDrawer = false
    },
    leftIconClick() {
      console.log('点击打开侧边栏 leftIconClick')
      // 显示侧滑菜单
      this.$refs.drawerComponent.showDrawer()
    },
    clickTopItem(index) {
      this.actionCurrent = index
    },
    clickTestBtn() {
      console.log('点击侧边栏')
    }
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        console.log(this.$refs.drawerPage)
        this.scroll = new BScroll(this.$refs.pageContent, {
          click: true
        })
      } else {
      }
    })
    setTimeout(() => {
      console.log('刷新')
      this.scroll.refresh()
    }, 1000)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.drawer-page-content
  position absolute
  width 100%
  height 100%
  .drawer-header
    width 100%
    position absolute

  .drawer-content
    position absolute
    width 100%
    top 84px
    left 0
    right 0
    bottom 0
    z-index 0

  .menu-btn
    position absolute
    left 0
    width 40px
    height 40px
    display flex
    align-items center
    justify-content center
    font-size 24px
    color white

  .action-item-container
    margin 0 auto

    .action-item
      color #D0D0D0
      margin-right 20px

      &:last-child
        margin-right 0

      &.select
        color white
</style>

