<template>
  <router-view/>
</template>

<style lang="stylus">
  html, body
    margin 0
    padding 0
    width 100%
    height 100vh
    overflow-x hidden
    font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    SimSun, sans-serif

  input
    background-color transparent !important
    &:-webkit-autofill
      -webkit-transition background-color 10000s cubic-bezier(1, -100, 1, -100) 0s

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px
  }

  ::-webkit-scrollbar-button:vertical {
    display: none
  }

  ::-webkit-scrollbar-corner, ::-webkit-scrollbar-track {
    background-color: #e2e2e2
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(144, 146, 152, .3)
  }

  ::-webkit-scrollbar-thumb:vertical:hover {
    background-color: rgba(144, 146, 152, .5)
  }

  ::-webkit-scrollbar-thumb:vertical:active {
    background-color: rgba(144, 146, 152, .85)
  }

</style>
