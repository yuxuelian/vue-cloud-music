<template>
  <div
  class="page-item-content"
  ref="pageItemContent"
  >
    <grid-component
    :gridData="gridData"
    @selectGridItem="selectGridItem"
    >
    </grid-component>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import GridComponent from "../../../common/components/grid-component"
export default {
  name: 'pager-item-content',
  components: {GridComponent},
  props: {
    gridData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  watch: {
    gridData() {
      if (this.scroll) {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    }
  },
  computed: {},
  methods: {
    selectGridItem(index) {
      const playlistId = this.gridData[index].id
      // 跳转路由
      this.$router.push({
        name: 'song-list-detail',
        params: {
          playlistId
        },
      })
    }
  },
  created() {
  },
  mounted() {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.pageItemContent, {
        click: true
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.page-item-content
  width 100%
  height 100%
</style>

