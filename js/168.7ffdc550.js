(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[168],{

/***/ "f681":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/radio_equipments/edit.vue?vue&type=template&id=cecf31e4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Edit Radio Equipments")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18"},[_c('div',[(!_vm.loading)?_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startRecordUpdate()}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Amateur Operator Application Id *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/amateur_operator_application_id_option_list"},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'amateur_operator_application_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Amateur Operator Application Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlamateur_operator_application_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Amateur Operator Application Id","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                            "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1)]}},{key:"selected-item",fn:function(scope){return [(scope.opt)?_c('q-item',[(scope.opt.image)?_c('q-item-section',{attrs:{"avatar":""}},[_c('image-viewer',{attrs:{"src":scope.opt.image,"image-size":"small"}})],1):_vm._e(),_c('q-item-section',[_c('q-item-label'),_vm._v(_vm._s(scope.opt.label)+"\n                                                                                "),(scope.opt.caption)?_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(scope.opt.caption))]):_vm._e()],1)],1):_vm._e()]}}],null,true),model:{value:(_vm.formData.amateur_operator_application_id),callback:function ($$v) {_vm.$set(_vm.formData, "amateur_operator_application_id", $$v)},expression:"formData.amateur_operator_application_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Make *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Make"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlmake",attrs:{"outlined":"","dense":"","label":"Make","type":"text","placeholder":"Enter Make","list":"make_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.make),callback:function ($$v) {_vm.$set(_vm.formData, "make", $$v)},expression:"formData.make"}}),_c('datalist',{attrs:{"id":"make_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Model *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Model"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlmodel",attrs:{"outlined":"","dense":"","label":"Model","type":"text","placeholder":"Enter Model","list":"model_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.model),callback:function ($$v) {_vm.$set(_vm.formData, "model", $$v)},expression:"formData.model"}}),_c('datalist',{attrs:{"id":"model_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Serial No *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Serial No"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlserial_no",attrs:{"outlined":"","dense":"","label":"Serial No","type":"text","placeholder":"Enter Serial No","list":"serial_no_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.serial_no),callback:function ($$v) {_vm.$set(_vm.formData, "serial_no", $$v)},expression:"formData.serial_no"}}),_c('datalist',{attrs:{"id":"serial_no_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Frequency *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Frequency"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlfrequency",attrs:{"outlined":"","dense":"","label":"Frequency","type":"text","placeholder":"Enter Frequency","list":"frequency_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.frequency),callback:function ($$v) {_vm.$set(_vm.formData, "frequency", $$v)},expression:"formData.frequency"}}),_c('datalist',{attrs:{"id":"frequency_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Note *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Note"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlnote",attrs:{"outlined":"","dense":"","label":"Note","type":"text","placeholder":"Enter Note","list":"note_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.note),callback:function ($$v) {_vm.$set(_vm.formData, "note", $$v)},expression:"formData.note"}}),_c('datalist',{attrs:{"id":"note_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"rounded":false,"color":"primary","no-caps":"","unelevated":"","type":"submit","disabled":invalid,"icon":"send","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Update\n                                                ")],1)],1):_vm._e()]}}],null,false,2630993454)}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2):_c('div',{staticClass:"q-pa-sm text-center"},[_c('q-spinner',{attrs:{"size":40,"color":"accent","indeterminate":""}}),_vm._v("\n                                        Loading...\n                                    ")],1)])])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/radio_equipments/edit.vue?vue&type=template&id=cecf31e4&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/radio_equipments/edit.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'editRadioequipmentsPage',
  components: {},
  mixins: [page["a" /* PageMixin */], editpage["a" /* EditPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'radio_equipments'
    },
    idName: {
      type: String,
      default: 'id'
    },
    routeName: {
      type: String,
      default: 'radio_equipmentsedit'
    },
    pagePath: {
      type: String,
      default: 'radio_equipments/edit'
    },
    apiPath: {
      type: String,
      default: 'radio_equipments/edit'
    }
  },

  data() {
    return {
      formData: {
        amateur_operator_application_id: "",
        make: "",
        model: "",
        serial_no: "",
        frequency: "",
        note: ""
      }
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Edit Radio Equipments";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle // set browser page title

    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('radio_equipments', ['updateRecord', 'fetchRecord'])), {}, {
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

          this.navigateTo(`/radio_equipments`);
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
        amateur_operator_application_id: "",
        make: "",
        model: "",
        serial_no: "",
        frequency: "",
        note: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      }); //raise event to reset other custom form components

      this.$EventBus.$emit("resetForm");
    }

  })
});
// CONCATENATED MODULE: ./src/pages/radio_equipments/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var radio_equipments_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/radio_equipments/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  radio_equipments_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "cecf31e4",
  null
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);










runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QSelect: QSelect["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */],QSpinner: QSpinner["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=168.7ffdc550.js.map