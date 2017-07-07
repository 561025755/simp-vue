<template>

  <div id="header" class="header navbar navbar-default navbar-fixed-top">
    <!-- begin container-fluid -->
    <div class="container-fluid">
      <!-- begin mobile sidebar expand / collapse button -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed navbar-toggle-left" data-click="sidebar-minify">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <button type="button" class="navbar-toggle" data-click="sidebar-toggled">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">OOH Force平台</a>
      </div>
      <!-- end mobile sidebar expand / collapse button -->



      <ul class="nav navbar-nav navbar-left">

        <li class="dropdown navbar-user">
          <a class="dropdown-toggle p-r-0 p-b-0  " href="/Home/ChangeMediaType?M=1">
            <i class="fa  fa-video-camera fa-2x"></i>
            <span class="hidden-xs">
              东方天呈
            </span>
          </a>
        </li>
        <li class="dropdown navbar-user">
          <a class="dropdown-toggle p-r-0 p-b-0  text-success" href="/Home/ChangeMediaType?M=2">
            <i class="fa  fa-lightbulb-o fa-2x"></i>
            <span class="hidden-xs">
              地铁灯箱
            </span>
          </a>
        </li>

      </ul>

      <!-- begin header navigation right -->
      <ul class="nav navbar-nav navbar-right">

        <li class="dropdown navbar-user">
          <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
            <img src="" alt="">
            <span class="hidden-xs">Hi,您好！<b> {{UserName}}</b></span>
          </a>
          <ul class="dropdown-menu animated fadeInLeft">
            <li class="arrow"></li>
            <li><a href="/UserInfo/ChangePassword">修改密码</a></li>
            <li class="divider"></li>
            <li><a href="/UserInfo/ChangeUserInfo">编辑个人资料</a></li>
            <li class="divider"></li>
            <li><router-link to="/Login">注销当前登录</router-link></li>
          </ul>
        </li>
      </ul>
      <!-- end header navigation right -->
    </div>
    <!-- end container-fluid -->
  </div>

</template>
<script>
export default {
    name: 'IndexMenu',
  data () {
    return {
      UserName: localStorage.getItem('username')
    }
  }
}
</script>

