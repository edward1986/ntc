(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "e676":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/access_lists/add.vue?vue&type=template&id=409599ac&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Add New Access Lists")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18"},[_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startSaveRecord()},"reset":_vm.resetForm},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',[_c('q-markup-table',{attrs:{"dense":"","flat":""}},[_c('thead',[_c('tr',[_c('th',[_c('label',{attrs:{"for":"parent_id"}},[_vm._v("Parent Id")])]),_c('td',{staticStyle:{"width":"30px"}})])]),_c('tbody',_vm._l((_vm.arrFormData),function(formData,row){return _c('tr',{key:row,staticClass:"input-row"},[_c('td',{attrs:{"id":"ctrl-parent_id-holder"}},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Parent Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlparent_id",refInFor:true,attrs:{"outlined":"","dense":"","label":"Parent Id","type":"number","placeholder":"Enter Parent Id","step":"any","list":"parent_id_list","error":invalid && validated,"error-message":errors[0]},model:{value:(formData.parent_id),callback:function ($$v) {_vm.$set(formData, "parent_id", $$v)},expression:"formData.parent_id"}}),_c('datalist',{attrs:{"id":"parent_id_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1),_c('th',[(_vm.arrFormData.length > _vm.minRowCount)?_c('q-btn',{attrs:{"rounded":false,"no-caps":"","unelevated":"","padding":"xs","icon":"close","size":"sm","color":"red"},on:{"click":function($event){return _vm.removeFormRow(row)}}}):_vm._e()],1)])}),0),_c('tfoot',[_c('tr',[_c('td',{staticClass:"text-right",attrs:{"colspan":"100"}},[(_vm.arrFormData.length < _vm.maxRowCount)?_c('q-btn',{attrs:{"rounded":false,"no-caps":"","unelevated":"","color":"positive","padding":"xs","icon":"add","size":"sm"},on:{"click":function($event){return _vm.addFormRow()}}}):_vm._e()],1)])])])],1),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"rounded":false,"color":"primary","no-caps":"","unelevated":"","type":"submit","disabled":invalid,"icon":"send","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Submit\n                                    ")],1)],1):_vm._e()]}}])}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2)])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/access_lists/add.vue?vue&type=template&id=409599ac&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

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

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/access_lists/add.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var addvue_type_script_lang_js_ = ({
  name: 'addAccesslistsPage',
  components: {},
  mixins: [page["a" /* PageMixin */], addpage["a" /* AddPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'access_lists'
    },
    routeName: {
      type: String,
      default: 'access_listsadd'
    },
    apiPath: {
      type: String,
      default: 'access_lists/add'
    },
    maxRowCount: {
      type: Number,
      default: 10
    },
    minRowCount: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
      arrFormData: [{
        parent_id: ""
      }]
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Add New Access Lists";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle
    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('access_lists', ['saveRecord'])), {}, {
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
          this.closeDialogs(); // close page dialog that if opened

          this.flashMsg(this.msgAfterSave);
          this.navigateTo(`/access_lists`);
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    addFormRow() {
      let newFormData = {
        parent_id: ""
      };
      this.arrFormData.push(newFormData);
    },

    removeFormRow(index) {
      this.arrFormData.splice(index, 1);
    },

    resetForm() {
      this.arrFormData = [{
        parent_id: ""
      }];
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
      this.$EventBus.$emit("resetForm");
    }

  }),

  mounted() {}

});
// CONCATENATED MODULE: ./src/pages/access_lists/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var access_lists_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/markup-table/QMarkupTable.js
var QMarkupTable = __webpack_require__("2bb1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/access_lists/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  access_lists_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "409599ac",
  null
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);






runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QMarkupTable: QMarkupTable["a" /* default */],QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=57.c8881de1.js.map