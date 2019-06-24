<template>
  <div class="btn-group">
    <list-title-component :title="groupTitle"></list-title-component>
    <div class="grid-container">
      <div class="grid-cell" v-for="(item,index1) in groupData" :key="index1">
        <div class="btn" @click="selectPlaylist(item.name)">{{item.name}}</div>
      </div>
      <!-- 主要用于最后占位,达到流布局效果 -->
      <div class="grid-cell" v-for="(item,index2) in fillEndData" :key="`end-${index2}`"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ListTitleComponent from "../../home/components/list-title-component"
const colorList = [
  {
    title: '嫣红',
    name: 'red',
    color: '#e54d42'
  },
  {
    title: '桔橙',
    name: 'orange',
    color: '#f37b1d'
  },
  {
    title: '明黄',
    name: 'yellow',
    color: '#fbbd08'
  },
  {
    title: '橄榄',
    name: 'olive',
    color: '#8dc63f'
  },
  {
    title: '森绿',
    name: 'green',
    color: '#39b54a'
  },
  {
    title: '天青',
    name: 'cyan',
    color: '#1cbbb4'
  },
  {
    title: '海蓝',
    name: 'blue',
    color: '#0081ff'
  },
  {
    title: '姹紫',
    name: 'purple',
    color: '#6739b6'
  },
  {
    title: '木槿',
    name: 'mauve',
    color: '#9c26b0'
  },
  {
    title: '桃粉',
    name: 'pink',
    color: '#e03997'
  },
  {
    title: '棕褐',
    name: 'brown',
    color: '#a5673f'
  },
  {
    title: '墨黑',
    name: 'black',
    color: '#333333'
  },
]
export default {
  name: 'btn-group',
  components: {ListTitleComponent},
  props: {
    groupTitle: {
      type: String,
      required: true
    },
    groupData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {
    fillEndData() {
      const mod = this.groupData.length % 3
      if (mod !== 0) {
        return new Array(3 - mod).keys()
      } else {
        return []
      }
    }
  },
  methods: {
    selectPlaylist(name) {
      this.$emit('selectPlaylist', name)
    },
    randomColorClass() {
      const index = Math.floor(Math.random() * colorList.length)
      return `bg-${colorList[index].name}`
    }
  },
  created() {
  },
  mounted() {
    this.groupData.forEach((item) => {
      item.colorClass = this.randomColorClass()
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.btn-group
  width 100%
  display flex
  flex-direction column

  .grid-container
    width 100%
    display flex
    flex-direction row
    flex-flow wrap
    justify-content space-evenly

    .grid-cell
      height 40px
      width 32%
      display flex
      align-items center
      justify-content center

      .btn
        width 80px
        height 30px
        line-height 30px
        text-align center
        box-sizing border-box
        border-radius 20px
        background-color #F0F0F0
        color #303030
        font-size 10px
</style>

