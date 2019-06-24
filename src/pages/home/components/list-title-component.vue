<template>
  <div class="list-title-component solid-top solid-bottom">
    <div class='action'>
      <i class='cuIcon-titles text-cloud-red icon-title'></i>
      <span class="text-lg text-black">{{title}}</span>
    </div>

    <div class='action margin-right-xs' v-if="rightText" @click="clickRight">
      <span class="text-lg text-black ">{{rightText}}</span>
      <i class='cuIcon-right text-gray icon-more'></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'list-title-component',
  components: {},
  props: {
    title: {
      type: String,
      required: true
    },
    rightText: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    clickRight(e) {
      this.$emit('clickRight', e)
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.list-title-component
  height 40px
  display flex
  flex-direction row
  align-items center
  justify-content space-between

  .action
    display flex
    flex-direction row
    align-items center

    .icon-title
      font-size 16px

    .icon-more
      font-size 20px
</style>

