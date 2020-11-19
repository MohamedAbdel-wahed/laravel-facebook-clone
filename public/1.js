(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/List.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/List.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "List",
  data: function data() {
    return {
      numOfRequests: 0
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["authUser"])),
  mounted: function mounted() {
    this.newRequestListener();
    this.getRequestNotificaton();
  },
  methods: {
    newRequestListener: function newRequestListener() {
      var _this = this;

      Echo.channel("request.".concat(this.authUser.id)).listen("NewRequest", function (request) {
        _this.numOfRequests = request.requests;
      });
    },
    getRequestNotificaton: function getRequestNotificaton() {
      var _this2 = this;

      axios.get("/api/notifications/requests-count").then(function (res) {
        _this2.numOfRequests = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/List.vue?vue&type=template&id=1856aeee&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/List.vue?vue&type=template&id=1856aeee& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-72" }, [
    _c("ul", { staticClass: "w-11/12 py-2 mx-3" }, [
      _c(
        "li",
        {
          staticClass:
            "my-2 px-10 py-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
        },
        [
          _c(
            "router-link",
            {
              staticClass: "flex items-center",
              attrs: {
                to: { name: "Profile", params: { id: _vm.authUser.id } }
              }
            },
            [
              _c("img", {
                staticClass: "w-8 h-8 rounded-full",
                attrs: {
                  src: _vm.authUser.photo
                    ? "/storage/uploads/profile/" + _vm.authUser.photo
                    : "/images/svg/default-male.svg"
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2" }, [_vm._v("Your Profile")])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass:
            "my-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
        },
        [
          _c(
            "router-link",
            {
              staticClass: "flex items-center px-10 py-2",
              attrs: {
                to: { name: "Friends", params: { id: _vm.authUser.id } }
              },
              on: {
                click: function($event) {
                  this.numOfRequests = 0
                }
              }
            },
            [
              _c("img", {
                staticClass: "w-8 h-8 rounded-full",
                attrs: { src: "/images/svg/friends.svg" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2" }, [_vm._v("Friends")])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass:
            "my-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
        },
        [
          _c(
            "router-link",
            {
              staticClass: "flex items-center px-10 py-2",
              attrs: {
                to: { name: "FriendRequests", params: { id: _vm.authUser.id } }
              },
              on: {
                click: function($event) {
                  this.numOfRequests = 0
                }
              }
            },
            [
              _c("img", {
                staticClass: "w-8 h-8 rounded-full",
                attrs: { src: "/images/svg/add-friend.svg" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2" }, [_vm._v("Requests")]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "ml-2 rounded-full bg-red-500 text-white font-semibold px-1 text-sm"
                },
                [
                  _vm._v(
                    _vm._s(_vm.numOfRequests > 0 ? "+" + _vm.numOfRequests : "")
                  )
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass:
          "flex items-center my-2 px-10 py-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
      },
      [
        _c("img", {
          staticClass: "w-8 h-8 rounded-full",
          attrs: { src: "/images/svg/group.svg" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "ml-2" }, [_vm._v("Groups")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass:
          "flex items-center my-2 px-10 py-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
      },
      [
        _c("img", {
          staticClass: "w-8 h-8 rounded-full",
          attrs: { src: "/images/svg/messages.svg" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "ml-2" }, [_vm._v("Messages")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass:
          "flex items-center my-2 px-10 py-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
      },
      [
        _c("img", {
          staticClass: "w-8 h-8 rounded-full",
          attrs: { src: "/images/svg/newspaper.svg" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "ml-2" }, [_vm._v("News")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass:
          "flex items-center my-2 px-10 py-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
      },
      [
        _c("img", {
          staticClass: "w-8 h-8 rounded-full",
          attrs: { src: "/images/svg/library.svg" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "ml-2" }, [_vm._v("Videos")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass:
          "flex items-center my-2 px-10 py-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
      },
      [
        _c("img", {
          staticClass: "w-8 h-8 rounded-full",
          attrs: { src: "/images/svg/calendar.svg" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "ml-2" }, [_vm._v("Events")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/List.vue":
/*!******************************************!*\
  !*** ./resources/js/components/List.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_1856aeee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=1856aeee& */ "./resources/js/components/List.vue?vue&type=template&id=1856aeee&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/components/List.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_1856aeee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_1856aeee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/List.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/List.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/List.vue?vue&type=template&id=1856aeee&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/List.vue?vue&type=template&id=1856aeee& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_1856aeee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=1856aeee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/List.vue?vue&type=template&id=1856aeee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_1856aeee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_1856aeee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);