<template>
  <drawer-component ref="drawerComponent">
    <div slot="drawerPage" class="drawer-page-container">
      <div
      class="drawer-header cu-bar bg-cloud-red"
      :style="`height:${AppBarHeight+StatusBarHeight};padding-top:${StatusBarHeight}px;`"
      >
        <div class="menu-btn" @click.prevent.stop="leftIconClick">
          <i class="cuIcon-pullleft text-white"></i>
        </div>

        <div class="action-item-container">
          <router-link
          tag="span"
          class="action-item"
          to="home-discover"
          >
            发现
          </router-link>
          <router-link
          tag="span"
          class="action-item"
          to="home-mine"
          >
            我的
          </router-link>
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
  computed: {},
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
  width 100%
  height 100%
  display flex
  flex-direction column

  .drawer-header
    /*height通过style动态设置*/
    width 100%

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
    font-size 16px

    .action-item
      color #D0D0D0
      margin-right 20px

      &:last-child
        margin-right 0

      &.router-link-active
        color white

.slide-container
  width 100%
  height 100%
  font-size 16px
  color white
</style>

