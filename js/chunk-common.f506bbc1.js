(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "0fa5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/exam_schedules/edit.vue?vue&type=template&id=ccb56d2a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Edit Exam Schedules")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18"},[_c('div',[(!_vm.loading)?_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startRecordUpdate()}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Name *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Name"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlname",attrs:{"outlined":"","dense":"","label":"Name","type":"text","placeholder":"Enter Name","list":"name_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.name),callback:function ($$v) {_vm.$set(_vm.formData, "name", $$v)},expression:"formData.name"}}),_c('datalist',{attrs:{"id":"name_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Place *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Place"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlplace",attrs:{"outlined":"","dense":"","label":"Place","type":"text","placeholder":"Enter Place","list":"place_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.place),callback:function ($$v) {_vm.$set(_vm.formData, "place", $$v)},expression:"formData.place"}}),_c('datalist',{attrs:{"id":"place_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    City Id *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/city_id_option_list_2"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'city_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"City Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlcity_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"City Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                            "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.city_id),callback:function ($$v) {_vm.$set(_vm.formData, "city_id", $$v)},expression:"formData.city_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Date Time *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Date Time"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"date_range"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.date_time),callback:function ($$v) {_vm.$set(_vm.formData, "date_time", $$v)},expression:"formData.date_time"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.date_time),callback:function ($$v) {_vm.$set(_vm.formData, "date_time", $$v)},expression:"formData.date_time"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.date_time),callback:function ($$v) {_vm.$set(_vm.formData, "date_time", $$v)},expression:"formData.date_time"}})]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"rounded":false,"color":"primary","no-caps":"","unelevated":"","type":"submit","disabled":invalid,"icon":"send","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Update\n                                                ")],1)],1):_vm._e()]}}],null,false,585477525)}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2):_c('div',{staticClass:"q-pa-sm text-center"},[_c('q-spinner',{attrs:{"size":40,"color":"accent","indeterminate":""}}),_vm._v("\n                                        Loading...\n                                    ")],1)])])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/exam_schedules/edit.vue?vue&type=template&id=ccb56d2a&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// EXTERNAL MODULE: ./src/mixins/editpage.js
var editpage = __webpack_require__("b858");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/exam_schedules/edit.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var editvue_type_script_lang_js_ = ({
  name: 'editExamschedulesPage',
  components: {},
  mixins: [page["a" /* PageMixin */], editpage["a" /* EditPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'exam_schedules'
    },
    idName: {
      type: String,
      default: 'id'
    },
    routeName: {
      type: String,
      default: 'exam_schedulesedit'
    },
    pagePath: {
      type: String,
      default: 'exam_schedules/edit'
    },
    apiPath: {
      type: String,
      default: 'exam_schedules/edit'
    }
  },

  data() {
    return {
      formData: {
        name: "",
        place: "",
        city_id: "",
        date_time: ""
      },
      date_timePicker: false
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Edit Exam Schedules";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle // set browser page title

    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('exam_schedules', ['updateRecord', 'fetchRecord'])), {}, {
    async startRecordUpdate() {
      const isFormValid = await this.$refs.observer.validate();

      if (isFormValid) {
        this.saving = true;
        let id = this.id;
        let url = this.apiUrl;
        let payload = this.normalizedFormData();
        let data = {
          id,
          url,
          payload
        };
        this.updateRecord(data).then(response => {
          this.saving = false;
          this.flashMsg(this.msgAfterUpdate);
          this.resetForm();
          this.closeDialogs(); // close page dialog that if opened

          this.navigateTo(`/exam_schedules`);
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    updateFormFields: function () {//update form fields value after load from api
      //e.g convert fieldvalue (value,value2,value2) to array 
    },

    resetForm() {
      //reset form fields value
      this.formData = {
        name: "",
        place: "",
        city_id: "",
        date_time: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      }); //raise event to reset other custom form components

      this.$EventBus.$emit("resetForm");
    }

  })
});
// CONCATENATED MODULE: ./src/pages/exam_schedules/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var exam_schedules_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__("ca78");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/exam_schedules/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  exam_schedules_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ccb56d2a",
  null
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);














runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QInput: QInput["a" /* default */],QSelect: QSelect["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QIcon: QIcon["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QDate: QDate["a" /* default */],QTime: QTime["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */],QSpinner: QSpinner["a" /* default */]});


/***/ }),

/***/ "1465":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/operator_certificate_applications/add.vue?vue&type=template&id=202305ea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Add New Operator Certificate Applications")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18"},[_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startSaveRecord()},"reset":_vm.resetForm},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Certicate Application Type Id *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/certicate_application_type_id_option_list_2"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'certicate_application_type_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Certicate Application Type Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlcerticate_application_type_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Certicate Application Type Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                        "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                            "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.certicate_application_type_id),callback:function ($$v) {_vm.$set(_vm.formData, "certicate_application_type_id", $$v)},expression:"formData.certicate_application_type_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                        Submitted Application Id *\n                                                    ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/submitted_application_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'submitted_application_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Submitted Application Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlsubmitted_application_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Submitted Application Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                    "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.submitted_application_id),callback:function ($$v) {_vm.$set(_vm.formData, "submitted_application_id", $$v)},expression:"formData.submitted_application_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                Operator Certificate Type Id *\n                                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/operator_certificate_type_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'operator_certificate_type_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Operator Certificate Type Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrloperator_certificate_type_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Operator Certificate Type Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                        "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                            "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.operator_certificate_type_id),callback:function ($$v) {_vm.$set(_vm.formData, "operator_certificate_type_id", $$v)},expression:"formData.operator_certificate_type_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                        Registration No *\n                                                                    ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Registration No"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlregistration_no",attrs:{"outlined":"","dense":"","label":"Registration No","type":"text","placeholder":"Enter Registration No","list":"registration_no_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.registration_no),callback:function ($$v) {_vm.$set(_vm.formData, "registration_no", $$v)},expression:"formData.registration_no"}}),_c('datalist',{attrs:{"id":"registration_no_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                        Place Of Exam *\n                                                                    ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Place Of Exam"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlplace_of_exam",attrs:{"outlined":"","dense":"","label":"Place Of Exam","type":"text","placeholder":"Enter Place Of Exam","list":"place_of_exam_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.place_of_exam),callback:function ($$v) {_vm.$set(_vm.formData, "place_of_exam", $$v)},expression:"formData.place_of_exam"}}),_c('datalist',{attrs:{"id":"place_of_exam_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                        Date Of Exam *\n                                                                    ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Date Of Exam"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"date_range"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.date_of_exam),callback:function ($$v) {_vm.$set(_vm.formData, "date_of_exam", $$v)},expression:"formData.date_of_exam"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.date_of_exam),callback:function ($$v) {_vm.$set(_vm.formData, "date_of_exam", $$v)},expression:"formData.date_of_exam"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.date_of_exam),callback:function ($$v) {_vm.$set(_vm.formData, "date_of_exam", $$v)},expression:"formData.date_of_exam"}})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                        Rating *\n                                                                    ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Rating"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlrating",attrs:{"outlined":"","dense":"","label":"Rating","type":"number","placeholder":"Enter Rating","step":"any","list":"rating_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.rating),callback:function ($$v) {_vm.$set(_vm.formData, "rating", $$v)},expression:"formData.rating"}}),_c('datalist',{attrs:{"id":"rating_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"type":"submit","rounded":false,"color":"primary","no-caps":"","unelevated":"","disabled":invalid,"icon":"send","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Submit\n                                                            ")],1)],1):_vm._e()]}}])}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2)])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/operator_certificate_applications/add.vue?vue&type=template&id=202305ea&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/operator_certificate_applications/add.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'addOperatorcertificateapplicationsPage',
  components: {},
  mixins: [page["a" /* PageMixin */], addpage["a" /* AddPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'operator_certificate_applications'
    },
    routeName: {
      type: String,
      default: 'operator_certificate_applicationsadd'
    },
    apiPath: {
      type: String,
      default: 'operator_certificate_applications/add'
    }
  },

  data() {
    return {
      formData: {
        certicate_application_type_id: "",
        submitted_application_id: "",
        operator_certificate_type_id: "",
        registration_no: "",
        place_of_exam: "",
        date_of_exam: "",
        rating: ""
      },
      date_of_examPicker: false
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Add New Operator Certificate Applications";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle
    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('operator_certificate_applications', ['saveRecord'])), {}, {
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
          this.record = response.data;
          this.id = this.record['id'];
          this.saving = false;
          this.resetForm();
          this.closeDialogs(); // close page dialog that if opened

          this.flashMsg(this.msgAfterSave);
          this.navigateTo(`/operator_certificate_applications`);
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    resetForm() {
      this.formData = {
        certicate_application_type_id: "",
        submitted_application_id: "",
        operator_certificate_type_id: "",
        registration_no: "",
        place_of_exam: "",
        date_of_exam: "",
        rating: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
      this.$EventBus.$emit("resetForm");
    }

  }),

  mounted() {}

});
// CONCATENATED MODULE: ./src/pages/operator_certificate_applications/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var operator_certificate_applications_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__("ca78");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/operator_certificate_applications/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  operator_certificate_applications_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "202305ea",
  null
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);













runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QSelect: QSelect["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QDate: QDate["a" /* default */],QTime: QTime["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ }),

/***/ "19a6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPageMixin; });
const ViewPageMixin = {
  props: {
    id: [String, Number],
    fieldName: {
      type: String,
      default: ''
    },
    fieldValue: {
      type: String,
      default: ''
    },
    editButton: {
      type: Boolean,
      default: true
    },
    deleteButton: {
      type: Boolean,
      default: true
    },
    exportButton: {
      type: Boolean,
      default: true
    },
    msgBeforeDelete: {
      type: String,
      default: "Are you sure you want to delete this record?"
    },
    msgAfterDelete: {
      type: String,
      default: "Record deleted successfully"
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      filterBy: '',
      filterValue: '',
      ready: false,
      loading: false,
      showError: false,
      errorMsg: ''
    };
  },
  computed: {
    apiUrl: function () {
      if (this.id) {
        let id = encodeURIComponent(this.id);
        let path = `/${this.pagePath}/${id}`;
        let query = this.$route.query;
        let queryParams = this.$utils.serializeQuery(query);

        if (queryParams) {
          path += "?" + queryParams;
        }

        return path;
      }

      return this.apiPath;
    }
  },
  methods: {
    load: function (apiUrl) {
      if (!this.loading) {
        this.loading = true;
        this.ready = false; // hide other components until main page is ready

        this.item = null;
        let url = apiUrl !== null && apiUrl !== void 0 ? apiUrl : this.apiUrl;
        this.$api.get(url).then(response => {
          this.loading = false;
          this.ready = true; // show other components

          this.item = response.data;
        }, response => {
          this.loading = false;
          this.showPageRequestError(response);
        });
      }
    },
    deleteItem: function (id) {
      if (id) {
        let title = "Delete record";
        let prompt = this.msgBeforeDelete;
        this.$q.dialog({
          title: title,
          message: prompt,
          cancel: true,
          persistent: true
        }).onOk(() => {
          let url = this.pageName + '/delete/' + id;
          let data = {
            id,
            url
          };
          this.deleteRecord(data).then(response => {
            if (this.isDialogOpen) {
              this.closeDialogs();
            } else {
              this.$router.back();
            }

            this.flashMsg(this.msgAfterDelete);
          }, response => {
            this.showPageRequestError(response);
          });
        }).onCancel(() => {// console.log('>>>> Cancel')
        }).onDismiss(() => {// console.log('I am triggered on both OK and Cancel')
        });
      }
    },
    exportRecord: function () {
      this.exportPage(this.$refs.datatable.innerHTML, this.pageTitle);
    },
    moveRecord: function (recid) {
      let id = encodeURIComponent(recid);
      let path = `/${this.pagePath}/${id}`;
      this.load(path);
    },
    moveToNextRecord: function () {
      this.moveRecord(this.item.nextRecordId);
    },
    moveToPreviousRecord: function () {
      this.moveRecord(this.item.previousRecordId);
    }
  },
  watch: {
    apiUrl: function () {
      this.load();
    }
  },
  created: function () {},
  mounted: function () {
    this.filterBy = this.fieldName;
    this.filterValue = this.fieldValue;
    this.load();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
};

/***/ }),

/***/ "1fd7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/account/accountedit.vue?vue&type=template&id=db36e10c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('div',{},[_c('div',[(!_vm.loading)?_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startRecordUpdate()}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Barangay Id *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Barangay Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlbarangay_id",attrs:{"outlined":"","dense":"","label":"Barangay Id","type":"number","placeholder":"Enter Barangay Id","step":"any","list":"barangay_id_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.barangay_id),callback:function ($$v) {_vm.$set(_vm.formData, "barangay_id", $$v)},expression:"formData.barangay_id"}}),_c('datalist',{attrs:{"id":"barangay_id_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Username *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Username"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlusername",attrs:{"outlined":"","dense":"","label":"Username","type":"text","placeholder":"Enter Username","list":"username_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.username),callback:function ($$v) {_vm.$set(_vm.formData, "username", $$v)},expression:"formData.username"}}),_c('datalist',{attrs:{"id":"username_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    First Name *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"First Name"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlfirst_name",attrs:{"outlined":"","dense":"","label":"First Name","type":"text","placeholder":"Enter First Name","list":"first_name_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.first_name),callback:function ($$v) {_vm.$set(_vm.formData, "first_name", $$v)},expression:"formData.first_name"}}),_c('datalist',{attrs:{"id":"first_name_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Last Name *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Last Name"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrllast_name",attrs:{"outlined":"","dense":"","label":"Last Name","type":"text","placeholder":"Enter Last Name","list":"last_name_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.last_name),callback:function ($$v) {_vm.$set(_vm.formData, "last_name", $$v)},expression:"formData.last_name"}}),_c('datalist',{attrs:{"id":"last_name_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Middle Name *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Middle Name"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlmiddle_name",attrs:{"outlined":"","dense":"","label":"Middle Name","type":"text","placeholder":"Enter Middle Name","list":"middle_name_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.middle_name),callback:function ($$v) {_vm.$set(_vm.formData, "middle_name", $$v)},expression:"formData.middle_name"}}),_c('datalist',{attrs:{"id":"middle_name_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Dob *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Dob"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrldob",attrs:{"outlined":"","dense":"","label":"Dob","type":"text","placeholder":"Enter Dob","list":"dob_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.dob),callback:function ($$v) {_vm.$set(_vm.formData, "dob", $$v)},expression:"formData.dob"}}),_c('datalist',{attrs:{"id":"dob_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Gender *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Gender"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-field',{attrs:{"error":invalid && validated,"error-message":errors[0],"borderless":""}},[_c('q-option-group',{ref:"ctrlgender",attrs:{"options":_vm.$menus.genderItems,"error":invalid && validated,"error-message":errors[0],"size":"md"},model:{value:(_vm.formData.gender),callback:function ($$v) {_vm.$set(_vm.formData, "gender", $$v)},expression:"formData.gender"}})],1)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Nationality *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Nationality"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlnationality",attrs:{"outlined":"","dense":"","label":"Nationality","type":"text","placeholder":"Enter Nationality","list":"nationality_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.nationality),callback:function ($$v) {_vm.$set(_vm.formData, "nationality", $$v)},expression:"formData.nationality"}}),_c('datalist',{attrs:{"id":"nationality_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Unit No *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Unit No"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlunit_no",attrs:{"outlined":"","dense":"","label":"Unit No","type":"text","placeholder":"Enter Unit No","list":"unit_no_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.unit_no),callback:function ($$v) {_vm.$set(_vm.formData, "unit_no", $$v)},expression:"formData.unit_no"}}),_c('datalist',{attrs:{"id":"unit_no_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Street *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Street"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlstreet",attrs:{"outlined":"","dense":"","label":"Street","type":"text","placeholder":"Enter Street","list":"street_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.street),callback:function ($$v) {_vm.$set(_vm.formData, "street", $$v)},expression:"formData.street"}}),_c('datalist',{attrs:{"id":"street_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Contact *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Contact"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlcontact",attrs:{"outlined":"","dense":"","label":"Contact","type":"text","placeholder":"Enter Contact","list":"contact_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.contact),callback:function ($$v) {_vm.$set(_vm.formData, "contact", $$v)},expression:"formData.contact"}}),_c('datalist',{attrs:{"id":"contact_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Picture *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Picture"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('div',{staticClass:"q-mb-sm"},[_c('q-uploader-input',{staticStyle:{"width":"100%"},attrs:{"max-files":1,"max-file-size":3,"accept":".jpg,.png,.gif,.jpeg","multiple":false,"square":"","flat":"","bordered":"","label":"Choose files or drop files here","upload-path":"fileuploader/upload/picture"},model:{value:(_vm.formData.picture),callback:function ($$v) {_vm.$set(_vm.formData, "picture", $$v)},expression:"formData.picture"}}),(invalid && validated)?_c('small',{staticClass:"q-pa-sm text-negative"},[_vm._v(_vm._s(errors[0]))]):_vm._e(),_c('div',{staticClass:"q-pa-xs"},[_c('file-viewer',{attrs:{"removable":""},model:{value:(_vm.formData.picture),callback:function ($$v) {_vm.$set(_vm.formData, "picture", $$v)},expression:"formData.picture"}})],1)],1)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    E Signature *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"E Signature"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrle_signature",attrs:{"outlined":"","dense":"","label":"E Signature","type":"text","placeholder":"Enter E Signature","list":"e_signature_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.e_signature),callback:function ($$v) {_vm.$set(_vm.formData, "e_signature", $$v)},expression:"formData.e_signature"}}),_c('datalist',{attrs:{"id":"e_signature_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"rounded":false,"color":"primary","no-caps":"","unelevated":"","type":"submit","disabled":invalid,"icon":"send","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Update\n                                        ")],1)],1):_vm._e()]}}],null,false,2847577277)}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2):_c('div',{staticClass:"q-pa-sm text-center"},[_c('q-spinner',{attrs:{"size":40,"color":"accent","indeterminate":""}}),_vm._v("\n                                Loading...\n                            ")],1)])])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/account/accountedit.vue?vue&type=template&id=db36e10c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// EXTERNAL MODULE: ./src/mixins/editpage.js
var editpage = __webpack_require__("b858");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/account/accountedit.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var accounteditvue_type_script_lang_js_ = ({
  name: 'accounteditUsersPage',
  components: {},
  mixins: [page["a" /* PageMixin */], editpage["a" /* EditPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'users'
    },
    idName: {
      type: String,
      default: 'id'
    },
    routeName: {
      type: String,
      default: 'usersaccountedit'
    },
    pagePath: {
      type: String,
      default: 'account/edit'
    },
    apiPath: {
      type: String,
      default: 'account/edit'
    }
  },

  data() {
    return {
      formData: {
        barangay_id: "",
        username: "",
        first_name: "",
        last_name: "",
        middle_name: "",
        dob: "",
        gender: "",
        nationality: "",
        unit_no: "",
        street: "",
        contact: "",
        picture: "",
        e_signature: ""
      }
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "My Account";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle // set browser page title

    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('users', ['updateRecord', 'fetchRecord'])), {}, {
    async startRecordUpdate() {
      const isFormValid = await this.$refs.observer.validate();

      if (isFormValid) {
        this.saving = true;
        let id = this.id;
        let url = this.apiUrl;
        let payload = this.normalizedFormData();
        let data = {
          id,
          url,
          payload
        };
        this.updateRecord(data).then(response => {
          this.saving = false;
          this.flashMsg(this.msgAfterUpdate);
          this.resetForm();
          this.closeDialogs(); // close page dialog that if opened

          window.location.reload();
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    updateFormFields: function () {//update form fields value after load from api
      //e.g convert fieldvalue (value,value2,value2) to array 
    },

    resetForm() {
      //reset form fields value
      this.formData = {
        barangay_id: "",
        username: "",
        first_name: "",
        last_name: "",
        middle_name: "",
        dob: "",
        gender: "",
        nationality: "",
        unit_no: "",
        street: "",
        contact: "",
        picture: "",
        e_signature: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      }); //raise event to reset other custom form components

      this.$EventBus.$emit("resetForm");
    }

  })
});
// CONCATENATED MODULE: ./src/pages/account/accountedit.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_accounteditvue_type_script_lang_js_ = (accounteditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js + 3 modules
var QField = __webpack_require__("8572");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/option-group/QOptionGroup.js + 2 modules
var QOptionGroup = __webpack_require__("9f0a");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/uploader/QUploader.js + 3 modules
var QUploader = __webpack_require__("ee89");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/account/accountedit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_accounteditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "db36e10c",
  null
  
)

/* harmony default export */ var accountedit = __webpack_exports__["default"] = (component.exports);








runtime_auto_import_default()(component, 'components', {QInput: QInput["a" /* default */],QField: QField["a" /* default */],QOptionGroup: QOptionGroup["a" /* default */],QUploader: QUploader["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */],QSpinner: QSpinner["a" /* default */]});


/***/ }),

/***/ "251f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/amateur_operator_applications/add.vue?vue&type=template&id=23225c6b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Add New Amateur Operator Applications")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18"},[_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startSaveRecord()},"reset":_vm.resetForm},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Submitted Application *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/submitted_application_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'submitted_application_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Submitted Application"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlsubmitted_application_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Submitted Application","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                        "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                            "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.submitted_application_id),callback:function ($$v) {_vm.$set(_vm.formData, "submitted_application_id", $$v)},expression:"formData.submitted_application_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                        Amateur Doc Type Id *\n                                                    ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/amateur_doc_type_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'amateur_doc_type_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Amateur Doc Type Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlamateur_doc_type_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Amateur Doc Type Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                    "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.amateur_doc_type_id),callback:function ($$v) {_vm.$set(_vm.formData, "amateur_doc_type_id", $$v)},expression:"formData.amateur_doc_type_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                Amateur Station Type Id *\n                                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/amateur_station_type_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'amateur_station_type_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Amateur Station Type Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlamateur_station_type_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Amateur Station Type Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                        "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                            "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.amateur_station_type_id),callback:function ($$v) {_vm.$set(_vm.formData, "amateur_station_type_id", $$v)},expression:"formData.amateur_station_type_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                        Certicate Application Type Id *\n                                                                    ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/certicate_application_type_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'certicate_application_type_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Certicate Application Type Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlcerticate_application_type_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Certicate Application Type Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                                "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                                    "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.certicate_application_type_id),callback:function ($$v) {_vm.$set(_vm.formData, "certicate_application_type_id", $$v)},expression:"formData.certicate_application_type_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                                Station Location *\n                                                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Station Location"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlstation_location",attrs:{"outlined":"","dense":"","label":"Station Location","type":"text","placeholder":"Enter Station Location","list":"station_location_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.station_location),callback:function ($$v) {_vm.$set(_vm.formData, "station_location", $$v)},expression:"formData.station_location"}}),_c('datalist',{attrs:{"id":"station_location_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                                Call Sign *\n                                                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Call Sign"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlcall_sign",attrs:{"outlined":"","dense":"","label":"Call Sign","type":"text","placeholder":"Enter Call Sign","list":"call_sign_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.call_sign),callback:function ($$v) {_vm.$set(_vm.formData, "call_sign", $$v)},expression:"formData.call_sign"}}),_c('datalist',{attrs:{"id":"call_sign_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                                Issued On *\n                                                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Issued On"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"date_range"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.issued_on),callback:function ($$v) {_vm.$set(_vm.formData, "issued_on", $$v)},expression:"formData.issued_on"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.issued_on),callback:function ($$v) {_vm.$set(_vm.formData, "issued_on", $$v)},expression:"formData.issued_on"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.issued_on),callback:function ($$v) {_vm.$set(_vm.formData, "issued_on", $$v)},expression:"formData.issued_on"}})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                                Valid On *\n                                                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Valid On"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"date_range"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.valid_on),callback:function ($$v) {_vm.$set(_vm.formData, "valid_on", $$v)},expression:"formData.valid_on"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.valid_on),callback:function ($$v) {_vm.$set(_vm.formData, "valid_on", $$v)},expression:"formData.valid_on"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.valid_on),callback:function ($$v) {_vm.$set(_vm.formData, "valid_on", $$v)},expression:"formData.valid_on"}})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                                Valid Until *\n                                                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Valid Until"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"date_range"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.valid_until),callback:function ($$v) {_vm.$set(_vm.formData, "valid_until", $$v)},expression:"formData.valid_until"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.valid_until),callback:function ($$v) {_vm.$set(_vm.formData, "valid_until", $$v)},expression:"formData.valid_until"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.valid_until),callback:function ($$v) {_vm.$set(_vm.formData, "valid_until", $$v)},expression:"formData.valid_until"}})]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"type":"submit","rounded":false,"color":"primary","no-caps":"","unelevated":"","disabled":invalid,"icon":"send","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Submit\n                                                                    ")],1)],1):_vm._e()]}}])}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2)])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/amateur_operator_applications/add.vue?vue&type=template&id=23225c6b&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/amateur_operator_applications/add.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'addAmateuroperatorapplicationsPage',
  components: {},
  mixins: [page["a" /* PageMixin */], addpage["a" /* AddPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'amateur_operator_applications'
    },
    routeName: {
      type: String,
      default: 'amateur_operator_applicationsadd'
    },
    apiPath: {
      type: String,
      default: 'amateur_operator_applications/add'
    }
  },

  data() {
    return {
      formData: {
        submitted_application_id: "",
        amateur_doc_type_id: "",
        amateur_station_type_id: "",
        certicate_application_type_id: "",
        station_location: "",
        call_sign: "",
        issued_on: "",
        valid_on: "",
        valid_until: ""
      },
      issued_onPicker: false,
      valid_onPicker: false,
      valid_untilPicker: false
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Add New Amateur Operator Applications";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle
    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('amateur_operator_applications', ['saveRecord'])), {}, {
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
          this.record = response.data;
          this.id = this.record['id'];
          this.saving = false;
          this.resetForm();
          this.closeDialogs(); // close page dialog that if opened

          this.flashMsg(this.msgAfterSave);
          this.navigateTo(`/amateur_operator_applications`);
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    resetForm() {
      this.formData = {
        submitted_application_id: "",
        amateur_doc_type_id: "",
        amateur_station_type_id: "",
        certicate_application_type_id: "",
        station_location: "",
        call_sign: "",
        issued_on: "",
        valid_on: "",
        valid_until: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
      this.$EventBus.$emit("resetForm");
    }

  }),

  mounted() {}

});
// CONCATENATED MODULE: ./src/pages/amateur_operator_applications/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var amateur_operator_applications_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__("ca78");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/amateur_operator_applications/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  amateur_operator_applications_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "23225c6b",
  null
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);













runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QSelect: QSelect["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QDate: QDate["a" /* default */],QTime: QTime["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ }),

/***/ "5ec9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/forms/add.vue?vue&type=template&id=e6e357d8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Add New Forms")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18"},[_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startSaveRecord()},"reset":_vm.resetForm},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Application Id *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/application_id_option_list_2"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'application_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Application Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlapplication_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Application Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                        "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                            "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.application_id),callback:function ($$v) {_vm.$set(_vm.formData, "application_id", $$v)},expression:"formData.application_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                        Field Group Id *\n                                                    ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/field_group_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'field_group_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Field Group Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlfield_group_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Field Group Id","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.field_group_id),callback:function ($$v) {_vm.$set(_vm.formData, "field_group_id", $$v)},expression:"formData.field_group_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                        Revision No *\n                                                    ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Revision No"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlrevision_no",attrs:{"outlined":"","dense":"","label":"Revision No","type":"text","placeholder":"Enter Revision No","list":"revision_no_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.revision_no),callback:function ($$v) {_vm.$set(_vm.formData, "revision_no", $$v)},expression:"formData.revision_no"}}),_c('datalist',{attrs:{"id":"revision_no_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                        Revion Date *\n                                                    ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Revion Date"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"date_range"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.revion_date),callback:function ($$v) {_vm.$set(_vm.formData, "revion_date", $$v)},expression:"formData.revion_date"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.revion_date),callback:function ($$v) {_vm.$set(_vm.formData, "revion_date", $$v)},expression:"formData.revion_date"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.revion_date),callback:function ($$v) {_vm.$set(_vm.formData, "revion_date", $$v)},expression:"formData.revion_date"}})]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"type":"submit","rounded":false,"color":"primary","no-caps":"","unelevated":"","disabled":invalid,"icon":"send","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Submit\n                                            ")],1)],1):_vm._e()]}}])}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2)])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/forms/add.vue?vue&type=template&id=e6e357d8&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/forms/add.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'addFormsPage',
  components: {},
  mixins: [page["a" /* PageMixin */], addpage["a" /* AddPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'forms'
    },
    routeName: {
      type: String,
      default: 'formsadd'
    },
    apiPath: {
      type: String,
      default: 'forms/add'
    }
  },

  data() {
    return {
      formData: {
        application_id: "",
        field_group_id: "",
        revision_no: "",
        revion_date: ""
      },
      revion_datePicker: false
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Add New Forms";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle
    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('forms', ['saveRecord'])), {}, {
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
          this.record = response.data;
          this.id = this.record['id'];
          this.saving = false;
          this.resetForm();
          this.closeDialogs(); // close page dialog that if opened

          this.flashMsg(this.msgAfterSave);
          this.navigateTo(`/forms`);
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    resetForm() {
      this.formData = {
        application_id: "",
        field_group_id: "",
        revision_no: "",
        revion_date: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
      this.$EventBus.$emit("resetForm");
    }

  }),

  mounted() {}

});
// CONCATENATED MODULE: ./src/pages/forms/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var forms_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__("ca78");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/forms/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  forms_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "e6e357d8",
  null
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);













runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QSelect: QSelect["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QDate: QDate["a" /* default */],QTime: QTime["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ }),

/***/ "69f5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/account/changepassword.vue?vue&type=template&id=40f50e08&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-center"},[_c('div',{staticClass:"col-md-7 col-12"},[_c('div',{staticClass:"text-h5 text-bold q-my-md"},[_vm._v("Change Password")]),_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startSaveRecord()}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Current Password"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","label":"Current Password","placeholder":"Current Password","type":"password","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.oldpassword),callback:function ($$v) {_vm.$set(_vm.formData, "oldpassword", $$v)},expression:"formData.oldpassword"}})]}}],null,true)}),_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"New Password"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","label":"New Password","placeholder":"New Password","type":"password","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.newpassword),callback:function ($$v) {_vm.$set(_vm.formData, "newpassword", $$v)},expression:"formData.newpassword"}})]}}],null,true)}),_c('ValidationProvider',{attrs:{"rules":{required:true, is: _vm.formData.newpassword},"name":"Confirm new password"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","label":"Confirm new password","placeholder":"Confirm new password","type":"password","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.confirmpassword),callback:function ($$v) {_vm.$set(_vm.formData, "confirmpassword", $$v)},expression:"formData.confirmpassword"}})]}}],null,true)}),_c('div',{staticClass:"q-mt-md text-center"},[_c('q-btn',{attrs:{"disabled":invalid,"unelevated":"","type":"submit","icon":"send","color":"primary","large":"","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Change Password\n\t\t\t\t\t")],1)],1)]}}])})],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/account/changepassword.vue?vue&type=template&id=40f50e08&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/account/changepassword.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var changepasswordvue_type_script_lang_js_ = ({
  props: {
    apiUrl: {
      type: String,
      default: 'account/changepassword'
    }
  },
  mixins: [page["a" /* PageMixin */]],

  data() {
    return {
      saving: false,
      formData: {
        oldpassword: '',
        newpassword: '',
        confirmpassword: ''
      }
    };
  },

  methods: {
    async startSaveRecord() {
      const isFormValid = await this.$refs.observer.validate();

      if (isFormValid) {
        this.saving = true;
        let payload = this.formData;
        let url = this.apiUrl;
        this.$api.post(url, payload).then(response => {
          this.saving = false;
          this.resetForm();
          this.flashMsg("Password change completed");
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    resetForm() {
      this.formData = {
        oldpassword: "",
        newpassword: "",
        confirmpassword: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    }

  }
});
// CONCATENATED MODULE: ./src/pages/account/changepassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_changepasswordvue_type_script_lang_js_ = (changepasswordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/account/changepassword.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_changepasswordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var changepassword = __webpack_exports__["default"] = (component.exports);




runtime_auto_import_default()(component, 'components', {QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ }),

/***/ "7ccc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/exam_schedules/add.vue?vue&type=template&id=344daf20&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Add New Exam Schedules")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18"},[_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startSaveRecord()},"reset":_vm.resetForm},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Name *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Name"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlname",attrs:{"outlined":"","dense":"","label":"Name","type":"text","placeholder":"Enter Name","list":"name_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.name),callback:function ($$v) {_vm.$set(_vm.formData, "name", $$v)},expression:"formData.name"}}),_c('datalist',{attrs:{"id":"name_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Place *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Place"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlplace",attrs:{"outlined":"","dense":"","label":"Place","type":"text","placeholder":"Enter Place","list":"place_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.place),callback:function ($$v) {_vm.$set(_vm.formData, "place", $$v)},expression:"formData.place"}}),_c('datalist',{attrs:{"id":"place_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                City Id *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/city_id_option_list_2"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'city_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"City Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlcity_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"City Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                        "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                            "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.city_id),callback:function ($$v) {_vm.$set(_vm.formData, "city_id", $$v)},expression:"formData.city_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                        Date Time *\n                                                    ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Date Time"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"date_range"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.date_time),callback:function ($$v) {_vm.$set(_vm.formData, "date_time", $$v)},expression:"formData.date_time"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.date_time),callback:function ($$v) {_vm.$set(_vm.formData, "date_time", $$v)},expression:"formData.date_time"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.date_time),callback:function ($$v) {_vm.$set(_vm.formData, "date_time", $$v)},expression:"formData.date_time"}})]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"type":"submit","rounded":false,"color":"primary","no-caps":"","unelevated":"","disabled":invalid,"icon":"send","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Submit\n                                            ")],1)],1):_vm._e()]}}])}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2)])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/exam_schedules/add.vue?vue&type=template&id=344daf20&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/exam_schedules/add.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'addExamschedulesPage',
  components: {},
  mixins: [page["a" /* PageMixin */], addpage["a" /* AddPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'exam_schedules'
    },
    routeName: {
      type: String,
      default: 'exam_schedulesadd'
    },
    apiPath: {
      type: String,
      default: 'exam_schedules/add'
    }
  },

  data() {
    return {
      formData: {
        name: "",
        place: "",
        city_id: "",
        date_time: ""
      },
      date_timePicker: false
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Add New Exam Schedules";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle
    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('exam_schedules', ['saveRecord'])), {}, {
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
          this.record = response.data;
          this.id = this.record['id'];
          this.saving = false;
          this.resetForm();
          this.closeDialogs(); // close page dialog that if opened

          this.flashMsg(this.msgAfterSave);
          this.navigateTo(`/exam_schedules`);
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    resetForm() {
      this.formData = {
        name: "",
        place: "",
        city_id: "",
        date_time: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
      this.$EventBus.$emit("resetForm");
    }

  }),

  mounted() {}

});
// CONCATENATED MODULE: ./src/pages/exam_schedules/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var exam_schedules_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__("ca78");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/exam_schedules/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  exam_schedules_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "344daf20",
  null
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);













runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QInput: QInput["a" /* default */],QSelect: QSelect["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QIcon: QIcon["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QDate: QDate["a" /* default */],QTime: QTime["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ }),

/***/ "89f4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/forms/edit.vue?vue&type=template&id=3f2e1a20&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Edit Forms")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18"},[_c('div',[(!_vm.loading)?_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startRecordUpdate()}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Application Id *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/application_id_option_list_2"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'application_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Application Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlapplication_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Application Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                            "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.application_id),callback:function ($$v) {_vm.$set(_vm.formData, "application_id", $$v)},expression:"formData.application_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Field Group Id *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/field_group_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'field_group_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Field Group Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlfield_group_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Field Group Id","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.field_group_id),callback:function ($$v) {_vm.$set(_vm.formData, "field_group_id", $$v)},expression:"formData.field_group_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Revision No *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Revision No"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlrevision_no",attrs:{"outlined":"","dense":"","label":"Revision No","type":"text","placeholder":"Enter Revision No","list":"revision_no_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.revision_no),callback:function ($$v) {_vm.$set(_vm.formData, "revision_no", $$v)},expression:"formData.revision_no"}}),_c('datalist',{attrs:{"id":"revision_no_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Revion Date *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Revion Date"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"date_range"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.revion_date),callback:function ($$v) {_vm.$set(_vm.formData, "revion_date", $$v)},expression:"formData.revion_date"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.revion_date),callback:function ($$v) {_vm.$set(_vm.formData, "revion_date", $$v)},expression:"formData.revion_date"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.revion_date),callback:function ($$v) {_vm.$set(_vm.formData, "revion_date", $$v)},expression:"formData.revion_date"}})]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"rounded":false,"color":"primary","no-caps":"","unelevated":"","type":"submit","disabled":invalid,"icon":"send","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Update\n                                                ")],1)],1):_vm._e()]}}],null,false,1351342245)}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2):_c('div',{staticClass:"q-pa-sm text-center"},[_c('q-spinner',{attrs:{"size":40,"color":"accent","indeterminate":""}}),_vm._v("\n                                        Loading...\n                                    ")],1)])])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/forms/edit.vue?vue&type=template&id=3f2e1a20&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// EXTERNAL MODULE: ./src/mixins/editpage.js
var editpage = __webpack_require__("b858");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/forms/edit.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var editvue_type_script_lang_js_ = ({
  name: 'editFormsPage',
  components: {},
  mixins: [page["a" /* PageMixin */], editpage["a" /* EditPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'forms'
    },
    idName: {
      type: String,
      default: 'id'
    },
    routeName: {
      type: String,
      default: 'formsedit'
    },
    pagePath: {
      type: String,
      default: 'forms/edit'
    },
    apiPath: {
      type: String,
      default: 'forms/edit'
    }
  },

  data() {
    return {
      formData: {
        application_id: "",
        field_group_id: "",
        revision_no: "",
        revion_date: ""
      },
      revion_datePicker: false
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Edit Forms";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle // set browser page title

    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('forms', ['updateRecord', 'fetchRecord'])), {}, {
    async startRecordUpdate() {
      const isFormValid = await this.$refs.observer.validate();

      if (isFormValid) {
        this.saving = true;
        let id = this.id;
        let url = this.apiUrl;
        let payload = this.normalizedFormData();
        let data = {
          id,
          url,
          payload
        };
        this.updateRecord(data).then(response => {
          this.saving = false;
          this.flashMsg(this.msgAfterUpdate);
          this.resetForm();
          this.closeDialogs(); // close page dialog that if opened

          this.navigateTo(`/forms`);
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    updateFormFields: function () {//update form fields value after load from api
      //e.g convert fieldvalue (value,value2,value2) to array 
    },

    resetForm() {
      //reset form fields value
      this.formData = {
        application_id: "",
        field_group_id: "",
        revision_no: "",
        revion_date: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      }); //raise event to reset other custom form components

      this.$EventBus.$emit("resetForm");
    }

  })
});
// CONCATENATED MODULE: ./src/pages/forms/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var forms_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__("ca78");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/forms/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  forms_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3f2e1a20",
  null
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);














runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QSelect: QSelect["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QDate: QDate["a" /* default */],QTime: QTime["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */],QSpinner: QSpinner["a" /* default */]});


/***/ }),

/***/ "8f54":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPageMixin; });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e6cf");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);

