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

    input {
        background-color: transparent !important;
    }

    input:-webkit-autofill {
        -webkit-transition: background-color 10000s cubic-bezier(1, -100, 1, -100) 0s;
    }
</style>
