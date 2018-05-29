<template>
<!-- 定义头部的部分。头部只有一个标题 -->
  <header :class="$style.mainHeader">
    <h1>todo list</h1>
  </header>
</template>

<style lang="stylus" module>
.main-header{
  text-align center
  h1{
    font-size 100px
    color: rgba(175, 47, 47, 0.4)
    font-weight 400
    margin 20px
  }
}
</style>

<!--<docs>#abc = 123</docs>-->

