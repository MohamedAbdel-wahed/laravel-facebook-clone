(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/Info.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/Info.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Info",
  props: ["profile_owner"],
  data: function data() {
    return {
      photos: [],
      covers: []
    };
  },
  methods: {
    parseImages: function parseImages() {
      this.photos = JSON.parse(this.profile_owner.all_photos);
      this.covers = JSON.parse(this.profile_owner.all_covers);
    }
  },
  mounted: function mounted() {
    this.parseImages();
  },
  watch: {
    profile_owner: "parseImages"
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/Info.vue?vue&type=template&id=2f76d182&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/Info.vue?vue&type=template&id=2f76d182& ***!
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          " mt-3 px-4 py-3 bg-white border border-gray-200 rounded-lg"
      },
      [
        _c(
          "router-link",
          {
            staticClass:
              "float-right mt-1 text-sm text-blue-500 hover:underline",
            attrs: { to: "profile/" + _vm.profile_owner.id + "/photos" }
          },
          [_vm._v("See All")]
        ),
        _vm._v(" "),
        _c("h1", { staticClass: "text-gray-800 font-bold text-lg" }, [
          _vm._v("Photos")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex flex-wrap mt-2" },
          _vm._l(_vm.photos, function(photo, index) {
            return _c(
              "div",
              { key: index, staticClass: "p-1 bg-white rounded-md w-1/3" },
              [
                _c("img", {
                  staticClass: "w-32 h-24 rounded-sm",
                  attrs: { src: "/storage/uploads/profile/" + photo }
                })
              ]
            )
          }),
          0
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          " mt-3 px-4 py-3 bg-white border border-gray-200 rounded-lg"
      },
      [
        _c(
          "router-link",
          {
            staticClass:
              "float-right mt-1 text-sm text-blue-500 hover:underline",
            attrs: { to: "profile/" + _vm.profile_owner.id + "/covers" }
          },
          [_vm._v("See All")]
        ),
        _vm._v(" "),
        _c("h1", { staticClass: "text-gray-800 font-bold text-lg" }, [
          _vm._v("Covers")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex flex-wrap mt-2" },
          _vm._l(_vm.covers, function(cover, index) {
            return _c(
              "div",
              { key: index, staticClass: "p-1 bg-white rounded-md w-1/3" },
              [
                _c("img", {
                  staticClass: "w-32 h-24 rounded-sm",
                  attrs: { src: "/storage/uploads/cover/" + cover }
                })
              ]
            )
          }),
          0
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          " mt-3 px-4 py-3 bg-white border border-gray-200 rounded-lg"
      },
      [
        _c(
          "router-link",
          {
            staticClass:
              "float-right mt-1 text-sm text-blue-500 hover:underline",
            attrs: { to: "#" }
          },
          [_vm._v("See All")]
        ),
        _vm._v(" "),
        _c("h1", { staticClass: "text-gray-800 font-bold text-lg" }, [
          _vm._v("Friends")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "mb-2 text-gray-400 font-semibold text-sm" }, [
          _vm._v("325 friends")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex flex-wrap mt-2" }, [
          _c(
            "div",
            { staticClass: "p-1 bg-white rounded-md w-1/3" },
            [
              _c("router-link", { attrs: { to: "#" } }, [
                _c("img", {
                  staticClass: "w-32 h-24 rounded-lg",
                  attrs: { src: "/images/other/user.jpeg" }
                })
              ]),
              _vm._v(" "),
              _c(
                "router-link",
                { staticClass: "text-center", attrs: { to: "#" } },
                [
                  _c(
                    "h1",
                    {
                      staticClass:
                        "mt-1 px-1 text-xs font-semibold text-gray-800"
                    },
                    [
                      _vm._v(
                        "\n                        Ahmed Rakaa\n                    "
                      )
                    ]
                  )
                ]
              )
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "px-4 py-3 bg-white border border-gray-200 rounded-lg" },
      [
        _c("h1", { staticClass: "text-gray-800 font-bold text-lg" }, [
          _vm._v("Intro")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex items-center mt-2 ml-1" }, [
          _c("img", {
            staticClass: "w-4 h-4",
            attrs: { src: "/images/svg/my-home.svg" }
          }),
          _vm._v(" "),
          _c("h2", { staticClass: "ml-2 text-sm text-gray-700" }, [
            _vm._v("\n                Lives in "),
            _c("strong", { staticClass: "text-black" }, [_vm._v("Cairo")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex items-center mt-3 ml-1" }, [
          _c("img", {
            staticClass: "w-4 h-4",
            attrs: { src: "/images/svg/location.svg" }
          }),
          _vm._v(" "),
          _c("h2", { staticClass: "ml-2 text-sm text-gray-700" }, [
            _vm._v("\n                From "),
            _c("strong", { staticClass: "text-black" }, [_vm._v("Cairo")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex items-center mt-3 ml-1" }, [
          _c("img", {
            staticClass: "w-4 h-4",
            attrs: { src: "/images/svg/heart.svg" }
          }),
          _vm._v(" "),
          _c("h2", { staticClass: "ml-2 text-sm text-gray-700" }, [
            _vm._v("Single")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex items-center mt-3 ml-1" }, [
          _c("img", {
            staticClass: "w-4 h-4",
            attrs: { src: "/images/svg/follower.svg" }
          }),
          _vm._v(" "),
          _c("h2", { staticClass: "ml-2 text-sm text-gray-700" }, [
            _vm._v("\n                Followed by "),
            _c("strong", { staticClass: "text-black" }, [_vm._v("127 people")])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "w-full mt-3 mb-1 px-4 py-2 text-gray-800 font-bold text-sm bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-lg"
          },
          [_vm._v("\n            Edit Details\n        ")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/profile/Info.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/profile/Info.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Info_vue_vue_type_template_id_2f76d182___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Info.vue?vue&type=template&id=2f76d182& */ "./resources/js/components/profile/Info.vue?vue&type=template&id=2f76d182&");
/* harmony import */ var _Info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Info.vue?vue&type=script&lang=js& */ "./resources/js/components/profile/Info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Info_vue_vue_type_template_id_2f76d182___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Info_vue_vue_type_template_id_2f76d182___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profile/Info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/profile/Info.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/profile/Info.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/Info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profile/Info.vue?vue&type=template&id=2f76d182&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/profile/Info.vue?vue&type=template&id=2f76d182& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_template_id_2f76d182___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Info.vue?vue&type=template&id=2f76d182& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/Info.vue?vue&type=template&id=2f76d182&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_template_id_2f76d182___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_template_id_2f76d182___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);