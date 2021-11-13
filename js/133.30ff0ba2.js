(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[133],{

/***/ "61c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/resetpassword.vue?vue&type=template&id=56f3a674&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-center"},[_c('div',{staticClass:"col col-md-4"},[_c('q-card',{staticClass:"q-my-lg",attrs:{"flat":"","bordered":""}},[_c('q-card-section',[_c('div',{staticClass:"q-my-md"},[_c('div',{staticClass:"text-h5 text-bold"},[_vm._v("Password Reset ")])]),_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.resetPassword()}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"q-my-md"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"New Password"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","placeholder":"New Password","type":"password","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.password),callback:function ($$v) {_vm.$set(_vm.formData, "password", $$v)},expression:"formData.password"}})]}}],null,true)})],1),_c('div',{staticClass:"q-my-md"},[_c('ValidationProvider',{attrs:{"rules":{required:true, is: _vm.formData.password},"name":"Confirm Password"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","placeholder":"Confirm new password","type":"password","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.confirm_password),callback:function ($$v) {_vm.$set(_vm.formData, "confirm_password", $$v)},expression:"formData.confirm_password"}})]}}],null,true)})],1),_c('div',{staticClass:"col-md-3 col-sm-4"},[_c('q-btn',{attrs:{"disabled":invalid,"color":"primary","unelevated":"","type":"submit","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Change Password\n\t\t\t\t\t\t\t\t")],1)],1)]}}])})],1)],1)],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/index/resetpassword.vue?vue&type=template&id=56f3a674&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/resetpassword.vue?vue&type=script&lang=js&

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

/* harmony default export */ var resetpasswordvue_type_script_lang_js_ = ({
  props: {},
  mixins: [page["a" /* PageMixin */]],
  data: function () {
    return {
      formData: {
        password: "",
        confirm_password: "",
        token: "",
        email: ""
      },
      saving: false
    };
  },
  methods: {
    async resetPassword() {
      const isFormValid = await this.$refs.observer.validate();

      if (isFormValid) {
        this.saving = true;
        this.formData.token = this.$route.query.token;
        this.formData.email = this.$route.query.email;
        this.$api.post("auth/resetpassword", this.formData).then(response => {
          this.saving = false;
          this.$router.push("/index/resetpassword_completed");
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./src/pages/index/resetpassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_resetpasswordvue_type_script_lang_js_ = (resetpasswordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/index/resetpassword.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_resetpasswordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var resetpassword = __webpack_exports__["default"] = (component.exports);






runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=133.30ff0ba2.js.map