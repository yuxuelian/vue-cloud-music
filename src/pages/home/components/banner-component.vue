<template>
  <div class="swiper-super-wrapper">
    <div class="swiper-parent-wrapper">
      <swiper
      ref="mySwiper"
      class="my-swiper"
      :options="swiperOption"
      v-if="swiperData.length>0"
      @tap="swiperClick"
      >
        <swiper-slide
        v-for="(item,index) in swiperData"
        :key="index"
        >
          <img :src="item.imageUrl" class="swiper-img" alt="轮播图">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'banner-component',
  components: {},
  props: {
    swiperData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      swiperOption: {
        loop: true,
        preventClicks: false,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        },
        effect: 'slide',
      }
    }
  },
  watch: {},
  computed: {},
  methods: {
    swiperClick() {
      const index = this.$refs.mySwiper.swiper.realIndex
      console.log('当前index = ' + index)
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.swiper-pagination >>> .swiper-pagination-bullet-active
  background #D33A31 !important

.swiper-super-wrapper
  width 100%

  .swiper-parent-wrapper
    position relative
    width 100%
    padding-bottom 36.8%

    .my-swiper
      position absolute
      width 100%
      height 100%

      .swiper-img
        width 100%
        height 100%
</style>

