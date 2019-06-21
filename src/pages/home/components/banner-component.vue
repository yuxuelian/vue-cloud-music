<template>
  <swiper
  ref="mySwiper"
  class="my-swiper"
  :options="swiperOption"
  @someSwiperEvent="someSwiperEvent"
  >
    <swiper-slide
    class="my-swiper-item"
    v-for="(item,index) in swiperData"
    :key="item.id"
    @click="swiperClick"
    :class="currentIndex===index?'cur':''"
    >
      <div class="swiper-item-container-parent">
        <div class="swiper-item-container">
          <img
          :src="item.imageUrl"
          alt="轮播图"
          class="swiper-img"
          />
        </div>
      </div>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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
  watch: {
    swiperData(newvalue) {
      console.log('------banner-component.vue-----')
      console.log(newvalue)
    }
  },
  computed: {},
  methods: {
    someSwiperEvent(e) {
      console.log(e)
    },
    swiperClick() {
      console.log('点击轮播')
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

.my-swiper
  width 100%
  height 180px

  .my-swiper-item
    display flex
    justify-content center
    align-items center

    .swiper-item-container-parent
      width 90%
      display flex
      justify-content center
      align-items center

      .swiper-item-container
        position relative
        width 100%
        padding-bottom 36.8%

        .swiper-img
          position absolute
          left 0
          top 0
          width 100%
          height 100%
          border-radius 7px
</style>

