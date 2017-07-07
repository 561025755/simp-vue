<template>
  <div class="content" id="content">

      <!-- begin page-header -->

      <h1 class="page-header">

        创建代理商 <small>点击 <router-link to="/pagecontainer/agentindex">这里</router-link>  回到列表</small>

      </h1><!-- end page-header -->
      <!-- begin row -->

      <div class="row">
        <!-- begin col-12 -->
        <div class="col-md-12 ui-sortable">
          <!-- begin panel -->
          <div class="panel panel-default">
            <div class="panel-heading">
              <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-repeat"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
              </div>
              <h4 class="panel-title">创建表单</h4>
            </div>
            <div class="panel-body">

              <form id="form1" action="/Agent/Create" method="post" @submit.prevent="submit">
                <input name="__RequestVerificationToken" type="hidden" value="h75C0E49Im4jzzmvxgC_xtZdWr1QlO5a1j-L9B0zgJjZsV0a0dgo5O5sQ2kE9mHB8wia2lyiN0CyznP5utvdfjzbUQsJysHWDNg4TzuxEG5UYdsF73dXx3bFemNliM2k0">                    <div class="form-group">
                  <div class="row">
                    <div class="col-sm-6">
                      <label>
                        <label for="Company">公司名称</label> <b class="text-warning">*</b>  
                      </label>
                      <div>
                          <input class="form-control" v-validate="'required'" name="company" type="text" v-model="model.Company">
                          <p class="text-danger" v-if="errors.has('company')">{{ errors.first('company') }}</p>
                      </div>



                    </div>
                    <div class="col-sm-6">
                      <label>
                        <label for="Address">经营地址</label> <b class="text-warning">*</b>
                      </label>
                      <div class="row">
                        <div class="form-inline col-sm-6">
                          <AddressSelect :parentmodel="model"></AddressSelect>
                        </div>
                        <div class="col-sm-6">
                          <input class="form-control" data-val="true" data-val-length="公司经营地址不得少于4个字。" data-val-length-max="30" data-val-length-min="4" data-val-required="请填写公司经营地址。" id="Address" name="Address" placeholder="填写详细地址" type="text"  >
                          <span class="field-validation-valid" data-valmsg-for="Address" data-valmsg-replace="true"></span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-sm-6">
                      <label>
                        <label for="LegalPerson">法人代表</label> <b class="text-warning">*</b>
                      </label>
                      <div>
                        <input class="form-control" data-val="true" data-val-regex="公司法人代表名称不得少于2个字。" data-val-regex-pattern="^([一-龥]+){2,10}$" data-val-required="请填写公司法人代表名称。" id="LegalPerson" name="LegalPerson" placeholder="填写公司法人名称" type="text" v-model="model.LegalPerson">
                        <span class="field-validation-valid" data-valmsg-for="LegalPerson" data-valmsg-replace="true"></span>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label>
                        <label for="BusinessLicence">统一社会信用代码</label> <b class="text-warning">*</b>
                      </label>
                      <div>
                        <input v-model="model.BusinessLicence" class="form-control" data-val="true" data-val-regex="请正确填写统一社会信用代码。" data-val-regex-pattern="^[a-zA-Z0-9]{2}[0-9]{6}[a-zA-Z0-9]{10}$" data-val-required="请填写统一社会信用代码。" id="BusinessLicence" name="BusinessLicence" placeholder="填写统一社会信用代码，格式：	91010005MA61Z12858" type="text">
                        <span class="field-validation-valid" data-valmsg-for="BusinessLicence" data-valmsg-replace="true"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-sm-6">
                      <label>
                        <label for="Phone">电话</label> <b class="text-warning">*</b>
                      </label>
                      <div>
                        <input v-model="model.Phone" class="form-control" data-val="true" data-val-regex="请填写正确的联系电话。" data-val-regex-pattern="^((0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8})|(0[0-9]{2}-[0-9]{8})|(0[0-9]{3}-[0-9]{7})$" data-val-required="请填写联系电话。" id="Phone" name="Phone" placeholder="填写联系电话，座机号码在区号后加“-”" type="text">
                        <span class="field-validation-valid" data-valmsg-for="Phone" data-valmsg-replace="true"></span>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label>
                        <label for="Fax">传真</label>
                      </label>
                      <div>
                        <input v-model="model.Fax" class="form-control" data-val="true" data-val-regex="请填写正确的传真。" data-val-regex-pattern="^([0-9]{3,4}-)?[0-9]{7,8}$" id="Fax" name="Fax" type="text"  >
                        <span class="field-validation-valid" data-valmsg-for="Fax" data-valmsg-replace="true"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-sm-6">
                      <label>
                        <label for="PostCode">邮编</label>
                      </label>
                      <div>
                        <input v-model="model.PostCode"  class="form-control" data-val="true" data-val-regex="请填写正确的邮编。" data-val-regex-pattern="^[1-9][0-9]{5}$" id="PostCode" name="PostCode" type="text"  >
                        <span class="field-validation-valid" data-valmsg-for="PostCode" data-valmsg-replace="true"></span>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label>
                        <label for="WebSite">公司网站</label>
                      </label>
                      <div>
                        <input v-model="model.WebSite" class="form-control" data-val="true" data-val-regex="请填写正确的公司网址。" data-val-regex-pattern="((http|https)://)?(www.)?[a-z0-9\.]+(\.(com|net|cn|com\.cn|com\.net|net\.cn))(/[^\s\n]*)?" id="WebSite" name="WebSite" type="text"  >
                        <span class="field-validation-valid" data-valmsg-for="WebSite" data-valmsg-replace="true"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-sm-6">
                      <label>
                        <label for="RegisterDate">注册日期</label> <b class="text-warning">*</b>
                      </label>
                      <div>
                        <div class="input-group date">
                          <input  v-model="model.RegisterDate" class="form-control" data-val="true" data-val-date="字段 注册日期 必须是日期。" data-val-required="请填写公司注册日期" datepicker="datepicker" id="RegisterDate" name="RegisterDate" type="text"  >
                          <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                        </div>
                        <span class="field-validation-valid" data-valmsg-for="RegisterDate" data-valmsg-replace="true"></span>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <label>
                        <label for="RegisterCapital">注册资金</label> <b class="text-warning">*</b>
                      </label>
                      <div>
                        <input  v-model="model.RegisterCapital" class="form-control" data-val="true" data-val-number="字段 注册资金 必须是一个数字。" data-val-range="公司注册资金不得小于1。" data-val-range-max="" data-val-range-min="1" data-val-required="请填写公司注册资金" id="RegisterCapital" name="RegisterCapital" placeholder="填写公司注册资金" type="text"  >
                        <span class="field-validation-valid" data-valmsg-for="RegisterCapital" data-valmsg-replace="true"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-sm-6">
                      <label>
                        <label for="DepositBank">开户银行</label> <b class="text-warning">*</b>
                      </label>
                      <div>
                        <input  v-model="model.DepositBank"  class="form-control" data-val="true" data-val-length="公司开户银行不得少于4个字。" data-val-length-max="30" data-val-length-min="4" data-val-required="请填写公司开户银行" id="DepositBank" name="DepositBank" placeholder="填写公司开户银行" type="text"  >
                        <span class="field-validation-valid" data-valmsg-for="DepositBank" data-valmsg-replace="true"></span>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <label>
                        <label for="Account">银行卡账号</label> <b class="text-warning">*</b>
                      </label>
                      <div>
                        <input v-model="model.Account" class="form-control" data-val="true" data-val-regex="请填写正确的公司银行账户。" data-val-regex-pattern="^([1-9]{1})([0-9]{14}|[0-9]{18})$" data-val-required="请填写公司银行账户" id="Account" name="Account" placeholder="填写银行卡账号" type="text"  >
                        <span class="field-validation-valid" data-valmsg-for="Account" data-valmsg-replace="true"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <input type="submit" class="btn btn-sm btn-success" value="创建">
                <input type="reset" class="btn btn-sm btn-default" value="重置">

              </form>
            </div>
          </div>
          <!-- end panel -->
        </div>
        <!-- end col-12 -->
      </div>


  </div>
</template>

<script type="text/javascript">

  import '../../../otherlib/datepicker/datepicker.js'
  import AddressSelect from '../../components/AddressSelect.vue'

  import axios from 'axios'
 

    export default {
    name: 'Create',
    data: function () {
      return {
        model: {
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
    components: {
      AddressSelect
    },
    mounted: function () {

    $("#RegisterDate").datepickernew({ format: "yyyy-mm-dd", todayHighlight: true, autoclose: true });

      var model = this.model;
      $("#RegisterDate").change(function () {
        model.RegisterDate = $(this).val();
      });
    },
    methods: {
      submit: function () {
        console.log(this);
        this.$validator.validateAll().then(function (success) {
          if (!success) return;

          alert("All good")
        })
        var data=this.model;
  /*
        axios.post('http://localhost:8000/api/ApiAgent/CreateAgent', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (response) {
            console.log(response);
          });*/

      }
    }
  }

</script>

<style scoped>

  @import '../../../otherlib/datepicker/datepicker3.css';

</style>    