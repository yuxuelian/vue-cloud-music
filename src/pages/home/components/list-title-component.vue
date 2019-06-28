<template>
  <div class="list-title-component solid-top solid-bottom">
    <span class="title-text">{{title}}</span>

    <div v-if="rightText"class="more-container" @click="clickRight">
      <span>{{rightText}}</span>
      <i class='icon-right'></i>
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
  font-size 16px

  .title-text
    border-left 2px solid red
    margin-left 10px
    padding-left 4px

  .more-container
    margin-right 10px

</style>

