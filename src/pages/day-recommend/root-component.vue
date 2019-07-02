<template xmlns:v-slot="">
  <div class="root-component">
    <app-bar-component>
      <template v-slot:backText>
        <span>返回</span>
      </template>
      <!-- 当有多个具名插槽的时候,default这个默认插槽(:default)不能缩写 -->
      <template v-slot:default="scopeProps">
        <span>每日推荐{{scopeProps.contentProps.name}}-{{scopeProps.test}}</span>
      </template>
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

