(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[213],{

/***/ "9e22":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/users/edit.vue?vue&type=template&id=28c9027a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Edit Users")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18"},[_c('div',[(!_vm.loading)?_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startRecordUpdate()}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Barangay Id *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Barangay Id"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlbarangay_id",attrs:{"outlined":"","dense":"","label":"Barangay Id","type":"number","placeholder":"Enter Barangay Id","step":"any","list":"barangay_id_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.barangay_id),callback:function ($$v) {_vm.$set(_vm.formData, "barangay_id", $$v)},expression:"formData.barangay_id"}}),_c('datalist',{attrs:{"id":"barangay_id_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Username *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('check-duplicate',{attrs:{"check-path":"components_data/users_username_exist/"},scopedSlots:_vm._u([{key:"default",fn:function(checker){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Username"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlusername",attrs:{"outlined":"","dense":"","loading":checker.loading,"label":"Username","type":"text","placeholder":"Enter Username","list":"username_list","error":(invalid && validated) || checker.exist,"error-message":errors[0] || 'Not available'},on:{"blur":checker.check},model:{value:(_vm.formData.username),callback:function ($$v) {_vm.$set(_vm.formData, "username", $$v)},expression:"formData.username"}}),_c('datalist',{attrs:{"id":"username_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})]}}],null,true),model:{value:(_vm.formData.username),callback:function ($$v) {_vm.$set(_vm.formData, "username", $$v)},expression:"formData.username"}})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    First Name *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"First Name"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
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
return [_c('q-input',{ref:"ctrlcontact",attrs:{"outlined":"","dense":"","label":"Contact","type":"text","placeholder":"Enter Contact","list":"contact_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.contact),callback:function ($$v) {_vm.$set(_vm.formData, "contact", $$v)},expression:"formData.contact"}}),_c('datalist',{attrs:{"id":"contact_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Email *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('check-duplicate',{attrs:{"check-path":"components_data/users_email_exist/"},scopedSlots:_vm._u([{key:"default",fn:function(checker){return [_c('ValidationProvider',{attrs:{"rules":{required:true, email:true},"name":"Email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlemail",attrs:{"outlined":"","dense":"","loading":checker.loading,"label":"Email","type":"email","placeholder":"Enter Email","list":"email_list","error":(invalid && validated) || checker.exist,"error-message":errors[0] || 'Not available'},on:{"blur":checker.check},model:{value:(_vm.formData.email),callback:function ($$v) {_vm.$set(_vm.formData, "email", $$v)},expression:"formData.email"}}),_c('datalist',{attrs:{"id":"email_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})]}}],null,true),model:{value:(_vm.formData.email),callback:function ($$v) {_vm.$set(_vm.formData, "email", $$v)},expression:"formData.email"}})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    Picture *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Picture"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('div',{staticClass:"q-mb-sm"},[_c('q-uploader-input',{staticStyle:{"width":"100%"},attrs:{"max-files":1,"max-file-size":3,"accept":".jpg,.png,.gif,.jpeg","multiple":false,"square":"","flat":"","bordered":"","label":"Choose files or drop files here","upload-path":"fileuploader/upload/picture"},model:{value:(_vm.formData.picture),callback:function ($$v) {_vm.$set(_vm.formData, "picture", $$v)},expression:"formData.picture"}}),(invalid && validated)?_c('small',{staticClass:"q-pa-sm text-negative"},[_vm._v(_vm._s(errors[0]))]):_vm._e(),_c('div',{staticClass:"q-pa-xs"},[_c('file-viewer',{attrs:{"removable":""},model:{value:(_vm.formData.picture),callback:function ($$v) {_vm.$set(_vm.formData, "picture", $$v)},expression:"formData.picture"}})],1)],1)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                    E Signature *\n                                                ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"E Signature"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrle_signature",attrs:{"outlined":"","dense":"","label":"E Signature","type":"text","placeholder":"Enter E Signature","list":"e_signature_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.e_signature),callback:function ($$v) {_vm.$set(_vm.formData, "e_signature", $$v)},expression:"formData.e_signature"}}),_c('datalist',{attrs:{"id":"e_signature_list"}},_vm._l((_vm.$menus.nameItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"rounded":false,"color":"primary","no-caps":"","unelevated":"","type":"submit","disabled":invalid,"icon":"send","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Update\n                                        ")],1)],1):_vm._e()]}}],null,false,3584285387)}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2):_c('div',{staticClass:"q-pa-sm text-center"},[_c('q-spinner',{attrs:{"size":40,"color":"accent","indeterminate":""}}),_vm._v("\n                                Loading...\n                            ")],1)])])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/users/edit.vue?vue&type=template&id=28c9027a&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/users/edit.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'editUsersPage',
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
      default: 'usersedit'
    },
    pagePath: {
      type: String,
      default: 'users/edit'
    },
    apiPath: {
      type: String,
      default: 'users/edit'
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
        email: "",
        picture: "",
        e_signature: ""
      }
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Edit Users";
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

          this.navigateTo(`/users`);
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
        email: "",
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
// CONCATENATED MODULE: ./src/pages/users/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var users_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

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

// CONCATENATED MODULE: ./src/pages/users/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  users_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "28c9027a",
  null
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);









runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QInput: QInput["a" /* default */],QField: QField["a" /* default */],QOptionGroup: QOptionGroup["a" /* default */],QUploader: QUploader["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */],QSpinner: QSpinner["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=213.254a383a.js.map