(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "f75a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/index.vue?vue&type=template&id=717df390&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"main-page"},[_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row justify-center q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-sm-6 col-md-3 comp-grid"},[_c('q-card',{staticClass:"q-mt-lg nice-shadow-18"},[_c('div',[_c('q-card-section',[_c('div',{staticClass:"text-h5 text-bold text-primary"},[_c('q-icon',{attrs:{"name":"account_circle"}}),_vm._v(" User Login\n                                ")],1)]),_c('q-card-section',{staticClass:"q-px-lg"},[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startLogin()},"reset":_vm.resetForm},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('q-input',{staticClass:"q-mb-md",attrs:{"label":"Username Or Email","outlined":"","dense":"","placeholder":"Username Or Email","required":"required","type":"text"},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{attrs:{"name":"account_circle"}})]},proxy:true}],null,true),model:{value:(_vm.user.username),callback:function ($$v) {_vm.$set(_vm.user, "username", $$v)},expression:"user.username"}}),_c('q-input',{staticClass:"q-mb-md",attrs:{"label":"Password","outlined":"","dense":"","placeholder":"Password","required":"required","type":"password"},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{attrs:{"name":"lock"}})]},proxy:true}],null,true),model:{value:(_vm.user.password),callback:function ($$v) {_vm.$set(_vm.user, "password", $$v)},expression:"user.password"}}),_c('div',{staticClass:"row q-mb-md"},[_c('div',{staticClass:"col-6"},[_c('q-checkbox',{model:{value:(_vm.rememberUser),callback:function ($$v) {_vm.rememberUser=$$v},expression:"rememberUser"}},[_vm._v(" Remember Me")])],1),_c('div',{staticClass:"col-6"},[_c('q-btn',{staticClass:"text-danger",attrs:{"to":"/index/forgotpassword","flat":"","no-caps":"","color":"negative"}},[_vm._v(" Reset Password?")])],1)]),_c('transition',{attrs:{"appear":"","enter-active-class":"animated bounceIn","leave-active-class":"animated fadeOut"}},[(_vm.errorMsg)?_c('q-banner',{staticClass:"bg-red-2 q-my-md",attrs:{"dense":"","inline-actions":"","rounded":""},scopedSlots:_vm._u([{key:"avatar",fn:function(){return [_c('q-icon',{attrs:{"color":"red","name":"error"}})]},proxy:true},{key:"action",fn:function(){return [_c('q-btn',{attrs:{"dense":"","flat":"","icon":"close"},on:{"click":function($event){_vm.errorMsg = ''}}})]},proxy:true}],null,true)},[_vm._v("\n                                            "+_vm._s(_vm.errorMsg.toString())+"\n                                            ")]):_vm._e()],1),_c('div',{staticClass:"text-center"},[_c('q-btn',{staticClass:"full-width",attrs:{"unelevated":"","loading":_vm.loading,"color":"primary","no-caps":"","disabled":invalid,"icon":"lock_open","type":"submit"}},[_vm._v(" \n                                                    Login \n                                                ")])],1),_c('q-separator',{staticClass:"q-my-md"}),_c('div',{staticClass:"row q-my-sm"},[_c('div',{staticClass:"col text-caption"},[_c('div',{staticClass:" text-caption q-pa-sm"},[_vm._v("Don't Have an Account?")])]),_c('div',{staticClass:"col-auto text-right"},[_c('q-btn',{staticClass:"full-width",attrs:{"unelevated":"","icon":"account_box","no-caps":"","color":"positive","to":"/index/register"}},[_vm._v("Register\n                                                    ")])],1)])]}}])})],1)],1)])],1)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/index/index.vue?vue&type=template&id=717df390&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/index.vue?vue&type=script&lang=js&

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

/* harmony default export */ var indexvue_type_script_lang_js_ = ({
  name: 'IndexComponent',
  components: {},
  data: function () {
    return {
      user: {
        username: '',
        password: ''
      },
      rememberUser: false,
      loading: false,
      ready: false,
      errorMsg: ''
    };
  },
  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('auth', ['login'])), {}, {
    startLogin() {
      this.loading = true;
      this.errorMsg = '';
      let formData = this.user;
      let rememberUser = this.rememberUser;
      let payload = {
        formData,
        rememberUser
      };
      this.login(payload).then(response => {
        this.loading = false;
        let loginData = response.data;

        if (loginData.token) {
          let nextUrl = this.$route.query.nexturl || '/';
          this.$router.go(nextUrl);
        } else {
          this.$router.push(loginData.nextpage);
        }
      }, request => {
        this.loading = false;
        this.errorMsg = request.response.data || "Unable to login";
      });
    },

    resetForm() {
      this.user = {
        username: '',
        password: ''
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    }

  }),
  mounted: function () {
    this.ready = true;
  }
});
// CONCATENATED MODULE: ./src/pages/index/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_indexvue_type_script_lang_js_ = (indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__("8f8e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/banner/QBanner.js
var QBanner = __webpack_require__("54e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/index/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "717df390",
  null
  
)

/* harmony default export */ var index = __webpack_exports__["default"] = (component.exports);










runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QIcon: QIcon["a" /* default */],QInput: QInput["a" /* default */],QCheckbox: QCheckbox["a" /* default */],QBtn: QBtn["a" /* default */],QBanner: QBanner["a" /* default */],QSeparator: QSeparator["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=29.21f58208.js.map