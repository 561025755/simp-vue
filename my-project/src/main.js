// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import VueForm from 'vue-form';
//Vue.use(VueForm)

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

//import axios from 'axios'
import axios from './http'

import App from './App'
import router from './router.js'
import $ from 'jquery' 



import '../otherlib/css/jquery-ui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../otherlib/css/animate.min.css'

import '../otherlib/css/style.min.css'
import '../otherlib/css/style-responsive.min.css'
import '../otherlib/css/orange.css'
import '../otherlib/css/font-awesome.min.css'



import '../otherlib/js/jquery-ui.min.js'
import a from 'bootstrap/dist/js/bootstrap.min.js'
import '../otherlib/js/jquery.slimscroll.min.js'

import linkgroups from './linkgroup.json'



//import '../otherlib/datepicker/datepicker3.css'
//import '../otherlib/datepicker/bootstrap-datepicker.js'

/*
export default {
  mounted: function() {
    t.test();
t.stst();
  }
}
*/

function hasPermission(roles, permissionRoles) {
    if (roles.indexOf('admin') >= 0) return true; // admin权限 直接通过
    if (!permissionRoles) return true;
    return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

router.beforeEach((to, from, next) => {

    if (to.path == '/login') {
        next(); return;
    } 

    if (from.path.toLowerCase() == '/login') {
        //console.log(router);
        ReloadSidebar(router);
    } 


    var groups = localStorage.getItem("groups");

    if (groups != null && groups != "" && groups != undefined) {
        var groupsArray = groups.indexOf(',') > 0 ? groups.split(',') : new Array( groups );
        if (hasPermission(groupsArray, to.meta.role)) 
            next();
        else
            next('/login');
    }
    else
    {
        next('/login');

    }
      
    
});



Vue.prototype.$ajax = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
  template: '<App/>',
  components: { App },
  mounted: function () {

      //if ($('.slimScrollDiv li .active').length > 1) {
      //    //去重
      //    var url = '/' + $('#hdController').val();
      //    if ($('#hdAction').val() != 'Index') {
      //        url += '/' + $('#hdAction').val();
      //    }

      //    $.each($('.slimScrollDiv li .active'), function (e) {
      //        if ($(this).find('a').attr('href') != url) {
      //            $(this).removeClass('active');
      //        }
      //    });
      //}

      //$('.slimScrollDiv li .active').parent().parent().filter('li').addClass('active');
      //$('form').append($("#TokenInput").html());

  },
  created: function () {
      //console.log(this);

      var sidebar = localStorage.getItem("sidebar");

      if (sidebar == null || sidebar == undefined || sidebar == '') {
          //this.ReloadSidebar();

          ReloadSidebar(router);
      }
  }
})



function ReloadSidebar(router) {
   
    var newSidebar = new Array();

    var pageContainerRoute = router.options.routes[0];
    var groups = localStorage.getItem("groups");
    var groupsArray = groups.indexOf(',') > 0 ? groups.split(',') : new Array(groups);

    //console.log(linkgroups);

    for (let linkgroup of linkgroups) {
        var childrenlinks = new Array();

        var groupChildrenLinks = pageContainerRoute.children.filter(link => link.groupname == linkgroup.name);

        //console.log(groupChildrenLinks);

        for (let groupChildrenLink of groupChildrenLinks) {
            if ('component' in groupChildrenLink)
                groupChildrenLink.component = null;

            if (groups != undefined && groups != null && ('meta' in groupChildrenLink) && ('role' in groupChildrenLink.meta)) {
                if (hasPermission(groupsArray, groupChildrenLink.meta.role)) {
                    childrenlinks.push(groupChildrenLink);
                }
            }
            else {
                childrenlinks.push(groupChildrenLink);
            }
        }

        linkgroup.children = childrenlinks;
    }

    localStorage.setItem("sidebar", JSON.stringify(linkgroups));
}

