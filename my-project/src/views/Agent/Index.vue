<template>
  <div class="content" id="content">
    <h1 class="page-header">

      代理商列表 <small>点击 <router-link to="/pagecontainer/agentcreate">这里</router-link>   <!--<a href="/xxx">这里</a>--> 创建一个代理商</small>

    </h1>


    <div class="row">
      <!-- begin col-12 -->
      <div class="col-md-12 ui-sortable">
        <!-- begin panel -->
        <div class="panel panel-inverse">
          <div class="panel-heading">
            <div class="panel-heading-btn">
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-repeat"></i></a>
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
              <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
            </div>
            <h4 class="panel-title">列表视图</h4>
          </div>
          <div class="panel-body">
            <form action="/Agent" method="get">
              <div class="row">
                <div class="col-sm-12">
                  <div class="input-group">
                    <input class="form-control" v-model="searchName" placeholder="代理商名称关键字" type="text">
                    <div class="input-group-btn">
                      <input type="submit" class="btn btn-inverse" value="搜索">
                    </div>
                  </div>
                </div>
              </div>

              <input name="hiddenToken" type="hidden" value="60495F245214DF2164F84EF99BBFD4">

            </form>




            <div class="table-responsive">
              <table class="table table-email">
                <thead>
                  <tr>
                    <th><a href="/Agent?Column=Company&amp;Direction=Ascending">公司名称</a></th>
                    <th><a href="/Agent?Column=LegalPerson&amp;Direction=Ascending">法人代表</a></th>
                    <th><a href="/Agent?Column=BusinessLicence&amp;Direction=Ascending">营业执照</a></th>
                    <th><a href="/Agent?Column=Phone&amp;Direction=Ascending">联系电话</a></th>
                    <th><a href="/Agent?Column=CreateTime&amp;Direction=Ascending">创建时间</a></th>
                    <th class="sort_asc"><a href="/Agent?Direction=Descending"></a></th>
                    <th class="sort_asc"><a href="/Agent?Direction=Descending"></a></th>
                  </tr></thead>
                <tbody>
                  <tr v-for="trdata in PageData.PageModel._dataSource">
                    <td>{{trdata.Company}}</td>
                    <td>{{trdata.LegalPerson}}</td>
                    <td>{{trdata.BusinessLicence}}</td>
                    <td>{{trdata.Phone}}</td>
                    <td>2015-02-03</td>
                    <td> <router-link to="/pagecontainer/agentcreate" class="btn btn-xs btn-success">配置代理媒体</router-link> </td>
                    <td> 
                      <!--<router-link to="/pagecontainer/agentdetails" class="btn btn-xs btn-success">详情</router-link>--> 
                      <!--<router-link :to="{ path:'/pagecontainer/agentdetails',params: { id: 123 }}" class="btn btn-xs btn-success">详情</router-link>-->

                      <router-link :to="{ name: 'agentdetails', query: { id: trdata.Id }}" class="btn btn-xs btn-success">详情</router-link>

                      <!--<router-link :to="{ path: '/pagecontainer/agentdetails', params: { id: 123 }}">详情</router-link>-->

                      <router-link to="/pagecontainer/agentcreate" class="btn btn-xs  btn-warning">编辑</router-link> 
                      <router-link to="/pagecontainer/agentcreate" class="btn btn-xs  btn-danger">删除</router-link> 
                    </td>

                  </tr>
                </tbody>
              </table>

              <PageTableFooter :parentmodel="PageData.PageModel"  @gopage="changegopage"></PageTableFooter>
            </div>
            
          </div>
        </div>
        <!-- end panel -->
      </div>
      <!-- end col-12 -->
    </div>

  </div>
</template>

<script type="text/javascript">
   import axios from 'axios'
  import PageTableFooter from '../../components/PageTableFooter.vue'


    export default {
    name: 'Index',
    data: function () {
      var pageData = {
        PageModel: {
          _dataSource: null
        }
      };
      return { PageData: pageData,searchName:null,GoPage:1  };
    },
    created: function () {
      this.reload();
    },
    components: {
      PageTableFooter
    },
    methods: {
      reload: function () {
        var vue = this;
        this.searchName = '';
        axios.get('http://localhost:8000/api/ApiAgent/Page?page=' + this.GoPage + '&searchName=' + this.searchName, {test:123})
          .then(function (response) {
            vue.PageData = response.data;
          })
      },
      changegopage: function (gopage) {
        this.GoPage = gopage;
        this.reload();
      }
    }
      
    }
</script>

<style>
</style>    