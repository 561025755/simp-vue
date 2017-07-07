<template>
  <div id="page-container" class="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar in">
    <!-- begin #header -->
    <IndexMenu></IndexMenu>
    <!-- end #header -->
    <!-- begin #sidebar -->
    <Sidebar></Sidebar>
    <div class="sidebar-bg"></div>
    <!-- end #sidebar -->
    <!-- begin #content -->

    <router-view></router-view>



    
    <!-- end #content -->
    <!-- begin scroll to top btn -->
    <a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"><i class="fa fa-angle-up"></i></a>
    <!-- end scroll to top btn -->
  </div>

</template>
<script>
  import IndexMenu from './IndexMenu'
  import Sidebar from './Sidebar'

export default {
    name: 'PageContainer',
    components: {
      IndexMenu,
      Sidebar
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .a {
  
  }
</style>
