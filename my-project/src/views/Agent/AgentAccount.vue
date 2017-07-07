<template>
  <div>
    <div class="table-responsive">
      <table class="table table-email">
        <thead><tr><th><a href="/Agent/Account/19?Column=UserName&amp;Direction=Ascending">用户名称</a></th><th><a href="/Agent/Account/19?Column=Email&amp;Direction=Ascending">邮箱地址</a></th><th>状态</th><th></th><th></th></tr></thead>
        <tbody>
          <tr class="gridrow">
            <td>销售五</td>
            <td>saler5@s.cn</td>
            <td>
              <i class="fa fa-check-square text-success" data-toggle="tooltip" data-placement="right" data-original-title="有效"></i>
            </td>
            <td><a href="/Agent/EditAccount/71?agentId=19" class="btn btn-xs btn-warning">编辑</a></td>
            <td>
              <a class="btn btn-xs btn-danger" href="javascript:removeItem(71)">删除</a>

            </td>
          </tr>
          <tr class="gridrow_alternate">
            <td>销售四</td>
            <td>saler4@s.cn</td>
            <td>
              <i class="fa fa-check-square text-success" data-toggle="tooltip" data-placement="right" data-original-title="有效"></i>
            </td>
            <td><a href="/Agent/EditAccount/70?agentId=19" class="btn btn-xs btn-warning">编辑</a></td>
            <td>
              <a class="btn btn-xs btn-danger" href="javascript:removeItem(70)">删除</a>

            </td>
          </tr>
          <tr class="gridrow">
            <td>销售3</td>
            <td>saler3@s.cn</td>
            <td>
              <i class="fa fa-check-square text-success" data-toggle="tooltip" data-placement="right" data-original-title="有效"></i>
            </td>
            <td><a href="/Agent/EditAccount/69?agentId=19" class="btn btn-xs btn-warning">编辑</a></td>
            <td>
              <a class="btn btn-xs btn-danger" href="javascript:removeItem(69)">删除</a>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="email-footer clearfix"><span class="hidden-sm hidden-xs">当前 1项 - 3项， 共 3 项</span><ul class="pagination m-t-0 m-b-0 pull-right"></ul></div>
  </div>
</template>
<script>
  export default {
    //props: ['parentmodel'],
  //computed: {
  //  model: function () {
  //    return this.parentmodel;
  //  }
  //}
}
</script>


