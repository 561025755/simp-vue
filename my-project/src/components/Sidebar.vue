<template>
  
  <div id="sidebar" class="sidebar">
    <!-- begin sidebar scrollbar -->
    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%;">
      <div data-scrollbar="true" data-height="100%" data-init="true" style="overflow: hidden; width: auto; height: 100%;">
        <!-- begin sidebar user -->
        <ul class="nav">
          <li class="nav-profile">
            <div class="info row">
              <div class="col-sm-4"><i class="fa  fa-desktop fa-3x"></i></div><div class="col-sm-8"> 运营支撑系统 <small>VERSION:2.0</small></div>
            </div>
          </li>
        </ul>
        <!-- end sidebar user -->
        <!-- begin sidebar nav -->
        <ul class="nav">
          <li class="nav-header">功能导航</li>



          <li class=" has-sub " v-for="group in LinkGroups">

            <a href="javascript:;">
              <b class="caret pull-right"></b><i class="fa fa-leaf"></i>

              <span>{{group.linktext}} </span>
            </a>
            <ul class="sub-menu">
              
              <li class=" " v-for="link in group.children">
                <router-link :to="GetUrl(link)">{{link.linktext}}</router-link>
              </li>
            </ul>
          </li>



          <li class="has-sub ">

            <a href="javascript:;">
              <b class="caret pull-right"></b><i class="fa fa-dashboard"></i>

              <span>我的状态面板</span>
            </a>
            <ul class="sub-menu">
              <li class="  active">

                <a href="/">概要视图</a>
              </li>
              <li class=" ">

                <a href="/OwnReport">我的KPI</a>
              </li>
              <li class=" ">

                <a href="/MetroCreditRecord/Demo3">我的信用记录</a>
              </li>
            </ul>
          </li>
          <li class=" has-sub ">

            <a href="javascript:;">
              <b class="caret pull-right"></b><i class="fa fa-leaf"></i>

              <span>地铁灯箱资源 <span class="label label-theme m-l-5">NEW</span></span>
            </a>
            <ul class="sub-menu">
              <li class=" ">

                <router-link to="/PageContainer/AgentIndex">代理商管理</router-link>
              </li>
              <li class=" ">

                <a href="/MetroCalcuatePrice">投放价格测算</a>
              </li>
              <li class=" ">

                <a href="/MetroBudgetProgram">客户预算倒推</a>
              </li>
              <li class=" ">

                <a href="/MetroPublicity" target="_blank">媒体介绍与推广 <i class="fa fa-paper-plane text-theme m-l-5"></i></a>
              </li>
            </ul>
          </li>
          <li class=" has-sub ">

            <a href="javascript:;">
              <b class="caret pull-right"></b><i class="fa fa-group "></i>

              <span>我的地铁灯箱客户</span>
            </a>
            <ul class="sub-menu">
              <li class=" ">

                <a href="/MetroOwnCustomer">客户</a>
              </li>
              <li class=" ">

                <a href="/MetroOwnContact">联系人</a>
              </li>
            </ul>
          </li>
          <li class=" has-sub ">

            <a href="javascript:;">
              <b class="caret pull-right"></b><i class="fa fa-jpy"></i>

              <span>地铁灯箱媒体销售</span>
            </a>
            <ul class="sub-menu">
              <li class=" ">

                <a href="/MetroUpOwnLightOrder">订单管理</a>
              </li>
              <li class=" ">

                <a href="/MetroOwnAgreement">确认单管理</a>
              </li>
              <li class=" ">

                <a href="/MetroUpOwnDemand">上刊需求</a>
              </li>
              <li class=" ">

                <a href="/MetroOwnScreenChange">换画单管理</a>
              </li>
            </ul>
          </li>
          <li class=" has-sub ">

            <a href="javascript:;">
              <b class="caret pull-right"></b><i class="fa fa-jpy"></i>

              <span>地铁灯箱公益销售</span>
            </a>
            <ul class="sub-menu">
              <li class=" ">

                <a href="/MetroOwnCommonwealOrder">公益订单管理</a>
              </li>
              <li class=" ">

                <a href="/MetroOwnAgreement">公益确认单管理</a>
              </li>
            </ul>
          </li>



          <!-- begin sidebar minify button -->
          <li><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i class="fa fa-angle-double-left"></i></a></li>
          <!-- end sidebar minify button -->
        </ul>
        <!-- end sidebar nav -->
      </div><div class="slimScrollBar ui-draggable" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; height: 117.275px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
    </div>
    <!-- end sidebar scrollbar -->
  </div>
 
</template>
<script>
 // import IndexMenu from './IndexMenu'

  //import router from '../router.js'

  import { UIApp2 } from '../../otherlib/js/apps.min.js'


export default {
    name: 'Sidebar',
    data: function () {
      return { LinkGroups: JSON.parse(localStorage.getItem("sidebar")) };
    },
    mounted: function () {
      UIApp2.init();
    },
    methods: {
      GetUrl: function (link) {
        return "/pagecontainer/" + link.path;
      }
    }


}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
