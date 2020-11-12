(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FriendRequests.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FriendRequests.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FriendRequests",
  components: {
    List: function List() {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/List */ "./resources/js/components/List.vue"));
    },
    Contacts: function Contacts() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/Contacts */ "./resources/js/components/Contacts.vue"));
    }
  },
  data: function data() {
    return {
      requests: [],
      friendship: null,
      isPending: true,
      isFriend: false,
      numOfRequests: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['authUser'])),
  mounted: function mounted() {
    var _this = this;

    axios.get("/api/profile/".concat(this.authUser.id, "/requests")).then(function (res) {
      _this.requests = res.data;
    })["catch"](function (err) {
      return console.log(err);
    });
    this.newRequestListener();
  },
  methods: {
    manageResponseData: function manageResponseData(data) {
      this.friendship = data.friendship;
      this.isPending = data.isPending;
      this.isFriend = data.isFriend;
    },
    acceptRequest: function acceptRequest(profileId) {
      var _this2 = this;

      axios.post("/api/profile/".concat(profileId, "/accept-request")).then(function (res) {
        console.log(res.data);

        _this2.manageResponseData(res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    rejectRequest: function rejectRequest(profileId) {
      var _this3 = this;

      axios.post("/api/profile/".concat(profileId, "/reject-request")).then(function (res) {
        _this3.manageResponseData(res.data);

        console.log(res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FriendRequests.vue?vue&type=style&index=0&id=0daac261&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FriendRequests.vue?vue&type=style&index=0&id=0daac261&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#requests[data-v-0daac261]::-webkit-scrollbar {\n  width: 2px;\n  background-color: #f5f5f5;\n}\n#requests[data-v-0daac261]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n  background-color: #f5f5f5;\n}\n#requests[data-v-0daac261]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #888;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FriendRequests.vue?vue&type=style&index=0&id=0daac261&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FriendRequests.vue?vue&type=style&index=0&id=0daac261&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./FriendRequests.vue?vue&type=style&index=0&id=0daac261&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FriendRequests.vue?vue&type=style&index=0&id=0daac261&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FriendRequests.vue?vue&type=template&id=0daac261&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FriendRequests.vue?vue&type=template&id=0daac261&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "transform translate-y-16 flex" },
    [
      _c("List"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex-1 h-screen overflow-y-scroll",
          attrs: { id: "requests" }
        },
        [
          _c(
            "h1",
            { staticClass: "font-bold text-3xl my-10 text-gray-700 mx-20" },
            [_vm._v("Friend Requests")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mt-4 mx-20" },
            _vm._l(_vm.requests, function(request, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticClass:
                    "flex justify-between items-center my-2 bg-white rounded-lg py-2 px-6"
                },
                [
                  _c(
                    "div",
                    { staticClass: "flex items-center" },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: { name: "Profile", params: { id: request.id } }
                          }
                        },
                        [
                          _c("img", {
                            staticClass:
                              "w-10 h-10 border border-gray-200 rounded-full",
                            attrs: {
                              src: request.photo
                                ? "/storage/uploads/profile/" + request.photo
                                : "/images/svg/default-male.svg",
                              title: "view profile"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "hover:underline",
                          attrs: {
                            to: { name: "Profile", params: { id: request.id } }
                          }
                        },
                        [
                          _c(
                            "h1",
                            { staticClass: "ml-3 font-semibold text-gray-600" },
                            [
                              _vm._v(
                                _vm._s(
                                  request.first_name + " " + request.last_name
                                )
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.isPending && !_vm.isFriend
                    ? _c("div", { staticClass: "flex items-center" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "mr-3 px-4 py-1 font-bold text-sm text-white bg-blue-500 hover:text-blue-200 focus:outline-none focus:bg-blue-700 rounded-lg",
                            on: {
                              click: function($event) {
                                return _vm.acceptRequest(request.id)
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
                                return _vm.rejectRequest(request.id)
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
                        _c("p", [_vm._v("Happy Friendship :) ")])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.isPending && !_vm.isFriend
                    ? _c("div", { staticClass: "text-red-600 text-sm" }, [
                        _c("p", [_vm._v("Rejected ")])
                      ])
                    : _vm._e()
                ]
              )
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _c("Contacts")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/FriendRequests.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/FriendRequests.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FriendRequests_vue_vue_type_template_id_0daac261_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FriendRequests.vue?vue&type=template&id=0daac261&scoped=true& */ "./resources/js/views/FriendRequests.vue?vue&type=template&id=0daac261&scoped=true&");
/* harmony import */ var _FriendRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FriendRequests.vue?vue&type=script&lang=js& */ "./resources/js/views/FriendRequests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FriendRequests_vue_vue_type_style_index_0_id_0daac261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FriendRequests.vue?vue&type=style&index=0&id=0daac261&scoped=true&lang=css& */ "./resources/js/views/FriendRequests.vue?vue&type=style&index=0&id=0daac261&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FriendRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FriendRequests_vue_vue_type_template_id_0daac261_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FriendRequests_vue_vue_type_template_id_0daac261_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0daac261",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/FriendRequests.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/FriendRequests.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/FriendRequests.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FriendRequests.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FriendRequests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/FriendRequests.vue?vue&type=style&index=0&id=0daac261&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/FriendRequests.vue?vue&type=style&index=0&id=0daac261&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendRequests_vue_vue_type_style_index_0_id_0daac261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./FriendRequests.vue?vue&type=style&index=0&id=0daac261&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FriendRequests.vue?vue&type=style&index=0&id=0daac261&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendRequests_vue_vue_type_style_index_0_id_0daac261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendRequests_vue_vue_type_style_index_0_id_0daac261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendRequests_vue_vue_type_style_index_0_id_0daac261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendRequests_vue_vue_type_style_index_0_id_0daac261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendRequests_vue_vue_type_style_index_0_id_0daac261_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/FriendRequests.vue?vue&type=template&id=0daac261&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/FriendRequests.vue?vue&type=template&id=0daac261&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendRequests_vue_vue_type_template_id_0daac261_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FriendRequests.vue?vue&type=template&id=0daac261&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FriendRequests.vue?vue&type=template&id=0daac261&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendRequests_vue_vue_type_template_id_0daac261_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FriendRequests_vue_vue_type_template_id_0daac261_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);