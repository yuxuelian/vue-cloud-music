<template>
  <div class="grid-container">
    <div
    class="grid-item"
    v-for="(item,index) in gridData"
    :key="item.id"
    @click="clickItem(index)"
    >
      <div class="img-container">
        <img class="img" v-lazy="item.imageUrl">
      </div>
      <p class="img-des text-line-2">{{item.name}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'grid-component',
  components: {},
  props: {
    gridData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    clickItem(index) {
      this.$emit('selectGridItem', index)
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.grid-container
  width 100%
  display flex
  flex-direction row
  flex-flow wrap
  justify-content space-evenly

  .grid-item
    margin-top 4px
    width 30%

    .img-container
      margin-top 4px
      width 100%

      .img
        border-radius 9px
        width 100%

    .img-des
      margin-top 4px
      margin-bottom 4px
      font-size 12px
      color #303030
</style>

