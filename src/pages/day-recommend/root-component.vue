<template>
  <div class="root-component">
    <app-bar-component>
      <span slot="backText">返回</span>
      <span slot="content">每日推荐</span>
    </app-bar-component>
  </div>
</template>

<script type="text/ecmascript-6">
import AppBarComponent from "../../common/components/app-bar-component"
export default {
  name: 'root-component',
  components: {AppBarComponent},
  props: {},
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

</style>

