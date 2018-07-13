<template>
  <div class="nav-menu-container">
    <div class="side-nav">
      <ul>
        <li class="nav-item"><a>组件</a>
          <div class="nav-group">
            <div class="nav-group__title">Basic</div>
            <ul class="pure-menu-list">
              <li class="nav-item"><a href="/component/layout">Layout 布局</a></li>
              <li class="nav-item"><a href="/component/container">Container 布局容器</a>
              </li>
              <li class="nav-item"><a href="/component/typography">Typography 字体</a>
              </li>
              <li class="nav-item"><a href="/component/icon">Icon 图标</a></li>
              <li class="nav-item"><a href="/component/button">Button 按钮</a></li>
            </ul>
          </div>
          <div class="nav-group">
            <div class="nav-group__title">Form</div>
            <ul class="pure-menu-list">
              <li class="nav-item"><a href="/component/radio">Radio 单选框</a></li>
              <li class="nav-item"><a href="/component/checkbox">Checkbox 多选框</a></li>
              <li class="nav-item"><a href="/component/input">Input 输入框</a></li>
              <li class="nav-item"><a href="/component/input-number">InputNumber 计数器</a>
              </li>
              <li class="nav-item"><a href="/component/select">Select 选择器</a></li>
              <li class="nav-item"><a href="/component/cascader">Cascader 级联选择器</a></li>
              <li class="nav-item"><a href="/component/switch">Switch 开关</a></li>
              <li class="nav-item"><a href="/component/slider">Slider 滑块</a></li>
              <li class="nav-item"><a href="/component/time-picker">TimePicker 时间选择器</a>
              </li>
              <li class="nav-item"><a href="/component/date-picker">DatePicker 日期选择器</a>
              </li>
              <li class="nav-item"><a href="/component/datetime-picker">DateTimePicker 日期时间选择器</a>
              </li>
              <li class="nav-item"><a href="/component/upload">Upload 上传</a></li>
              <li class="nav-item"><a href="/component/rate">Rate 评分</a></li>
              <li class="nav-item"><a href="/component/color-picker"
              >ColorPicker 颜色选择器</a></li>
              <li class="nav-item"><a href="/component/transfer">Transfer 穿梭框</a></li>
              <li class="nav-item"><a href="/component/form">Form 表单</a></li>
            </ul>
          </div>
          <div class="nav-group">
            <div class="nav-group__title">Data</div>
            <ul class="pure-menu-list" style="height: auto;">
              <li class="nav-item"><a href="/component/table">Table 表格</a></li>
              <li class="nav-item"><a href="/component/tag">Tag 标签</a></li>
              <li class="nav-item"><a href="/component/progress">Progress 进度条</a></li>
              <li class="nav-item"><a href="/component/tree">Tree 树形控件</a></li>
              <li class="nav-item"><a href="/component/pagination">Pagination 分页</a>
              </li>
              <li class="nav-item"><a href="/component/badge">Badge 标记</a></li>
            </ul>
          </div>
          <div class="nav-group">
            <div class="nav-group__title">Notice</div>
            <ul class="pure-menu-list" style="height: auto;">
              <li class="nav-item"><a href="/component/alert">Alert 警告</a></li>
              <li class="nav-item"><a href="/component/loading">Loading 加载</a></li>
              <li class="nav-item"><a href="/component/message">Message 消息提示</a></li>
              <li class="nav-item"><a href="/component/message-box">MessageBox 弹框</a>
              </li>
              <li class="nav-item"><a href="/component/notification">Notification 通知</a>
              </li>
            </ul>
          </div>
          <div class="nav-group">
            <div class="nav-group__title">Navigation</div>
            <ul class="pure-menu-list" style="height: auto;">
              <li class="nav-item"><a href="/component/menu">NavMenu 导航菜单</a></li>
              <li class="nav-item"><a href="/component/tabs">Tabs 标签页</a></li>
              <li class="nav-item"><a href="/component/breadcrumb">Breadcrumb 面包屑</a>
              </li>
              <li class="nav-item"><a href="/component/dropdown">Dropdown 下拉菜单</a></li>
              <li class="nav-item"><a href="/component/steps">Steps 步骤条</a></li>
            </ul>
          </div>
          <div class="nav-group">
            <div class="nav-group__title">Others</div>
            <ul class="pure-menu-list" style="height: auto;">
              <li class="nav-item"><a href="/component/dialog">Dialog 对话框</a></li>
              <li class="nav-item"><a href="/component/tooltip">Tooltip 文字提示</a></li>
              <li class="nav-item"><a href="/component/popover">Popover 弹出框</a></li>
              <li class="nav-item"><a href="/component/card">Card 卡片</a></li>
              <li class="nav-item"><a href="/component/carousel">Carousel 走马灯</a></li>
              <li class="nav-item"><a href="/component/collapse">Collapse 折叠面板</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavMenu"
  }
</script>

<style lang="stylus" scoped>
  .nav-menu-container
    width 240px
    position fixed
    top 0
    bottom 0
    margin-top 80px
    transition padding-top .3s

  .side-nav
    width 100%
    box-sizing border-box
    transition opacity .3s
    height 100%
    padding-top 50px
    padding-bottom 50px
    padding-right 0
    overflow-y auto
    overflow-x hidden
    ul
      padding 0
      margin 0
      overflow hidden
      li
        list-style none

  .nav-item > a
    display block
    height 40px
    color #444
    line-height 40px
    font-size 14px
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
    font-weight 400
    margin 0
    padding 0
    position relative
    transition .15s ease-out
    text-decoration none
    &:hover
      color #409eff
    &.active
      color #409eff
</style>
