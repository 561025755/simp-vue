<template>
  <div class="content" id="content">
    <!-- begin page-header -->

    <h1 class="page-header"></h1><!-- end page-header -->
    <!-- begin row -->
    <!-- begin row -->
    <div class="row">
      <!-- begin col-3 -->
      <div class="col-md-3 col-sm-6">
        <div class="widget widget-stats bg-grey-600">
          <div class="stats-icon"><i class="fa fa-road"></i></div>
          <div class="stats-info">
            <h4>地铁线路</h4>
            <p>3</p>
          </div>
          <div class="stats-link">
            <a href="javascript:showSource();">查看详情 <i class="fa fa-arrow-circle-o-right"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="widget widget-stats bg-pink">
          <div class="stats-icon"><i class="fa fa-exchange"></i></div>
          <div class="stats-info">
            <h4>站台数量</h4>
            <p>103</p>
          </div>
          <div class="stats-link">
            <a href="javascript:getCityDetail(2);">查看详情 <i class="fa fa-arrow-circle-o-right"></i></a>
          </div>
        </div>
      </div>
      <!-- end col-3 -->
      <!-- begin col-3 -->
      <div class="col-md-3 col-sm-6">
        <div class="widget widget-stats bg-orange">
          <div class="stats-icon"><i class="fa fa-magnet"></i></div>
          <div class="stats-info">
            <h4>可售资源</h4>
            <p>7756</p>
          </div>
          <div class="stats-link">
            <a href="javascript:getCityDetail(3);">查看详情 <i class="fa fa-arrow-circle-o-right"></i></a>
          </div>
        </div>
      </div>
      <!-- end col-3 -->
      <!-- begin col-3 -->
      <!-- end col-3 -->
      <!-- begin col-3 -->
      <div class="col-md-3 col-sm-6">
        <div class="widget widget-stats bg-red">
          <div class="stats-icon"><i class="fa fa-map-marker"></i></div>
          <div class="stats-info">
            <h4>售卖次数</h4>
            <p>535</p>
          </div>
          <div class="stats-link">
            <a href="javascript:showSaleDetail();">查看详情 <i class="fa fa-arrow-circle-o-right"></i></a>
          </div>
        </div>
      </div>
      <!-- end col-3 -->
    </div>
    <!-- end row -->
    <!-- begin row -->
    <div class="row">
      <div class="col-md-8 ui-sortable">
        <div class="panel panel-inverse">
          <div class="panel-heading">
            <div class="panel-heading-btn">
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-repeat"></i></a>
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
            </div>
            <h4 class="panel-title">上刊日历</h4>
          </div>
          <div class="panel-body">
            <div id="container">
              <div class="row" id="line-container">
              </div>
              <div id="calender"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 ui-sortable">
        <div class="panel panel-inverse">
          <div class="panel-heading">
            <div class="panel-heading-btn">
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-repeat"></i></a>
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
            </div>
            <h4 class="panel-title">消息通知</h4>
          </div>
          <div class="panel-body height-500">
            <ul class="list-group list-group-lg no-radius list-email" id="messagelist"></ul>
            <div class="wrapper bg-silver-lighter clearfix hidden" id="messagePaginate">
              <div class="btn-group pull-right">
                <button class="btn btn-white btn-sm" onclick="showMessage(0)">
                  <i class="fa fa-chevron-left"></i>
                </button>
                <button class="btn btn-white btn-sm" onclick="showMessage(5)">
                  <i class="fa fa-chevron-right"></i>
                </button>
              </div>
              <div class="m-t-5" id="messageCount"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- end row -->

    <div class="modal fade" id="cityresourcediv">
      <div class="modal-dialog">

        <div class="panel">
          <ul class="nav nav-tabs"></ul>
          <div class="tab-content">
          </div>
        </div>

      </div>
    </div>
    <div class="modal fade" id="modal-alert">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title">通知详情</h4>
          </div>
          <div class="modal-body">

            <div id="carousel-post" class="carousel slide" data-ride="">
              <!-- begin carousel-indicators -->
              <ol class="carousel-indicators"></ol>
              <!-- end carousel-indicators -->
              <!-- begin carousel-inner -->
              <div class="carousel-inner">
              </div>
              <!-- end carousel-inner -->
              <!-- begin carousel-control -->
              <a class="left carousel-control" href="#carousel-post" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              </a>
              <a class="right carousel-control" href="#carousel-post" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              </a>
              <!-- end carousel-control -->
            </div>
            <div class="post-info">
              <h4 class="post-title"></h4>
              <div class="post-by">
                Posted By <a href="#">admin</a> <span class="divider">|</span>  <span class="divider">|</span> 2 Comments
              </div>
              <div class="post-desc">

              </div>
            </div>
            <div id="Files" style="border-top: 1px dashed #CCCCCC;"></div>
          </div>

        </div>
      </div>
    </div>





    <!-- end row -->

    <input type="hidden" id="hdController" value="Home">
    <input type="hidden" id="hdAction" value="Index">
  </div>
</template>

<script type="text/javascript">
    export default {
        name: 'Index',
    }
</script>

<style>
</style>    