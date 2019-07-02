<template>
  <div class="root-component">
    <app-bar-component>
      <span slot="backText">返回</span>
      <span>模板页</span>
    </app-bar-component>
    <div class="content">
      模板页
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import AppBarComponent from "../../common/components/app-bar-component"
export default {
  name: 'root-component',
  components: {
    AppBarComponent
  },
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
.root-component
  display flex
  flex-direction column
  width 100%
  position absolute
  left 0
  top 0

  .content
    width 100%
    font-size 16px
    color #303030

</style>

