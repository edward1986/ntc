(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[135],{

/***/ "2320":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/userregister.vue?vue&type=template&id=208626e1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md q-mb-md nice-shadow-18"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-md-8 col-12 "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("User registration")])])])])]),_c('div',{staticClass:"col-md-4 col-12 comp-grid"},[_c('div',{},[_c('div',{},[_c('div',{staticClass:"text-center"},[_vm._v("\n                                    Already have an account?  "),_c('q-btn',{attrs:{"rounded":false,"no-caps":"","unelevated":"","color":"primary","icon":"account_box","to":"/"}},[_vm._v(" Login")])],1)])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18"},[_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startSaveRecord()},"reset":_vm.resetForm},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                            Username *\n                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('check-duplicate',{attrs:{"check-path":"components_data/users_username_exist/"},scopedSlots:_vm._u([{key:"default",fn:function(checker){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Username"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlusername",attrs:{"outlined":"","dense":"","loading":checker.loading,"label":"Username","type":"text","placeholder":"Enter Username","list":"username_list","error":(invalid && validated) || checker.exist,"error-message":errors[0] || 'Not available'},on:{"blur":checker.check},model:{value:(_vm.formData.username),callback:function ($$v) {_vm.$set(_vm.formData, "username", $$v)},expression:"formData.username"}}),_c('datalist',{attrs:{"id":"username_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})]}}],null,true),model:{value:(_vm.formData.username),callback:function ($$v) {_vm.$set(_vm.formData, "username", $$v)},expression:"formData.username"}})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                            Password *\n                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Password"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlpassword",attrs:{"outlined":"","dense":"","label":"Password","type":_vm.isPwd ? 'password' : 'text',"placeholder":"Enter Password","list":"password_list","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":_vm.isPwd ? 'visibility_off' : 'visibility'},on:{"click":function($event){_vm.isPwd = !_vm.isPwd}}})]},proxy:true}],null,true),model:{value:(_vm.formData.password),callback:function ($$v) {_vm.$set(_vm.formData, "password", $$v)},expression:"formData.password"}}),_c('datalist',{attrs:{"id":"password_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                            Confirm Password *\n                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true, is: _vm.formData.password},"name":"Confirm Password"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"",attrs:{"outlined":"","dense":"","type":"password","label":"Confirm Password","placeholder":"Confirm Password","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":_vm.isPwd ? 'visibility_off' : 'visibility'},on:{"click":function($event){_vm.isPwd = !_vm.isPwd}}})]},proxy:true}],null,true),model:{value:(_vm.formData.confirm_password),callback:function ($$v) {_vm.$set(_vm.formData, "confirm_password", $$v)},expression:"formData.confirm_password"}})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                            Email *\n                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('check-duplicate',{attrs:{"check-path":"components_data/users_email_exist/"},scopedSlots:_vm._u([{key:"default",fn:function(checker){return [_c('ValidationProvider',{attrs:{"rules":{required:true, email:true},"name":"Email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlemail",attrs:{"outlined":"","dense":"","loading":checker.loading,"label":"Email","type":"email","placeholder":"Enter Email","list":"email_list","error":(invalid && validated) || checker.exist,"error-message":errors[0] || 'Not available'},on:{"blur":checker.check},model:{value:(_vm.formData.email),callback:function ($$v) {_vm.$set(_vm.formData, "email", $$v)},expression:"formData.email"}}),_c('datalist',{attrs:{"id":"email_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})]}}],null,true),model:{value:(_vm.formData.email),callback:function ($$v) {_vm.$set(_vm.formData, "email", $$v)},expression:"formData.email"}})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                            Picture *\n                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Picture"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('div',{staticClass:"q-mb-sm"},[_c('q-uploader-input',{staticStyle:{"width":"100%"},attrs:{"max-files":1,"max-file-size":3,"accept":".jpg,.png,.gif,.jpeg","multiple":false,"square":"","flat":"","bordered":"","label":"Choose files or drop files here","upload-path":"fileuploader/upload/picture"},model:{value:(_vm.formData.picture),callback:function ($$v) {_vm.$set(_vm.formData, "picture", $$v)},expression:"formData.picture"}}),(invalid && validated)?_c('small',{staticClass:"q-pa-sm text-negative"},[_vm._v(_vm._s(errors[0]))]):_vm._e()],1)]}}],null,true)})],1)])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"rounded":false,"color":"primary","no-caps":"","unelevated":"","type":"submit","disabled":invalid,"icon":"send","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Submit\n                                    ")],1)],1):_vm._e()]}}])}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2)])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/index/userregister.vue?vue&type=template&id=208626e1&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// EXTERNAL MODULE: ./src/mixins/addpage.js
var addpage = __webpack_require__("8f54");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/userregister.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var userregistervue_type_script_lang_js_ = ({
  name: 'RegisterComponent',
  components: {},
  mixins: [page["a" /* PageMixin */], addpage["a" /* AddPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'users'
    },
    routeName: {
      type: String,
      default: 'usersuserregister'
    },
    apiPath: {
      type: String,
      default: 'auth/register'
    }
  },

  data() {
    return {
      formData: {
        username: "",
        password: "",
        confirm_password: "",
        email: "",
        picture: ""
      }
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Add New Users";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle
    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('users', ['saveRecord'])), {}, {
    async startSaveRecord() {
      const isFormValid = await this.$refs.observer.validate();

      if (isFormValid) {
        this.saving = true;
        let payload = this.normalizedFormData();
        let url = this.apiUrl;
        let data = {
          url,
          payload
        };
        this.saveRecord(data).then(response => {
          this.saving = false;
          this.resetForm();
          let registrationData = response.data;

          if (registrationData.token && registrationData.user) {
            this.$localStore.saveLoginData(registrationData, false);
            window.location = "/";
          } else {
            this.flashMsg(registrationData.message);
            this.navigateTo(registrationData.nextpage);
          }
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    resetForm() {
      this.formData = {
        username: "",
        password: "",
        confirm_password: "",
        email: "",
        picture: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
      this.$EventBus.$emit("resetForm");
    }

  }),

  mounted() {}

});
// CONCATENATED MODULE: ./src/pages/index/userregister.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_userregistervue_type_script_lang_js_ = (userregistervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/uploader/QUploader.js + 3 modules
var QUploader = __webpack_require__("ee89");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/index/userregister.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_userregistervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "208626e1",
  null
  
)

/* harmony default export */ var userregister = __webpack_exports__["default"] = (component.exports);







runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QBtn: QBtn["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QUploader: QUploader["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=135.2516e23a.js.map