const AddPageMixin = {
  props: {
    msgAfterSave: {
      type: String,
      default: "Record added successfully"
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showSubmitButton: {
      type: Boolean,
      default: true
    },
    modelBind: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  data: function () {
    return {
      record: {},
      inputSearch: "",
      id: "",
      saving: false,
      ready: false,
      isPwd: true
    };
  },
  computed: {
    apiUrl: function () {
      return this.apiPath;
    }
  },
  watch: {
    modelBind: function () {
      this.updateFormData();
    }
  },
  methods: {
    async submit() {
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
          this.record = response.data;
          this.saving = false;
          this.closeDialogs(); // close page dialog that if opened

          this.$emit("submited", this.record);
        }, response => {
          this.saving = false;
          this.$emit("error", response);
        });
      }
    },

    updateFormData: function () {
      for (const key in this.modelBind) {
        this.formData[key] = this.modelBind[key];
      }
    },
    uploadcompleted: function (arg) {
      this.formData[arg.field] = arg.result;
    }
  },
  created: function () {},
  mounted: function () {
    this.updateFormData();
    this.showError = false;
    this.ready = true;
  }
};

/***/ }),

/***/ "b858":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPageMixin; });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e6cf");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);

const EditPageMixin = {
  props: {
    id: [String, Number],
    msgAfterUpdate: {
      type: String,
      default: "Record updated successfully"
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showSubmitButton: {
      type: Boolean,
      default: true
    },
    modelBind: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  data: function () {
    return {
      inputSearch: "",
      errorMsg: "",
      loading: false,
      ready: false,
      saving: false,
      record: {}
    };
  },
  computed: {
    apiUrl: function () {
      if (this.id) {
        return this.apiPath + '/' + encodeURIComponent(this.id);
      }

      return this.apiPath;
    }
  },
  methods: {
    async submit() {
      const isFormValid = await this.$refs.observer.validate();

      if (isFormValid) {
        this.saving = true;
        let id = this.id;
        let url = this.apiUrl;
        let payload = this.normalizedFormData();
        let data = {
          id,
          url,
          payload
        };
        this.updateRecord(data).then(response => {
          this.record = response.data;
          this.saving = false;
          this.closeDialogs(); // close page dialog that if opened

          this.$emit("submited", this.id);
        }, response => {
          this.saving = false;
          this.$emit("error", response);
        });
      }
    },

    load: function () {
      var url = this.apiUrl;
      this.loading = true;
      this.ready = false; // hide other components until main page is ready

      this.$api.get(url).then(response => {
        this.loading = false;
        this.ready = true;
        this.formData = response.data;
        this.updateFormFields();
      }, response => {
        this.resetForm();
        this.loading = false;
        this.showPageRequestError(response);
      });
    }
  },
  watch: {
    $route(to, from) {
      //only fetch data when navigated to this page
      if (to.name == this.routeName) {
        this.load();
      }
    },

    apiUrl: function () {
      this.load();
    },
    modelBind: function () {
      for (key in this.modelBind) {
        this.formData[key] = this.modelBind[key];
      }
    }
  },
  mounted: function () {
    this.load();
  }
};

/***/ }),

