<template>
  <div class="root-tab-layout solid-bottom">
    <div
    class="tab-layout bg-white nav"
    ref="scrollViewX"
    >
      <div class="tab-content">
        <span
        v-for="(item,index) in tabData"
        :key="item.id"
        class="cu-item tab-item"
        :class="currentTabIndex===index?'text-cloud-red cur':''"
        @click="tabSelectChange(index)"
        ref="tabItem"
        >
          {{item.name}}
        </span>
      </div>
    </div>
    <div class="right-btn" @click="clickTabRightBtn">
      <i class="cuIcon-apps text-cloud-red"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  name: 'tab-layout',
  components: {},
  props: {
    tabData: {
      type: Array,
      required: true
    },
    currentTabIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {}
  },
  watch: {
    tabData() {
      if (this.scroll) {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    currentTabIndex(newValue) {
      if (this.scroll) {
        if (newValue > 1) {
          this.scroll.scrollToElement(this.$refs.tabItem[newValue - 1], 300)
        } else {
          this.scroll.scrollToElement(this.$refs.tabItem[0], 300)
        }
      }
    }
  },
  computed: {},
  methods: {
    tabSelectChange(index) {
      this.$emit('tabSelectChange', index)
    },
    clickTabRightBtn() {
      this.$emit('clickTabRightBtn')
    }
  },
  created() {
  },
  mounted() {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.scrollViewX, {
        scrollX: true,
        scrollY: false,
        click: true
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.root-tab-layout
  display flex

  .right-btn
    height 40px
    width 40px
    display flex
    align-items center
    justify-content center
    font-size 18px

  .tab-layout
    height 100%
    width 0
    flex 1
    display flex
    overflow hidden

    .tab-content
      height 100%
      width auto
      display flex
      flex-direction row
      font-size 0

      .tab-item
        margin 0 4px
        font-size 16px
        display inline-block
</style>

