<template>
  <div class="song-item solid-bottom">
    <div class="song-index text-grey">{{index+1}}</div>
    <div class="song-info-container">
      <div class="song-name text-black text-line-1">{{song.name}}</div>
      <div class="song-al text-grey text-line-1">{{arNameJoin}} - {{song.alName}}</div>
    </div>
    <div class="song-item-right-btn">
      <i class="icon-share"></i>
    </div>
    <div class="song-item-right-btn">
      <i class="icon-share"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'song-item',
  components: {},
  props: {
    index: {
      type: Number,
      required: true
    },
    song: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {
    arNameJoin() {
      let res = ''
      this.song.ar.forEach((item, index) => {
        res += item.name
        if (index < this.song.ar.length - 1) {
          res += '/'
        }
      })
      return res
    }
  },
  methods: {},
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.song-item
  display flex
  width 100%
  height 50px
  flex-direction row
  align-items center

  .song-index
    height 50px
    width 50px
    line-height 50px
    text-align center
    font-size 18px

  .song-info-container
    display flex
    flex-direction column
    flex 1

    .song-name
      font-size 16px

    .song-al
      margin-top 4px
      font-size 14px

  .song-item-right-btn
    height 50px
    width 50px
    display flex
    align-items center
    justify-content center

    &:active
      background-color #fadbd9
</style>

