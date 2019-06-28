<template>
  <drawer-component ref="drawerComponent">
    <div slot="drawerPage" class="drawer-page-container">
      <div
      class="app-bar-component-wrapper"
      :style="`height:${totalBarHeight}px;`"
      >
        <div
        class="app-bar-component bg-cloud-red"
        :style="`height:${AppBarHeight}px;padding-top:${StatusBarHeight}px`"
        >
          <div
          class="bar-title" :style="`height:${AppBarHeight}px;`"
          >
            <div class="action-item-container">
              <router-link
              tag="span"
              class="action"
              to="home-discover"
              >
                发现
              </router-link>
              <router-link
              tag="span"
              class="action"
              to="home-mine"
              >
                我的
              </router-link>
            </div>
          </div>

          <div
          class="menu-btn" :style="`height:${AppBarHeight}px;width:${AppBarHeight}px;`"
          @click.capture="leftIconClick"
          >
            <i class="icon-menu"></i>
          </div>
        </div>
      </div>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <div slot="drawerWindow" class="slide-container bg-gradual-blue">
      <drawer-slide-component></drawer-slide-component>
    </div>
  </drawer-component>
</template>

<script type="text/ecmascript-6">
import DrawerComponent from "../../common/components/drawer-component"
import DrawerSlideComponent from "./sub/drawer-slide-component"
export default {
  name: 'index',
  components: {
    DrawerSlideComponent,
    DrawerComponent,
  },
  props: {},
  data() {
    return {
      StatusBarHeight: this.StatusBarHeight,
      AppBarHeight: this.AppBarHeight,
      isShowDrawer: false,
      actionCurrent: 0,
    }
  },
  watch: {},
  computed: {
    totalBarHeight() {
      return this.AppBarHeight + this.StatusBarHeight
    }
  },
  methods: {
    leftIconClick() {
      // 显示侧滑菜单
      // this.$refs.drawerComponent.showDrawer()
      this.$router.push({name: 'login'})
      // console.log(document.cookie)
      // console.log(navigator.userAgent)
    },
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.drawer-page-container
  position absolute
  left 0
  top 0
  width 100%
  height 100%
  display flex
  flex-direction column

  .app-bar-component-wrapper
    width 100%
    position relative
    min-height 50px

    .app-bar-component
      width 100%
      position fixed
      z-index 9999

      .bar-title
        left 0
        bottom 0
        position absolute
        width 100%
        display flex
        align-items center
        justify-content center
        font-size 18px
        color #D0D0D0
        z-index -1

        .action
          margin-right 6px

          &.router-link-active
            color white

          &:last-child
            margin-right 0

      .menu-btn
        color white
        display flex
        flex-direction row
        align-items center
        justify-content center
        font-size 20px


.slide-container
  width 100%
  height 100%
  font-size 16px
  color white
</style>

