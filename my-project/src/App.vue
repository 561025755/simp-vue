<template>
  <div id="app">

    <!--<router-link to="/view1">Go to view1</router-link>
    <router-link to="/view2">Go to view2</router-link>
    <router-link to="/view3">Go to view3</router-link>-->

    <!--<img src="./assets/logo.png">-->
    <!--<hello></hello>-->
    <!--<PageContainer></PageContainer>-->


    
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>


  
</template>

<script>
//import Hello from './components/Hello'

  //import IndexMenu from './components/IndexMenu'

  import PageContainer from './components/PageContainer'

  //import  '../otherlib/js/apps.min.js'
  //import {test5} from  '../otherlib/js/test.js'

export default {
  name: 'app',
  components: {
    PageContainer
  }
}
</script>

<style>
  /*@import '../otherlib/css/jquery-ui.min.css';
  @import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');
  @import '../otherlib/css/animate.min.css';
  @import '../otherlib/css/style.min.css';
  @import '../otherlib/css/style-responsive.min.css';
  @import '../otherlib/css/orange.css';
  @import '../otherlib/css/font-awesome.min.css';*/

</style>
