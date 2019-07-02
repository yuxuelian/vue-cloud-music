<template>
  <div class="root-component">
    <app-bar-component>
      <span slot="backText">返回</span>
      <span slot="content">登录</span>
    </app-bar-component>
    <div class="ripple-layer">
      <img class="gif-wave" :src="wave" alt="水波纹">
    </div>

    <div class="input-container">
      <div class="input-container">
        <i class="icon-share"></i>
        <input class="input text-line-1" type="number" v-model="phone" placeholder="请输入手机号">
      </div>
      <div class="input-container">
        <i class="icon-share"></i>
        <input class="input text-line-1" type="password" v-model="password" placeholder="请输入密码">
      </div>
      <div class="login-btn" @click="loginClick">登录</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import AppBarComponent from "../../common/components/app-bar-component"
export default {
  name: 'root-component',
  components: {
    AppBarComponent
  },
  props: {},
  data() {
    return {
      wave: './images/wave.gif',
      phone: '',
      password: ''
    }
  },
  watch: {},
  computed: {},
  methods: {
    loginClick() {
      // this.requestLogin()
      this.$router.go(-1)
    },
    async requestLogin() {
      const userData = (await this.$axios.get(`/login/cellphone?phone=${this.phone}&password=${this.password}`)).data
      console.log('登录成功')
      console.log(userData)
      this.$router.go(-1)
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.root-component
  display flex
  flex-direction column
  width 100%

  .ripple-layer
    position relative
    height 150px
    background-color #D33A31

    .gif-wave
      position absolute
      width 100%
      bottom 0
      left 0
      z-index 99
      mix-blend-mode screen

  .input-container
    width 280px
    margin 0 auto
    margin-top 20px

    .input-container
      display flex
      flex-direction row
      border-bottom 1px solid #D33A31
      color #D33A31

      .input
        width 0
        flex 1
        padding-left 10px
        padding-right 10px
        border none
        outline none
        background-color transparent
        font-size 16px

        &:active
          border none

    .login-btn
      margin-top 30px
      width 100%
      height 40px
      border 1px solid #D33A31
      border-radius 20px
      font-size 16px
      line-height 40px
      text-align center
      color #D33A31

      &:active
        background-color rgba(211, 58, 49, .3)
</style>

