<template>
    
    <div id="page-container" class="fade in">

      <div class="login bg-grey-900 animated fadeInDown">
        <!-- begin brand -->
        <div class="login-header">
          <div class="brand text-inverse">
            <span class="logo"></span> 用户登录
            <small>OOH Force平台</small>
          </div>
          <div class="icon">
            <i class="material-icons">lock</i>
          </div>
        </div>
        <!-- end brand -->
        <div class="login-content">
          <form @submit.prevent="submit" novalidate="novalidate">
            <input name="__RequestVerificationToken" type="hidden" value="LgNpiQFdRCmlypudzeNK7M-co5MUOVnZsT5I5yrnUZ2Vo2q8surGT0bx8572x5Y2LfmTU8INAycH5lW71DdafgEw8RJJf-U1cPqu7F7qY3U1">                    <div class="form-group m-b-20">
              <input  v-model="model.UserName" class="form-control input-lg without-border inverse-mode valid" data-val="true"   id="UserName" name="UserName" placeholder="邮箱地址/手机号码" type="text" >
              <span class="field-validation-valid" data-valmsg-for="EmailOrMobile" data-valmsg-replace="true"></span>
            </div>
            <div class="form-group m-b-20">
              <input v-model="model.Password" class="form-control input-lg without-border inverse-mode valid" data-val="true" id="Password" name="Password" placeholder="登录密码" type="password" >
              <span class="field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="true"></span>
            </div>
            <div class="form-group m-b-20">
              <input data-val="true" data-val-required="请填写 'Remember Me'。" id="RememberMe" name="RememberMe" type="checkbox" value="true"><input name="RememberMe" type="hidden" value="false"> <label for="RememberMe">记住这次登录</label>
            </div>
            <div class="login-buttons">
              <button type="submit" class="btn btn-info btn-block btn-lg">立即登录</button>
            </div>
          </form>
        </div>
      </div>

    </div>

 
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'Login',
    data: function () {
      return {
        model: {
          UserName: null,
          Password: null
        }
      };
    },
    methods: {
      submit: function () {
        var base = this;

        var data = this.model;

        axios.post('http://localhost:8000/api/ApiLogin/Login', { userName: base.model.UserName, password: base.model.Password })
          .then(function (response) {
            var result = response.data;
            if (result.success) {
              localStorage.setItem("token", result.token);
              localStorage.setItem("groups", result.groups);
              localStorage.setItem("username", result.username);

              //location.href = "http://localhost:8080";

              //base.$router.go('/pagecontainer');
              base.$router.push({ path: '/' })

            }


                  console.log(response);
                })
                .catch(function (response) {
                  console.log(response);
                });


      }
    }
  }
</script>

