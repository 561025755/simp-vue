<template>
  <div class="content" id="content">

    <!-- begin page-header -->

    <h1 class="page-header">

      代理商详情 <small>点击 <router-link to="/pagecontainer/agentindex">这里</router-link>  回到列表</small>

    </h1><!-- end page-header -->
    <!-- begin row -->

    <div class="row">

      <div class="col-md-2">
        <div class="hidden-sm hidden-xs">

          <ul class="nav nav-pills nav-stacked nav-inbox">
            <li class="active">
              <a href="#modal-billorder-creation" data-toggle="modal">
                <i class="fa fa-retweet fa-fw m-r-5"></i> 代理商编辑
              </a>
            </li>
            <li><a href="/Agent/Edit/19"><i class="fa fa-pencil-square fa-fw m-r-5"></i> 编辑基本信息</a></li>
            <li><a href="/Agent/Credentials/19"><i class="fa fa-upload fa-fw m-r-5"></i> 上传证件档案</a></li>
            <li><a href="/Agent/AddAccount/19"><i class="fa fa-user fa-fw m-r-5"></i> 新增用户账号</a></li>
            <li><a href="/Agent/Delete/19"><i class="fa fa-trash-o fa-fw m-r-5"></i> 删除该代理商</a></li>

          </ul>
        </div>
      </div>

      <!-- begin col-12 -->
      <div class="col-md-10 ui-sortable">

        <div class="email-btn-row hidden-xs">
          <!--<a href="/Agent/Details/19" class="btn btn-sm btn-default"><i class="fa fa-file-text-o m-r-5"></i> 代理商信息</a>-->
          <router-link :to="{ name: 'agentdetailsbase'}" class="btn btn-sm btn-default"><i class="fa fa-file-text-o m-r-5"></i>代理商信息</router-link>


          <a href="/Agent/CredentialsDetails/19" class="btn btn-sm btn-default"><i class="fa fa-suitcase m-r-5"></i> 代理商证件</a>
          <!--<a href="/Agent/Account/19" class="btn btn-sm btn-default"><i class="fa fa-users m-r-5"></i> 代理商账号</a>-->

          <router-link :to="{ name: 'agentaccount'}" class="btn btn-sm btn-default"><i class="fa fa-users m-r-5"></i>代理商账号</router-link>
        </div>

        <!-- begin panel -->
        <div class="panel panel-info">

          <div class="panel-body ">
            <router-view :parentmodel="model"></router-view>
          </div>

        </div>

        <!-- end panel -->
      </div>
      <!-- end col-12 -->

     

      <form action="/Agent/DeleteAccount" id="remove-account-form" method="post">
        <input name="__RequestVerificationToken" type="hidden" value="LTobov3xwCMuHLMCIXQ0E0XcXwFEr3IFsmMBwcq3MyzASQ3VkNGc61dMBPeiZA8B-k-KUwxmYZTjvBMOkfc_x2kQSuwVJtt_xZMM9eJiaWkz7qWfFUD_NPGVQvJjnd-k0"><input id="Id" name="Id" type="hidden" value="19"><input id="AgentId" name="AgentId" type="hidden" value="19">
        <input name="hiddenToken" type="hidden" value="CB7768EE7272BAE8A2481013C607E2A">

      </form>
    </div>


  </div>
</template>

<script type="text/javascript">


  import axios from 'axios'
  //import DetailsBase from 'DetailsBase.vue'

    export default {
    name: 'Create',
    data: function () {
      return {
        model: {
          Id: null,
          Company: null,
          LegalPerson: null,
          BusinessLicence: null,
          Phone: null,
          Fax: null,
          PostCode: null,
          WebSite: null,
          RegisterDate: null,
          RegisterCapital: null,
          DepositBank: null,
          Account: null,
          ProvinceId: null,
          CityId: null,
          DistrictId: null
        }
      };
    },
    created: function () {
      console.log(1232);
      console.log(this.$route.query);
      var id = this.$route.query.id;
      var self = this;
      axios.get('http://localhost:8000/api/ApiAgent/Get?Id=' + id)
        .then(function (response) {
          self.model = response.data;
          //console.log(vue.PageData);
        })
        .catch(function (response) {
          //console.log(response);
        });
    },
    methods: {

    }
  }

</script>
   