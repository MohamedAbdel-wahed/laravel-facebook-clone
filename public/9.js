(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/Head.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/Head.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProfileHead',
  props: ['profile_owner'],
  components: {
    EditProfile: function EditProfile() {
      return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./EditProfile */ "./resources/js/components/profile/EditProfile.vue"));
    }
  },
  data: function data() {
    return {
      activeTab: 'timeline'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['authUser'])),
  updated: function updated() {
    this.$store.dispatch('setActiveTab', this.activeTab);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/Head.vue?vue&type=template&id=c9afd11e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/Head.vue?vue&type=template&id=c9afd11e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "px-56 bg-white" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "mt-8 ml-6 text-center" }, [
      _c("h1", { staticClass: "mt-1 text-3xl font-bold text-gray-800" }, [
        _vm._v(_vm._s(_vm.profile_owner.fName + " " + _vm.profile_owner.lName))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-1" }, [
        _c("p", { staticClass: "text-gray-600 text-sm" }, [
          _vm._v(
            _vm._s(
              _vm._f("strLimit")(
                "lorem poka aka balaka monstratira bola lova kiwa lorem poka aka balaka monstratira bola lova kiwa bola lova kiwa",
                95
              )
            )
          )
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "text-center px-3 text-sm py-1 font-bold text-blue-600 hover:text-blue-500 focus:outline-none tracking-wide"
          },
          [_vm._v("Edit")]
        )
      ])
    ]),
    _vm._v(" "),
    _c("hr", { staticClass: "my-2 mx-4 rounded-full" }),
    _vm._v(" "),
    _c("div", { staticClass: "flex" }, [
      _c("div", { staticClass: "w-2/3 px-6 flex justify-around" }, [
        _c(
          "button",
          {
            staticClass:
              "mx-2 flex items-center justify-center p-3 text-gray-600 font-bold focus:outline-none transition-all duration-300 ease-out",
            class: [
              _vm.activeTab == "timeline"
                ? ["text-blue-600", "border-b-4", "border-blue-600"]
                : ["hover:bg-gray-200", "rounded-lg"]
            ],
            on: {
              click: function($event) {
                _vm.activeTab = "timeline"
              }
            }
          },
          [_vm._v("Timeline")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "mx-2 flex items-center justify-center p-3 text-gray-600 font-bold focus:outline-none transition-all duration-300 ease-out",
            class: [
              _vm.activeTab == "about"
                ? ["text-blue-600", "border-b-4", "border-blue-600"]
                : ["hover:bg-gray-200", "rounded-lg"]
            ],
            on: {
              click: function($event) {
                _vm.activeTab = "about"
              }
            }
          },
          [_vm._v("About")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "mx-2 flex items-center justify-center p-3 text-gray-600 font-bold focus:outline-none transition-all duration-300 ease-out",
            class: [
              _vm.activeTab == "friends"
                ? ["text-blue-600", "border-b-4", "border-blue-600"]
                : ["hover:bg-gray-200", "rounded-lg"]
            ],
            on: {
              click: function($event) {
                _vm.activeTab = "friends"
              }
            }
          },
          [_vm._v("Friends")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "mx-2 flex items-center justify-center p-3 text-gray-600 font-bold focus:outline-none transition-all duration-300 ease-out",
            class: [
              _vm.activeTab == "photos"
                ? ["text-blue-600", "border-b-4", "border-blue-600"]
                : ["hover:bg-gray-200", "rounded-lg"]
            ],
            on: {
              click: function($event) {
                _vm.activeTab = "photos"
              }
            }
          },
          [_vm._v("Photos")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "mx-2 flex items-center justify-center p-3 text-gray-600 font-bold focus:outline-none transition-all duration-300 ease-out",
            class: [
              _vm.activeTab == "archive"
                ? ["text-blue-600", "border-b-4", "border-blue-600"]
                : ["hover:bg-gray-200", "rounded-lg"]
            ],
            on: {
              click: function($event) {
                _vm.activeTab = "archive"
              }
            }
          },
          [_vm._v("Archive")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "w-1/3 text-right py-1 mt-1 mr-8" },
        [
          _c("EditProfile", {
            attrs: { profile_owner: _vm.profile_owner, authUser: _vm.authUser }
          }),
          _vm._v(" "),
          _vm.authUser.id !== _vm.profile_owner.id
            ? _c(
                "button",
                {
                  staticClass:
                    "px-6 py-2 font-bold text-white text-sm bg-blue-500 tracking-wide hover:opacity-75 focus:bg-blue-600 focus:outline-none rounded-lg",
                  on: {
                    click: function($event) {
                      return _vm.addFriend()
                    }
                  }
                },
                [_vm._v("Add Friend")]
              )
            : _vm._e()
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "relative w-full shadow-md" }, [
      _c("img", {
        staticClass: "w-full h-84 rounded-lg z-10",
        attrs: {
          src:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAsHCBUIBwUKCRUMBQUFBQ8GBQUFDxYMDQgPGxcdHRsXGhkgJTMpICIvIxkaKj4rLzU3Ojs6HihBRkA4RjM5OjcBDAwMBQUFFAYGFDchGiE3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAM0A9gMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAgEH/8QAFRABAQAAAAAAAAAAAAAAAAAAABH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOmDRBg0Bg0Bg0Bg0Bg0Bg0Bg0Bg0Bg0Bg0Bg0Bg0Bg0Bg0Bg0BoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADKUGjKUGjKUGjKUGjKUGjKUGjKUGjKUGjKUGjKUGjKUGjKUGjKUGjKUGjKUGjKAmlRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSguiKAylRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSgulRSguiK0E0qKUVdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdEUBlKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdKilBdEVoJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q=="
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "absolute top-0 left-0 transform translate-x-96 translate-y-48 bg-white border-4 border-white rounded-full"
        },
        [
          _c("img", {
            staticClass: "w-40 h-40 rounded-full",
            attrs: { src: "/images/svg/default-male.svg" }
          }),
          _vm._v(" "),
          _c("button", {
            staticClass:
              "absolute inset-0 w-full h-full z-10 bg-gray-800 opacity-0 hover:opacity-25 hover:shadow-sm rounded-full cursor-pointer transition-all duration-300 ease-out focus:outline-none"
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "label",
        {
          staticClass:
            "absolute top-0 left-0 transform translate-x-115 translate-y-72 mt-4 p-2 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full",
          attrs: { for: "photo" }
        },
        [
          _c("img", {
            staticClass: "w-6 h-6",
            attrs: {
              src: "/images/svg/camera.svg",
              title: "change profile photo"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass: "absolute right-0 bottom-0 opacity-0",
        staticStyle: { "z-index": "-1" },
        attrs: { type: "file", id: "photo", name: "photo" }
      }),
      _vm._v(" "),
      _c(
        "label",
        {
          staticClass:
            "flex items-center my-2 mx-6 absolute right-0 bottom-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm cursor-pointer",
          attrs: { for: "cover" }
        },
        [
          _c("img", {
            staticClass: "w-4 h-4",
            attrs: {
              src: "/images/svg/camera.svg",
              title: "choose cover photo"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-1 text-gray-900 text-xs font-bold" }, [
            _vm._v("Add Cover Photo")
          ])
        ]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass: "absolute right-0 bottom-0 opacity-0",
        staticStyle: { "z-index": "-1" },
        attrs: { type: "file", id: "cover", name: "cover" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/profile/Head.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/profile/Head.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Head_vue_vue_type_template_id_c9afd11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Head.vue?vue&type=template&id=c9afd11e& */ "./resources/js/components/profile/Head.vue?vue&type=template&id=c9afd11e&");
/* harmony import */ var _Head_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head.vue?vue&type=script&lang=js& */ "./resources/js/components/profile/Head.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Head_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Head_vue_vue_type_template_id_c9afd11e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Head_vue_vue_type_template_id_c9afd11e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profile/Head.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/profile/Head.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/profile/Head.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Head.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/Head.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profile/Head.vue?vue&type=template&id=c9afd11e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/profile/Head.vue?vue&type=template&id=c9afd11e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_template_id_c9afd11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Head.vue?vue&type=template&id=c9afd11e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/Head.vue?vue&type=template&id=c9afd11e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_template_id_c9afd11e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Head_vue_vue_type_template_id_c9afd11e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);