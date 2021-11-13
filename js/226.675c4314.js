(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[226],{

/***/ "900b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/verifyemail.vue?vue&type=template&id=7763f268&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-center"},[_c('div',{staticClass:"col-md-6 col-12"},[_c('q-card',{staticClass:"q-my-lg text-center",attrs:{"flat":"","bordered":""}},[_c('q-card-section',[_c('div',{staticClass:"text-h5 text-bold text-positive"},[_c('q-icon',{attrs:{"size":"lg","name":"check_circle"}}),_vm._v(" \n\t\t\t\t\t\t\t"+_vm._s(_vm.sentMsg)+"\n\t\t\t\t\t\t")],1),_c('div',{staticClass:"text-caption"},[_vm._v("\n\t\t\t\t\t\t\tPlease verify your email address by following the link in your mailbox\n\t\t\t\t\t\t")]),_c('q-separator',{staticClass:"q-my-md"}),_c('div',{staticClass:"text-center"},[_c('q-btn',{attrs:{"flat":"","color":"info","loading":_vm.loading},on:{"click":function($event){return _vm.resend()}}},[_c('q-icon',{attrs:{"name":"email"}}),_vm._v(" Resend Email\n\t\t\t\t\t\t\t"),_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"})],1)],1)],1)],1)],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/index/verifyemail.vue?vue&type=template&id=7763f268&

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/verifyemail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var verifyemailvue_type_script_lang_js_ = ({
  props: {},
  mixins: [page["a" /* PageMixin */]],
  data: function () {
    return {
      loading: false,
      sentMsg: "Email verification link sent to your mailbox"
    };
  },
  methods: {
    resend() {
      let url = "auth/resendverifyemail?id=" + this.$route.query.id;
      this.loading = true;
      this.$api.get(url).then(response => {
        this.loading = false;
        this.sentMsg = response.data;
      }, response => {
        this.loading = false;
        this.showPageRequestError(response);
      });
    }

  }
});
// CONCATENATED MODULE: ./src/pages/index/verifyemail.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_verifyemailvue_type_script_lang_js_ = (verifyemailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/index/verifyemail.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_verifyemailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var verifyemail = __webpack_exports__["default"] = (component.exports);







runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QIcon: QIcon["a" /* default */],QSeparator: QSeparator["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=226.675c4314.js.map