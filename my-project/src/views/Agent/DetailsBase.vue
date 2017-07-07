<template>
  <table class="table table-profile">
    <thead>
      <tr>

        <th colspan="2">
          <h4>{{model.Company}} <small>（代理商）</small></h4>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="highlight">
        <td class="field"><label for="Address">经营地址</label></td>
        <td>{{model.Address}}</td>
      </tr>

      <tr>
        <td class="field"><label for="LegalPerson">法人代表</label></td>
        <td><i class="fa fa-user"></i> {{model.LegalPerson}}</td>
      </tr>
      <tr>
        <td class="field"><label for="BusinessLicence">统一社会信用代码</label></td>
        <td><i class="fa fa-shield"></i>  {{model.BusinessLicence}}</td>
      </tr>
      <tr>
        <td class="field"><label for="Phone">电话</label></td>
        <td><i class="fa fa-phone-square"></i>  {{model.Phone}}</td>
      </tr>

      <tr>
        <td class="field"><label for="Fax">传真</label></td>
        <td><i class="fa fa-fax"></i> {{model.Fax}} </td>
      </tr>
      <tr>
        <td class="field"><label for="PostCode">邮编</label></td>
        <td><i class="fa fa-envelope"></i>  {{model.PostCode}} </td>
      </tr>
      <tr>
        <td class="field"><label for="WebSite">公司网站</label></td>
        <td><i class="fa fa-globe"></i>{{model.WebSite}} </td>
      </tr>

      <tr>
        <td class="field"><label for="RegisterDate">注册日期</label></td>
        <td>
          <i class="fa fa-calendar"></i> {{model.RegisterDate}}
        </td>
      </tr>
      <tr>
        <td class="field"><label for="RegisterCapital">注册资金</label></td>
        <td>
          <i class="fa fa-rmb"></i> {{model.RegisterCapital}}
        </td>
      </tr>

      <tr class="divider">
        <td colspan="2"></td>
      </tr>

      <tr>
        <td class="field"><label for="DepositBank">开户银行</label></td>
        <td>
          <i class="fa fa-bank"></i> {{model.DepositBank}}
        </td>
      </tr>
      <tr>
        <td class="field"><label for="Account">银行卡账号</label></td>
        <td>
          <i class="fa fa-credit-card"></i> {{model.Account}}
        </td>
      </tr>
      <tr class="divider">
        <td colspan="2"></td>
      </tr>
      <tr>
        <td class="field"><label for="UpdateTime">更新时间</label></td>
        <td>
          <i class="fa fa-clock-o"></i> {{model.UpdateTime}}
        </td>
      </tr>
      <tr>
        <td class="field"><label for="CreateTime">创建时间</label></td>
        <td>
          <i class="fa fa-clock-o"></i> {{model.CreateTime}}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    props: ['parentmodel'],
  computed: {
    model: function () {
      return this.parentmodel;
    }
  }
  //create: function () {
  //  this.model = this.parentmodel;
  //}
}
</script>



