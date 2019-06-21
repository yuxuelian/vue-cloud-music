<template>
  <div class="grid">
    <div class="grid-item margin-tb-xs" v-for="(item,index) in gridData" :key="item.id"
         @click="clickItem(index)">
      <div class="img-container">
        <img class="img" :src="item.imageUrl"/>
      </div>
      <p class="text-sm text-black text-line-2">{{item.name}}</p>
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
      console.log('grid-component index = ' + index)
      this.$emit('selectGridItem', index)
    }
  },
  created() {
  },
  mounted() {
    console.log(this.gridData)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.grid-item
  width 32%

  .img-container
    width 100%
    padding-bottom 100%
    position relative

    .img
      position absolute
      width 100%
      left 0
      top 0
</style>

