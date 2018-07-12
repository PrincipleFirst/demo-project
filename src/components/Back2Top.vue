<template>
    <div class="page-component-up" @click="backTop" ref="up"><i class="el-icon-caret-top"></i></div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      backTop() {
        document.getElementById('main-scrollbar').scrollTop = 0
        this.hide()
      },
      show() {
        this.$refs.up.style.display = 'block'
        setTimeout(() => {
          this.$refs.up.classList.add('back-top-fade-enter')
          this.$refs.up.classList.remove('back-top-fade-leave-active')
        }, 300)
      },
      hide() {
        this.$refs.up.classList.add('back-top-fade-leave-active')
        this.$refs.up.classList.remove('back-top-fade-enter')
        setTimeout(() => {
          this.$refs.up.style.display = 'none'
        }, 300)
      },
    },
  }
</script>

<style lang="stylus" scoped>
    .page-component-up
        background-color #fff
        position fixed
        right 100px
        bottom 150px
        width 40px
        height 40px
        border-radius 20px
        cursor pointer
        transition .3s
        box-shadow 0 0 6px rgba(0, 0, 0, .12)
        display none
        opacity 0
        i
            color #409eff
            display block
            line-height 40px
            text-align center
            font-size 18px

    .back-top-fade-enter
        transform translateY(30px)
        opacity 1

    .back-top-fade-leave-active
        transform translateY(-30px)
        opacity 0

</style>
