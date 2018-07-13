<template>
  <div class="page-container">
    <v-header></v-header>
    <nav-menu></nav-menu>
  </div>
</template>

<script>
  import VHeader from 'components/Header'
  import NavMenu from 'components/NavMenu'

  export default {
    name: 'Instance',
    components: {
      VHeader,
      NavMenu
    },
  }
</script>

<style lang="stylus" scoped>
  .page-container
    width 1140px
    padding 0
    margin 0 auto
    box-sizing border-box
    height 100%
</style>
