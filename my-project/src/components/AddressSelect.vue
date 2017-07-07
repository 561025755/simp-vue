<template>
  <div>
    <div class="form-group">
      <select v-model="ProvinceId" class="form-control input-validation-error" data-val="true" data-val-number="字段 省份 必须是一个数字。" data-val-range="请选择省份。" data-val-range-max="" data-val-range-min="1" data-val-required="请填写 'Province Id'。" id="ProvinceId" name="ProvinceId" aria-required="true" aria-describedby="ProvinceId-error" aria-invalid="true">
        <option value="0">选择省份</option>
        <option :value="item.Id" v-for="item in Provinces">
          {{ item.Name }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <select v-model="CityId" class="form-control input-validation-error" data-val="true" data-val-number="字段 城市 必须是一个数字。" data-val-range="请选择城市。" data-val-range-max="" data-val-range-min="1" data-val-required="请填写 'City Id'。" id="CityId" name="CityId" aria-required="true" aria-describedby="CityId-error" aria-invalid="true">
        <option value="0" selected="selected">选择城市</option>
        <option :value="item.Id" v-for="item in Citys">
          {{ item.Name }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <select v-model="DistrictId" class="form-control input-validation-error" data-val="true" data-val-number="字段 区/县 必须是一个数字。" data-val-range="请选择区/县。" data-val-range-max="" data-val-range-min="1" data-val-required="请填写 'District Id'。" id="DistrictId" name="DistrictId" aria-required="true" aria-describedby="DistrictId-error" aria-invalid="true">
        <option value="0" selected="selected">选择区/县</option>
        <option :value="item.Id" v-for="item in Districts">
          {{ item.Name }}
        </option>
      </select>
    </div>
    
  </div>
</template>
<script>
  import axios from 'axios'

export default {
    name: 'AddressSelect',
    props: ['parentmodel'],
    data() {
      return {
        ProvinceId: 0,
        CityId: 0,
        DistrictId: 0,
        Provinces: null,
        Citys: null,
        Districts: null
      };
    },
    created: function () {

      this.parentmodel.CityId = 1;

      var vue = this;
      axios.get('http://localhost:8000/api/ApiAgent/GetRegionsByParentId?parentid=0')
        .then(function (response) {
          vue.Provinces = response.data;
        })
        .catch(function (response) {
          console.log(response);
        });
    },
    watch: {
      ProvinceId: function (newdata) {
        this.CityId = 0;
        this.parentmodel.ProvinceId = newdata;

        var vue = this;
        axios.get('http://localhost:8000/api/ApiAgent/GetRegionsByParentId?parentid=' + newdata)
          .then(function (response) {
            vue.Citys = response.data;
          });
      },
      CityId: function (newdata) {
        this.DistrictId = 0;
        this.parentmodel.CityId = newdata;

        var vue = this;
        axios.get('http://localhost:8000/api/ApiAgent/GetRegionsByParentId?parentid=' + newdata)
          .then(function (response) {
            vue.Districts = response.data;
          });
      },
      DistrictId: function (newdata) {
        this.parentmodel.DistrictId = newdata;
      }
    },

    //methods: function () {

    //  //GetProvinces: function() {
    //  //  var Provinces = null;
    //  //  axios.get('http://localhost:8000/api/ApiAgent/GetRegionsByParentId?parentid=0')
    //  //  .then(function (response) {
    //  //    Provinces = response.data;
    //  //  })
    //  //  .catch(function (response) {
    //  //    console.log(response);
    //  //    });

    //  //  return Provinces;
    //  //}
    //}
}
</script>

