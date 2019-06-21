<template>
  <drawer-component ref="drawerComponent">
    <div class="flex-column" slot="drawerPage">
      <app-bar-component>
        <span slot="backText">返回</span>
        <span slot="content">电台</span>
      </app-bar-component>

      <div class="cu-btn" @click="showDrawer">显示侧边栏</div>
    </div>

    <div class="flex-column bg-gradual-blue" slot="drawerWindow">
    </div>
  </drawer-component>
</template>

<script type="text/ecmascript-6">
import DrawerComponent from "../../common/components/drawer-component"
import ListTitleComponent from "../../common/components/list-title-component"
import AppBarComponent from "../../common/components/app-bar-component"
export default {
  name: 'root-component',
  components: {AppBarComponent, ListTitleComponent, DrawerComponent},
  props: {},
  data() {
    return {
      showDrawerFlag: false
    }
  },
  watch: {},
  computed: {},
  methods: {
    showDrawer() {
      this.$refs.drawerComponent.showDrawer()
    },
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