/***/ "c3821":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/account/accountview.vue?vue&type=template&id=633b0ffe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("My Account")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col comp-grid"},[_c('div',{},[_c('div',[(!_vm.loading)?_c('div',[_c('q-card',{staticClass:"q-pa-lg q-mb-md nice-shadow-18"},[_c('div',{staticClass:"row q-col-gutter-lg"},[_c('div',{staticClass:"col-auto"},[_c('image-viewer',{attrs:{"ratio":1/1,"image-size":"medium","src":_vm.$UserPhoto}})],1),_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h4 text-primary"},[_vm._v(" "+_vm._s(_vm.$UserName)+" ")]),_c('div',{staticClass:"text-caption"},[_vm._v(" "+_vm._s(_vm.$UserEmail)+" ")]),(_vm.$UserRoleNames.length)?_c('div',{staticClass:"text-grey text-capitalize"},[_vm._v(_vm._s(_vm.$UserRoleNames.toString()))]):_vm._e()])])]),_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-2 col-sm-3 col-12"},[_c('q-card',{staticClass:"nice-shadow-18"},[_c('q-tabs',{staticClass:"text-primary",attrs:{"vertical":"","dense":"","no-caps":"","inline-label":""},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('q-tab',{staticStyle:{"justify-content":"initial"},attrs:{"name":"accountview","icon":"account_box","label":"Account Detail"}}),_c('q-tab',{staticStyle:{"justify-content":"initial"},attrs:{"name":"accountedit","icon":"edit","label":"Edit Account"}}),_c('q-tab',{staticStyle:{"justify-content":"initial"},attrs:{"name":"changepassword","icon":"lock","label":"Change Password"}})],1)],1)],1),_c('div',{staticClass:"col-md-10 col-sm-9 col-12"},[_c('q-card',{staticClass:"nice-shadow-18 q-pa-sm"},[_c('q-tab-panels',{attrs:{"animated":"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('q-tab-panel',{attrs:{"name":"accountview"}},[(!_vm.loading && _vm.ready)?_c('div',[_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Id: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.id))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Created At: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.created_at))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Updated At: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.updated_at))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Barangay Id: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.barangay_id))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Username: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.username))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("First Name: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.first_name))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Last Name: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.last_name))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Middle Name: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.middle_name))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Dob: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.dob))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Gender: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.gender))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Nationality: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.nationality))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Unit No: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.unit_no))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Street: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.street))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Contact: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.contact))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Email: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.email))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("E Signature: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.e_signature))])],1)],1),_c('q-separator')],1):_vm._e(),(_vm.loading)?_c('div',{staticClass:"q-pa-sm text-center"},[_c('q-spinner',{attrs:{"size":40,"color":"accent","indeterminate":""}}),_vm._v("\n                                                        Loading...\n                                                    ")],1):_vm._e()]),_c('q-tab-panel',{attrs:{"name":"accountedit"}},[_c('div',{staticClass:"reset-grid"},[_c('account-edit-page')],1)]),_c('q-tab-panel',{attrs:{"name":"changepassword"}},[_c('change-password-page')],1)],1)],1)],1)])],1):_c('div',{staticClass:"q-pa-lg text-center"},[_c('q-spinner',{attrs:{"size":50,"color":"accent","indeterminate":""}}),_vm._v("\n                                    Loading...\n                                ")],1)])])])])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/account/accountview.vue?vue&type=template&id=633b0ffe&scoped=true&

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// EXTERNAL MODULE: ./src/mixins/viewpage.js
var viewpage = __webpack_require__("19a6");

