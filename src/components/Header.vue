<template>
  <div class="headerWrapper">
    <header class="header">
      <div class="container"><h1><a href="#/zh-CN" class="nav-link"><img
        src="../assets/image/logo.png" alt="element-logo" class="nav-logo">&nbsp;hqep</a></h1>
        <ul class="nav">
          <li class="nav-item nav-algolia-search">
            <el-autocomplete
              v-model="state4"
              :fetch-suggestions="querySearchAsync"
              placeholder="搜索文档"
              size="small"
              @select="handleSelect"
            ></el-autocomplete>
          </li>
          <li class="nav-item"><a href="#/zh-CN/guide">指南</a></li>
          <li class="nav-item"><a href="#/zh-CN/component" class="active">组件</a></li>
          <li class="nav-item">
            <div class="nav-gap"></div>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" scoped>
  .headerWrapper
    position fixed
    height 80px
    width 100%
    left 0
    top 0
    z-index 1500

  .header
    height 80px
    background-color #fff
    color #fff
    top 0
    left 0
    width 100%
    line-height 80px
    z-index 100
    position relative
    h1
      margin 0
      float left
      font-size 32px
      font-weight 400
    .nav-logo
      vertical-align sub
    .nav
      float right
      height 100%
      line-height 80px
      background transparent
      padding 0
      margin 0
    .nav-item
      margin 0
      float left
      list-style none
      position relative
      cursor default
      a
        text-decoration none
        color #888
        display block
        padding 0 22px
        &.active, &:hover
          color #333
        &.active:after
          content ""
          display inline-block
          position absolute
          bottom 15px
          left calc(50% - 7px)
          width 14px
          height 4px
          background #409eff

  .container
    width 1140px
    padding 0
    margin 0 auto
    height 100%
    box-sizing border-box

  .nav-link
    text-decoration none
    color #01175e
    font-style italic

</style>
