<template>
  <div id="app">
    <!-- 顶部导航 -->
    <!-- <header_/> -->
    <!-- 内容 -->
    <!-- <wenzhang/> -->
    <!-- 路由视图 -->
    <router-view></router-view>
    <!-- 弹框-编辑框 -->
    <bianjikuang ref="ref_bianjikuang"/>
  </div>
</template>

<script>
import header_ from './components/header_'
import bianjikuang from './components/bianjikuang'
import bianjneirong from './components/bianjneirong'
import contents from './components/contents'
import wenzhang from './components/wenzhang'
import bianjiwenzhang from './components/bianjiwenzhang'
import login from './components/login'
export default {
  name: 'App',
  components: {
    header_,
    bianjikuang,
    bianjneirong,
    contents,
    wenzhang,
    bianjiwenzhang,
    login,
  }
}
</script>

<style>
*{margin:0;padding: 0}
body{
  overflow:hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
  text-decoration: none;
  color: #303133;
}
</style>