// EXTERNAL MODULE: ./src/pages/account/accountedit.vue + 4 modules
var accountedit = __webpack_require__("1fd7");

// EXTERNAL MODULE: ./src/pages/account/changepassword.vue + 4 modules
var changepassword = __webpack_require__("69f5");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/account/accountview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var accountviewvue_type_script_lang_js_ = ({
  name: 'accountviewUsersPage',
  components: {
    AccountEditPage: accountedit["default"],
    ChangePasswordPage: changepassword["default"]
  },
  mixins: [page["a" /* PageMixin */], viewpage["a" /* ViewPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'users'
    },
    routeName: {
      type: String,
      default: 'usersaccountview'
    },
    pagePath: {
      type: String,
      default: 'account'
    },
    apiPath: {
      type: String,
      default: 'account'
    }
  },

  data() {
    return {
      item: {
        default: {}
      },
      tab: 'accountview'
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "My Account";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle
    };
  },

  methods: {},
  watch: {
    $route(to, from) {
      //only fetch data when navigated to this page
      if (to.name == this.routeName) {
        this.load();
      }
    }

  }
});
// CONCATENATED MODULE: ./src/pages/account/accountview.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_accountviewvue_type_script_lang_js_ = (accountviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__("429b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTab.js
var QTab = __webpack_require__("7460");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__("adad");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__("823b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/account/accountview.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_accountviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "633b0ffe",
  null
  
)

/* harmony default export */ var accountview = __webpack_exports__["default"] = (component.exports);











runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QTabs: QTabs["a" /* default */],QTab: QTab["a" /* default */],QTabPanels: QTabPanels["a" /* default */],QTabPanel: QTabPanel["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QSeparator: QSeparator["a" /* default */],QSpinner: QSpinner["a" /* default */]});


/***/ }),

/***/ "c770":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPageMixin; });
const ListPageMixin = {
  props: {
    paginate: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    showBreadcrumbs: {
      type: Boolean,
      default: true
    },
    showSearch: {
      type: Boolean,
      default: true
    },
    addButton: {
      type: Boolean,
      default: true
    },
    editButton: {
      type: Boolean,
      default: true
    },
    deleteButton: {
      type: Boolean,
      default: true
    },
    viewButton: {
      type: Boolean,
      default: true
    },
    exportButton: {
      type: Boolean,
      default: true
    },
    importButton: {
      type: Boolean,
      default: false
    },
    listSequence: {
      type: Boolean,
      default: true
    },
    multiCheckbox: {
      type: Boolean,
      default: true
    },
    emptyRecordMsg: {
      type: String,
      default: "No record found"
    },
    msgBeforeDelete: {
      type: String,
      default: "Are you sure you want to delete this record?"
    },
    msgAfterDelete: {
      type: String,
      default: "Record deleted successfully"
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    search: {
      type: String,
      default: ''
    },
    fieldName: String,
    fieldValue: String,
    sortBy: {
      type: String,
      default: ''
    },
    sortType: {
      type: String,
      default: '' //desc or asc

    },
    exportFormats: {
      type: Array,
      default: function () {
        return ['print', 'pdf', 'csv', 'excel'];
      }
    }
  },
  data: function () {
    return {
      totalRecords: 0,
      recordCount: 0,
      loading: false,
      ready: false,
      singleSelect: false,
      selectedItems: [],
      pagination: {
        page: 1,
        rowsPerPage: 20,
        sortBy: '',
        rowsNumber: 10,
        descending: true
      },
      deleting: false,
      includeFilters: true,
      filters: {},
      filtersLabel: {},
      searchText: '',
      errorMsg: ''
    };
  },
  computed: {
    apiUrl: function () {
      var _this$pagination$sort;

      let path = this.apiPath;

      if (this.fieldName) {
        path = path + '/' + encodeURIComponent(this.fieldName) + '/' + encodeURIComponent(this.fieldValue);
      }

      let route = this.$route.query;

      if (this.sortBy) {
        this.pagination.sortBy = this.sortBy;
      } else if (route.sortby) {
        this.pagination.sortBy = route.sortby;
      }

      if (this.sortType) {
        this.pagination.descending = this.sortType.toLowerCase() == 'desc';
      } else if (route.sorttype) {
        this.pagination.descending = route.sorttype.toLowerCase() == 'desc';
      }

      if (route.search) {
        this.searchText = route.search;
      }

      let orderType = this.pagination.descending ? 'desc' : 'asc';
      let query = {
        page: this.pagination.page,
        limit: this.pagination.rowsPerPage,
        orderby: (_this$pagination$sort = this.pagination.sortBy) !== null && _this$pagination$sort !== void 0 ? _this$pagination$sort : '',
        ordertype: orderType
      };

      if (this.searchText) {
        query.search = this.searchText;
      }

      let filters = this.filters;

      for (var key in filters) {
        if (filters[key] && filters[key].toString() != '') {
          query[key] = filters[key];
        }
      }

      const queryParams = this.$utils.serializeQuery(query);
      return path + "?" + queryParams;
    },
    recordsPosition: function () {
      return Math.min(this.pagination.page * this.pagination.rowsPerPage, this.totalRecords);
    },
    totalPages: function () {
      if (this.totalRecords > this.pagination.rowsPerPage) {
        return Math.ceil(this.totalRecords / this.pagination.rowsPerPage);
      }

      return 1;
    },
    finishedLoading: function () {
      if (this.recordCount < this.pagination.rowsPerPage && this.records.length) {
        return true;
      }

      return false;
    },
    canLoadMore: function () {
      if (this.loading || this.finishedLoading) {
        return false;
      }

      return true;
    }
  },
  methods: {
    setPagination: function (props) {
      let {
        page,
        rowsPerPage,
        rowsNumber,
        sortBy,
        descending
      } = props.pagination;
      this.pagination.sortBy = sortBy;
      this.pagination.descending = descending;
    },
    reload: function () {
      this.records = [];
      let query = this.$route.query;

      if (query.limit) {
        this.limit = query.limit;
      }

      if (query.page) {
        this.page = query.page;
      }

      if (query.sortby) {
        this.pagination.sortBy = query.sortby;
      }

      if (query.sorttype) {
        this.pagination.descending = query.sorttype == 'desc';
      }

      if (query.search) {
        this.searchText = query.search;
      }

      this.pagination.rowsPerPage = this.limit;
      this.pagination.page = this.page;
      this.load();
    },
    doSearch: function () {
      this.includeFilters = false;
    },
    deleteItem: function (id) {
      if (Array.isArray(id)) {
        id = id.map(value => value[this.primaryKey]);
      }

      if (id) {
        let title = "Delete record";
        let prompt = this.msgBeforeDelete;
        this.$q.dialog({
          title: title,
          message: prompt,
          cancel: true,
          persistent: true
        }).onOk(() => {
          var url = this.pageName + '/delete/' + id.toString();
          var data = {
            id,
            url
          };
          this.deleteRecord(data).then(response => {
            this.flashMsg(this.msgAfterDelete);
          }, response => {
            this.showPageRequestError(response);
          });
        }).onCancel(() => {// console.log('>>>> Cancel')
        }).onDismiss(() => {// console.log('I am triggered on both OK and Cancel')
        });
      }
    }
  },
  mounted: function () {
    this.showError = false;
    this.singleSelect = !this.multiCheckbox;
    this.reload();
  },
  created: function () {
    this.$on('RefreshPage', () => {
      this.load();
    });
  }
};

/***/ }),

