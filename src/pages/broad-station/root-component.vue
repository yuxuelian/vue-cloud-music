<template>
  <drawer-component ref="drawerComponent">
    <div class="flex-column" slot="drawerPage">
      <cu-custom bgColor="bg-cloud-red" :isBack="true">
        <span slot="backText">返回</span>
        <span slot="content">电台</span>
      </cu-custom>

      <div class="cu-btn" @click="showDrawer">显示侧边栏</div>
    </div>

    <div class="flex-column bg-gradual-blue" slot="drawerWindow">
    </div>
  </drawer-component>
</template>

<script type="text/ecmascript-6">
import DrawerComponent from "../../common/components/drawer-component"
import ListTitleComponent from "../../common/components/list-title-component"
export default {
  name: 'root-component',
  components: {ListTitleComponent, DrawerComponent},
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

