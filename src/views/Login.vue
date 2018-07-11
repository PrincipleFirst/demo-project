<template>
    <div class="bg-img">
        <div class="login-content">
            <div class="card">
                <div class="card-header">
                    <div class="companyName"><h4>华强电力</h4></div>
                    <div class="sysName">内部成果演示系统</div>
                </div>
                <div class="login_form" @click="focus_sh">
                    <el-form :model="ruleForm" status-icon
                             ref="ruleForm">
                        <el-form-item prop="username">
                            <el-input placeholder="用户名"
                                      prefix-icon="iconfont icon-yonghu"
                                      v-model="ruleForm.username"
                                      auto-complete="off">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="pass">
                            <el-input type="password"
                                      placeholder="密码"
                                      v-model="ruleForm.pass"
                                      prefix-icon="iconfont icon-iconfontzhizuobiaozhun0253"
                                      auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="width: 100%" type="primary" @click="login" :loading="loading">登录
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
        <div id="focus_ovr" :style="toFocus" @click="focus_hi"></div>
    </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        isFocus: false,
        loading: false,
        ruleForm: {
          username: '',
          pass: '',
        },
      }
    },
    mounted() {
      document.body.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.login()
        }
      })
    },
    computed: {
      toFocus() {
        if (this.isFocus === true) {
          return 'opacity: 0.55'
        }
        return ''
      },
    },
    methods: {
      login() {
        this.loading = true
        this.$refs.ruleForm.validateField('pass', () => {
          this.loading = false
        })
      },
      onSelect(data) {
        console.log(data)
      },
      onClear(data) {
        console.log('clear', data)
      },
      focus_sh() {
        if (this.isFocus === true) {
          return
        }
        this.isFocus = true
      },
      focus_hi() {
        if (this.isFocus === false) {
          return
        }
        this.isFocus = false
      },
    },
  }
</script>

<style lang="stylus" scoped>
    .bg-img
        display flex
        flex-flow column
        width 100%
        height 100vh
        background url(../assets/image/login_bg.jpg) center no-repeat
        background-size cover

    .login-content
        display flex
        flex 1
        align-items center
        justify-content center

    .card
        position relative
        display flex
        z-index 11
        flex-direction column
        align-items center
        width 432px
        background-color #fff
        border 1px solid #ebeef5
        border-radius 4px
        -webkit-animation-name card
        -webkit-box-shadow 0 2px 12px 0 rgba(0, 0, 0, .85)
        box-shadow 0 2px 12px 0 rgba(0, 0, 0, .85)
        -moz-animation-name card
        -o-animation-name card
        animation-name card
        -webkit-animation-duration 600ms
        -moz-animation-duration 600ms
        -o-animation-duration 600ms
        animation-duration 600ms
        -webkit-animation-fill-mode forwards
        -moz-animation-fill-mode forwards
        -o-animation-fill-mode forwards
        animation-fill-mode forwards

    @-webkit-keyframes card
        from
            top -40px
        to
            top 0

    @keyframes card
        from
            top -40px
        to
            top 0

    .card-header
        position relative
        overflow hidden
        z-index 11
        top -40px
        width 78%
        padding 25px
        border-radius 3px
        background linear-gradient(60deg, #ec407a, #d81b60)
        box-shadow 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)
        display flex
        flex-direction column
        align-items center
        margin 0 auto

    .card-header h4
        font-weight 400
        color #fff
        font-size 24px
        line-height 32px
        margin-bottom 25px
        margin-top 5px

    .sysName
        font-weight 400
        color #fff
        font-size 18px
        line-height 26px

    .login_form
        width 90%

    #focus_ovr
        position absolute
        top 0
        left 0
        height 100vh
        width 100%
        background #000
        z-index 10
        opacity 0

    .el-button--primary
        background linear-gradient(60deg, #ec407a, #d81b60)
        border-color #d81b60

    .el-button--primaryfocus, .el-button--primaryhover
        background #ec407a
        border-color #ec407a

    .el-button--primary.is-active, .el-button--primaryactive
        background #d81b60
        border-color #d81b60
</style>
