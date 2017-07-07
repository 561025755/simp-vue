<template>
  <div class="email-footer clearfix">
    <span class="hidden-sm hidden-xs">当前 {{model.FirstItem}}项 - {{model.LastItem}}项， 共 {{model.TotalItems}} 项</span>
  <ul :class="OperateClass">
    <li :class="ShouYeClass"><a v-on:click="ClikGoPage(1)">首页</a></li>
    <li :class="ShouYeClass"><a v-on:click="ClikGoPage(model.PageNumber-1)">上一页</a></li>
    <li :class="MoYeClass"><a v-on:click="ClikGoPage(model.PageNumber+1)">下一页</a></li>
    <li :class="MoYeClass"><a v-on:click="ClikGoPage(model.TotalPages)">末页</a></li>
   </ul>
  </div>
</template>
<script>
export default {
    name: 'tablepagefooter',
    props: ['parentmodel'],
  data () {
    return {
      model: {
        FirstItem: null,
        HasNextPage: false,
        HasPreviousPage: false,
        LastItem: null,
        PageNumber: null,
        PageSize: null,
        TotalItems: null,
        TotalPages: null,
      }
    }
    },
  computed: {
    OperateClass: function () {
      var before = 'pagination m-t-0 m-b-0 pull-right';
      if (this.model.HasPreviousPage || this.model.HasNextPage) {
        return before;
      }
      return before + ' hidden';
    },
    ShouYeClass: function () {
      if (this.model.HasPreviousPage)
        return '';
      return 'disabled';
    },
    MoYeClass: function () {
      if (this.model.HasNextPage)
        return '';
      return 'disabled';
    }
  },
  created: function () {
    this.model = this.parentmodel;
  },
  watch: {
    parentmodel: function (newparentmodel) {
      this.model = newparentmodel;
    },
    OperateClass: function (newOperateClass) {
  }
  },
  methods: {
    ClikGoPage: function (page) {
      if (page < 1 || page > this.model.TotalPages)
        return;

      this.$emit('gopage', page)
    }
  }
}
</script>