/***/ "f375":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/amateur_operator_applications/edit.vue?vue&type=template&id=109176d2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Edit Amateur Operator Applications")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18"},[_c('div',[(!_vm.loading)?_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startRecordUpdate()}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Submitted Application *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/submitted_application_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'submitted_application_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Submitted Application"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlsubmitted_application_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Submitted Application","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                            "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.submitted_application_id),callback:function ($$v) {_vm.$set(_vm.formData, "submitted_application_id", $$v)},expression:"formData.submitted_application_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Amateur Doc Type Id *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/amateur_doc_type_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'amateur_doc_type_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Amateur Doc Type Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlamateur_doc_type_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Amateur Doc Type Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                    "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                        "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.amateur_doc_type_id),callback:function ($$v) {_vm.$set(_vm.formData, "amateur_doc_type_id", $$v)},expression:"formData.amateur_doc_type_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                    Amateur Station Type Id *\n                                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/amateur_station_type_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'amateur_station_type_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Amateur Station Type Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlamateur_station_type_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Amateur Station Type Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                            "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                                "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.amateur_station_type_id),callback:function ($$v) {_vm.$set(_vm.formData, "amateur_station_type_id", $$v)},expression:"formData.amateur_station_type_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                            Certicate Application Type Id *\n                                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/certicate_application_type_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'certicate_application_type_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Certicate Application Type Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlcerticate_application_type_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Certicate Application Type Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                                    "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                                        "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.certicate_application_type_id),callback:function ($$v) {_vm.$set(_vm.formData, "certicate_application_type_id", $$v)},expression:"formData.certicate_application_type_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                                    Station Location *\n                                                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Station Location"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlstation_location",attrs:{"outlined":"","dense":"","label":"Station Location","type":"text","placeholder":"Enter Station Location","list":"station_location_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.station_location),callback:function ($$v) {_vm.$set(_vm.formData, "station_location", $$v)},expression:"formData.station_location"}}),_c('datalist',{attrs:{"id":"station_location_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                                    Call Sign *\n                                                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Call Sign"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlcall_sign",attrs:{"outlined":"","dense":"","label":"Call Sign","type":"text","placeholder":"Enter Call Sign","list":"call_sign_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.call_sign),callback:function ($$v) {_vm.$set(_vm.formData, "call_sign", $$v)},expression:"formData.call_sign"}}),_c('datalist',{attrs:{"id":"call_sign_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                                    Issued On *\n                                                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Issued On"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"date_range"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.issued_on),callback:function ($$v) {_vm.$set(_vm.formData, "issued_on", $$v)},expression:"formData.issued_on"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.issued_on),callback:function ($$v) {_vm.$set(_vm.formData, "issued_on", $$v)},expression:"formData.issued_on"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.issued_on),callback:function ($$v) {_vm.$set(_vm.formData, "issued_on", $$v)},expression:"formData.issued_on"}})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                                    Valid On *\n                                                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Valid On"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"date_range"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.valid_on),callback:function ($$v) {_vm.$set(_vm.formData, "valid_on", $$v)},expression:"formData.valid_on"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.valid_on),callback:function ($$v) {_vm.$set(_vm.formData, "valid_on", $$v)},expression:"formData.valid_on"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.valid_on),callback:function ($$v) {_vm.$set(_vm.formData, "valid_on", $$v)},expression:"formData.valid_on"}})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                                    Valid Until *\n                                                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Valid Until"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"date_range"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.valid_until),callback:function ($$v) {_vm.$set(_vm.formData, "valid_until", $$v)},expression:"formData.valid_until"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.valid_until),callback:function ($$v) {_vm.$set(_vm.formData, "valid_until", $$v)},expression:"formData.valid_until"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.valid_until),callback:function ($$v) {_vm.$set(_vm.formData, "valid_until", $$v)},expression:"formData.valid_until"}})]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"rounded":false,"color":"primary","no-caps":"","unelevated":"","type":"submit","disabled":invalid,"icon":"send","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Update\n                                                                        ")],1)],1):_vm._e()]}}],null,false,834283385)}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2):_c('div',{staticClass:"q-pa-sm text-center"},[_c('q-spinner',{attrs:{"size":40,"color":"accent","indeterminate":""}}),_vm._v("\n                                                                Loading...\n                                                            ")],1)])])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/amateur_operator_applications/edit.vue?vue&type=template&id=109176d2&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// EXTERNAL MODULE: ./src/mixins/editpage.js
var editpage = __webpack_require__("b858");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/amateur_operator_applications/edit.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var editvue_type_script_lang_js_ = ({
  name: 'editAmateuroperatorapplicationsPage',
  components: {},
  mixins: [page["a" /* PageMixin */], editpage["a" /* EditPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'amateur_operator_applications'
    },
    idName: {
      type: String,
      default: 'id'
    },
    routeName: {
      type: String,
      default: 'amateur_operator_applicationsedit'
    },
    pagePath: {
      type: String,
      default: 'amateur_operator_applications/edit'
    },
    apiPath: {
      type: String,
      default: 'amateur_operator_applications/edit'
    }
  },

  data() {
    return {
      formData: {
        submitted_application_id: "",
        amateur_doc_type_id: "",
        amateur_station_type_id: "",
        certicate_application_type_id: "",
        station_location: "",
        call_sign: "",
        issued_on: "",
        valid_on: "",
        valid_until: ""
      },
      issued_onPicker: false,
      valid_onPicker: false,
      valid_untilPicker: false
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Edit Amateur Operator Applications";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle // set browser page title

    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('amateur_operator_applications', ['updateRecord', 'fetchRecord'])), {}, {
    async startRecordUpdate() {
      const isFormValid = await this.$refs.observer.validate();

      if (isFormValid) {
        this.saving = true;
        let id = this.id;
        let url = this.apiUrl;
        let payload = this.normalizedFormData();
        let data = {
          id,
          url,
          payload
        };
        this.updateRecord(data).then(response => {
          this.saving = false;
          this.flashMsg(this.msgAfterUpdate);
          this.resetForm();
          this.closeDialogs(); // close page dialog that if opened

          this.navigateTo(`/amateur_operator_applications`);
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    updateFormFields: function () {//update form fields value after load from api
      //e.g convert fieldvalue (value,value2,value2) to array 
    },

    resetForm() {
      //reset form fields value
      this.formData = {
        submitted_application_id: "",
        amateur_doc_type_id: "",
        amateur_station_type_id: "",
        certicate_application_type_id: "",
        station_location: "",
        call_sign: "",
        issued_on: "",
        valid_on: "",
        valid_until: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      }); //raise event to reset other custom form components

      this.$EventBus.$emit("resetForm");
    }

  })
});
// CONCATENATED MODULE: ./src/pages/amateur_operator_applications/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var amateur_operator_applications_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__("ca78");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/amateur_operator_applications/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  amateur_operator_applications_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "109176d2",
  null
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);














runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QSelect: QSelect["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QDate: QDate["a" /* default */],QTime: QTime["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */],QSpinner: QSpinner["a" /* default */]});


/***/ }),

/***/ "f6db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/operator_certificate_applications/edit.vue?vue&type=template&id=5d95922e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Edit Operator Certificate Applications")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18"},[_c('div',[(!_vm.loading)?_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startRecordUpdate()}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Certicate Application Type Id *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/certicate_application_type_id_option_list_2"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'certicate_application_type_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Certicate Application Type Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlcerticate_application_type_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Certicate Application Type Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                            "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.certicate_application_type_id),callback:function ($$v) {_vm.$set(_vm.formData, "certicate_application_type_id", $$v)},expression:"formData.certicate_application_type_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Submitted Application Id *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/submitted_application_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'submitted_application_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Submitted Application Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlsubmitted_application_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Submitted Application Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                    "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                        "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.submitted_application_id),callback:function ($$v) {_vm.$set(_vm.formData, "submitted_application_id", $$v)},expression:"formData.submitted_application_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                    Operator Certificate Type Id *\n                                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/operator_certificate_type_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'operator_certificate_type_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Operator Certificate Type Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrloperator_certificate_type_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Operator Certificate Type Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                            "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                                "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.operator_certificate_type_id),callback:function ($$v) {_vm.$set(_vm.formData, "operator_certificate_type_id", $$v)},expression:"formData.operator_certificate_type_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                            Registration No *\n                                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Registration No"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlregistration_no",attrs:{"outlined":"","dense":"","label":"Registration No","type":"text","placeholder":"Enter Registration No","list":"registration_no_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.registration_no),callback:function ($$v) {_vm.$set(_vm.formData, "registration_no", $$v)},expression:"formData.registration_no"}}),_c('datalist',{attrs:{"id":"registration_no_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                            Place Of Exam *\n                                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Place Of Exam"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlplace_of_exam",attrs:{"outlined":"","dense":"","label":"Place Of Exam","type":"text","placeholder":"Enter Place Of Exam","list":"place_of_exam_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.place_of_exam),callback:function ($$v) {_vm.$set(_vm.formData, "place_of_exam", $$v)},expression:"formData.place_of_exam"}}),_c('datalist',{attrs:{"id":"place_of_exam_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                            Date Of Exam *\n                                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Date Of Exam"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"date_range"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.date_of_exam),callback:function ($$v) {_vm.$set(_vm.formData, "date_of_exam", $$v)},expression:"formData.date_of_exam"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.date_of_exam),callback:function ($$v) {_vm.$set(_vm.formData, "date_of_exam", $$v)},expression:"formData.date_of_exam"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.date_of_exam),callback:function ($$v) {_vm.$set(_vm.formData, "date_of_exam", $$v)},expression:"formData.date_of_exam"}})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                                            Rating *\n                                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Rating"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlrating",attrs:{"outlined":"","dense":"","label":"Rating","type":"number","placeholder":"Enter Rating","step":"any","list":"rating_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.rating),callback:function ($$v) {_vm.$set(_vm.formData, "rating", $$v)},expression:"formData.rating"}}),_c('datalist',{attrs:{"id":"rating_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"rounded":false,"color":"primary","no-caps":"","unelevated":"","type":"submit","disabled":invalid,"icon":"send","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Update\n                                                                ")],1)],1):_vm._e()]}}],null,false,3713031593)}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2):_c('div',{staticClass:"q-pa-sm text-center"},[_c('q-spinner',{attrs:{"size":40,"color":"accent","indeterminate":""}}),_vm._v("\n                                                        Loading...\n                                                    ")],1)])])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/operator_certificate_applications/edit.vue?vue&type=template&id=5d95922e&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// EXTERNAL MODULE: ./src/mixins/editpage.js
var editpage = __webpack_require__("b858");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/operator_certificate_applications/edit.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var editvue_type_script_lang_js_ = ({
  name: 'editOperatorcertificateapplicationsPage',
  components: {},
  mixins: [page["a" /* PageMixin */], editpage["a" /* EditPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'operator_certificate_applications'
    },
    idName: {
      type: String,
      default: 'id'
    },
    routeName: {
      type: String,
      default: 'operator_certificate_applicationsedit'
    },
    pagePath: {
      type: String,
      default: 'operator_certificate_applications/edit'
    },
    apiPath: {
      type: String,
      default: 'operator_certificate_applications/edit'
    }
  },

  data() {
    return {
      formData: {
        certicate_application_type_id: "",
        submitted_application_id: "",
        operator_certificate_type_id: "",
        registration_no: "",
        place_of_exam: "",
        date_of_exam: "",
        rating: ""
      },
      date_of_examPicker: false
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Edit Operator Certificate Applications";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle // set browser page title

    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('operator_certificate_applications', ['updateRecord', 'fetchRecord'])), {}, {
    async startRecordUpdate() {
      const isFormValid = await this.$refs.observer.validate();

      if (isFormValid) {
        this.saving = true;
        let id = this.id;
        let url = this.apiUrl;
        let payload = this.normalizedFormData();
        let data = {
          id,
          url,
          payload
        };
        this.updateRecord(data).then(response => {
          this.saving = false;
          this.flashMsg(this.msgAfterUpdate);
          this.resetForm();
          this.closeDialogs(); // close page dialog that if opened

          this.navigateTo(`/operator_certificate_applications`);
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    updateFormFields: function () {//update form fields value after load from api
      //e.g convert fieldvalue (value,value2,value2) to array 
    },

    resetForm() {
      //reset form fields value
      this.formData = {
        certicate_application_type_id: "",
        submitted_application_id: "",
        operator_certificate_type_id: "",
        registration_no: "",
        place_of_exam: "",
        date_of_exam: "",
        rating: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      }); //raise event to reset other custom form components

      this.$EventBus.$emit("resetForm");
    }

  })
});
// CONCATENATED MODULE: ./src/pages/operator_certificate_applications/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var operator_certificate_applications_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__("ca78");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/operator_certificate_applications/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  operator_certificate_applications_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5d95922e",
  null
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);














runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QSelect: QSelect["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QDate: QDate["a" /* default */],QTime: QTime["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */],QSpinner: QSpinner["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=chunk-common.f506bbc1.js.map