<template>
  <div class="root-component">
    <app-bar-component>
      <span slot="backText">返回</span>
      <span slot="content">排行榜</span>
    </app-bar-component>
    <div class="rank-grid-wrapper">
      <div class="rank-grid-container">
        <rank-grid-item
        v-for="item in toplistData"
        :rankItemData="item"
        :key="item.id"
        >
        </rank-grid-item>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import AppBarComponent from "../../common/components/app-bar-component"
import RankGridItem from "./components/rank-grid-item"
export default {
  name: 'root-component',
  components: {RankGridItem, AppBarComponent},
  props: {},
  data() {
    return {
      toplistData: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    async requestToplistDetail() {
      this.toplistData = (await this.$axios.get('/toplist')).data.list.map((data) => {
        return {
          id: data.id,
          updateFrequency: data.updateFrequency,
          name: data.name,
          coverImgUrl: data.coverImgUrl
        }
      })
    },
  },
  created() {
    this.requestToplistDetail()
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.rank-grid-wrapper
  width 100%

  .rank-grid-container
    width 100%
    display flex
    flex-direction row
    justify-content space-evenly
    flex-flow wrap
</style>

