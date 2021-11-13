(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[132],{

/***/ "038c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/forgotpassword.vue?vue&type=template&id=7fb693fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-center"},[_c('div',{staticClass:"col col-md-6"},[_c('q-card',{staticClass:"q-my-lg",attrs:{"flat":"","bordered":""}},[_c('q-card-section',[_c('div',{staticClass:"q-my-md"},[_c('div',{staticClass:"text-h5 text-bold"},[_vm._v("Password Reset ")]),_c('small',{staticClass:"text-caption"},[_vm._v("\n                                Please provide the valid email address you used to register\n                            ")])]),(_vm.sentMsg)?_c('q-banner',{staticClass:"bg-green-1 q-my-lg",attrs:{"inline-actions":"","rounded":""},scopedSlots:_vm._u([{key:"avatar",fn:function(){return [_c('q-icon',{attrs:{"color":"positive","name":"email"}})]},proxy:true}],null,false,1387708169)},[_c('div',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.sentMsg))])]):_vm._e(),_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.sendEmail()}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-lg"},[_c('div',{staticClass:"col-md-9 col"},[_c('ValidationProvider',{attrs:{"rules":{required:true, email: true},"name":"Email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","placeholder":"Email","type":"email","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.email),callback:function ($$v) {_vm.$set(_vm.formData, "email", $$v)},expression:"formData.email"}})]}}],null,true)})],1),_c('div',{staticClass:"col-md-3 col-sm-4"},[_c('q-btn',{attrs:{"disabled":invalid,"color":"primary","unelevated":"","type":"submit","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" \tSend "),_c('q-icon',{attrs:{"name":"email"}})],1)],1)])]}}])}),_c('br'),_c('div',{staticClass:"text-info"},[_vm._v("\n                            A link will be sent to your email containing the information you need for your password\n                        ")])],1)],1)],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/index/forgotpassword.vue?vue&type=template&id=7fb693fa&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/forgotpassword.vue?vue&type=script&lang=js&

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

/* harmony default export */ var forgotpasswordvue_type_script_lang_js_ = ({
  props: {},
  mixins: [page["a" /* PageMixin */]],
  data: function () {
    return {
      formData: {
        email: ""
      },
      saving: false,
      error: "",
      sentMsg: ""
    };
  },
  methods: {
    async sendEmail() {
      const isFormValid = await this.$refs.observer.validate();

      if (isFormValid) {
        this.saving = true;
        this.$api.post("auth/forgotpassword", this.formData).then(response => {
          this.saving = false;
          this.sentMsg = response.data;
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
          this.sentMsg = "";
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./src/pages/index/forgotpassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_forgotpasswordvue_type_script_lang_js_ = (forgotpasswordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/banner/QBanner.js
var QBanner = __webpack_require__("54e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/index/forgotpassword.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_forgotpasswordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var forgotpassword = __webpack_exports__["default"] = (component.exports);








runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QBanner: QBanner["a" /* default */],QIcon: QIcon["a" /* default */],QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=132.64e13620.js.map