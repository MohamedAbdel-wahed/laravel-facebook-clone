(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRequest.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRequest.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ManageRequest',
  props: ['profileId'],
  data: function data() {
    return {
      friendship: null,
      isPending: true,
      isFriend: false,
      numOfRequests: null
    };
  },
  mounted: function mounted() {},
  methods: {
    manageResponseData: function manageResponseData(data) {
      this.friendship = data.friendship;
      this.isPending = data.isPending;
      this.isFriend = data.isFriend;
    },
    acceptRequest: function acceptRequest(profileId) {
      var _this = this;

      axios.post("/api/profile/".concat(profileId, "/accept-request")).then(function (res) {
        console.log(res.data);

        _this.manageResponseData(res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    rejectRequest: function rejectRequest(profileId) {
      var _this2 = this;

      axios.post("/api/profile/".concat(profileId, "/reject-request")).then(function (res) {
        _this2.manageResponseData(res.data);

        console.log(res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRequest.vue?vue&type=template&id=cb4f4fe2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ManageRequest.vue?vue&type=template&id=cb4f4fe2& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.isPending && !_vm.isFriend
      ? _c("div", { staticClass: "flex items-center" }, [
          _c(
            "button",
            {
              staticClass:
                "mr-3 px-4 py-1 font-bold text-sm text-white bg-blue-500 hover:text-blue-200 focus:outline-none focus:bg-blue-700 rounded-lg",
              on: {
                click: function($event) {
                  return _vm.acceptRequest(_vm.profileId)
                }
              }
            },
            [_vm._v("Accept")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "px-4 py-1 font-bold text-sm text-white bg-red-500 hover:text-red-200 focus:outline-none focus:bg-red-700 rounded-lg",
              on: {
                click: function($event) {
                  return _vm.rejectRequest(_vm.profileId)
                }
              }
            },
            [_vm._v("Reject")]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.isPending && _vm.isFriend
      ? _c("div", { staticClass: "text-green-600 text-sm" }, [
          _c("p", [_vm._v("Happy Friendship")])
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.isPending && !_vm.isFriend
      ? _c("div", { staticClass: "text-red-600 text-sm" }, [
          _c("p", [_vm._v("Rejected")])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ManageRequest.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/ManageRequest.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageRequest_vue_vue_type_template_id_cb4f4fe2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageRequest.vue?vue&type=template&id=cb4f4fe2& */ "./resources/js/components/ManageRequest.vue?vue&type=template&id=cb4f4fe2&");
/* harmony import */ var _ManageRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageRequest.vue?vue&type=script&lang=js& */ "./resources/js/components/ManageRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ManageRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageRequest_vue_vue_type_template_id_cb4f4fe2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManageRequest_vue_vue_type_template_id_cb4f4fe2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ManageRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ManageRequest.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ManageRequest.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ManageRequest.vue?vue&type=template&id=cb4f4fe2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ManageRequest.vue?vue&type=template&id=cb4f4fe2& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageRequest_vue_vue_type_template_id_cb4f4fe2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageRequest.vue?vue&type=template&id=cb4f4fe2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ManageRequest.vue?vue&type=template&id=cb4f4fe2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageRequest_vue_vue_type_template_id_cb4f4fe2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageRequest_vue_vue_type_template_id_cb4f4fe2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);