<template>
  <div class="rank-grid-item">
    <div class="top-container">
      <div class="img-wrapper">
        <img class="img" :src="rankItemData.coverImgUrl" alt="图片"/>
      </div>
      <div class="text-wrapper">
        <div class="update-frequency">{{rankItemData.updateFrequency}}</div>
      </div>
    </div>
    <div class="rank-name text-line-2">{{rankItemData.name}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'rank-grid-item',
  components: {},
  props: {
    rankItemData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.rank-grid-item
  width 30%
  display flex
  flex-direction column

  .top-container
    margin-top 4px
    width 100%
    position relative

    .img-wrapper
      width 100%
      padding-bottom 100%
      position relative

      .img
        border-radius 9px
        position absolute
        left 0
        top 0
        width 100%
        height 100%

    .text-wrapper
      position absolute
      left 0
      bottom 0
      width 100%
      height 50%
      border-bottom-left-radius 9px
      border-bottom-right-radius 9px
      background-image linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))

      .update-frequency
        position absolute
        left 6px
        bottom 4px
        font-size 12px
        color white

  .rank-name
    margin-top 6px
    margin-bottom 3px
    color #303030
    font-size 14px

</style>

