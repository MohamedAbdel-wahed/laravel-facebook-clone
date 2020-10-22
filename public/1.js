(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewPost.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NewPost.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NewPost',
  data: function data() {
    return {
      showCreatePostModal: false,
      privacy: 'public',
      content: '',
      route: location.pathname
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['posts'])),
  methods: {
    createPost: function createPost() {
      var _this = this;

      if (this.content.trim()) {
        axios.post('/api/posts/create', {
          privacy: this.privacy,
          content: this.content
        }).then(function (res) {
          _this.posts.unshift(res.data);

          _this.content = '';
          _this.showCreatePostModal = false;
        })["catch"](function (err) {
          return console.log(err);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewPost.vue?vue&type=template&id=4f84dfc5&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NewPost.vue?vue&type=template&id=4f84dfc5& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass:
          "flex items-center px-6 py-4 border border-gray-200 rounded-lg bg-white shadow-sm"
      },
      [
        _c("router-link", { attrs: { to: "#" } }, [
          _c("img", {
            staticClass: "h-10 w-12 rounded-full",
            attrs: { src: "/images/other/user.jpeg" }
          })
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass:
            "w-full ml-2 px-6 py-2 text-gray-700 border border-gray-200 bg-gray-100 hover:bg-gray-200 focus:outline-none rounded-full cursor-pointer transition-all duration-200 ease-out",
          attrs: { placeholder: "What's On Your Mind, Mohamed?" },
          on: {
            click: function($event) {
              _vm.showCreatePostModal = true
            }
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _vm.showCreatePostModal
      ? _c("button", {
          staticClass:
            "w-full h-full fixed inset-0 bg-gray-500 opacity-25 z-30",
          on: {
            click: function($event) {
              _vm.showCreatePostModal = false
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.showCreatePostModal
      ? _c(
          "div",
          {
            staticClass:
              "w-120 fixed top-0 py-3 px-6 bg-white border border-gray-200 rounded-lg shadow-sm z-30",
            class: [
              _vm.route.includes("/profile/") ? ["mt-32", "-ml-40"] : "mt-6"
            ]
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "float-right p-3 rounded-full hover:bg-gray-100 cursor-pointer",
                on: {
                  click: function($event) {
                    _vm.showCreatePostModal = false
                  }
                }
              },
              [
                _c("img", {
                  staticClass: "w-4 h-4 rounded-full",
                  attrs: { src: "/images/svg/close.svg" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "h1",
              {
                staticClass: "my-2 text-center text-2xl font-bold text-gray-800"
              },
              [_vm._v("Create Post")]
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { enctype: "multipart/form-data" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createPost()
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "flex my-4" },
                  [
                    _c("router-link", { attrs: { to: "#" } }, [
                      _c("img", {
                        staticClass: "w-10 h-10 rounded-full",
                        attrs: { src: "/images/other/user.jpeg" }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex flex-col ml-2" },
                      [
                        _c("router-link", { attrs: { to: "#" } }, [
                          _c("h1", { staticClass: "font-bold text-gray-800" }, [
                            _vm._v("John Doe")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.privacy,
                                expression: "privacy"
                              }
                            ],
                            staticClass:
                              "mt-1 py-1 px-2 text-sm bg-gray-100 cursor-pointer border border-gray-200 rounded-lg focus:outline-none focus:border-blue-200 select-none",
                            attrs: { name: "privacy" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.privacy = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "public" } }, [
                              _vm._v("Public")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "my_friends" } }, [
                              _vm._v("Friends")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "only_me" } }, [
                              _vm._v("Only me")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.content,
                      expression: "content"
                    }
                  ],
                  staticClass:
                    "w-full block my-2 py-2 px-4 focus:outline-none text-sm text-gray-700 ",
                  attrs: {
                    name: "content",
                    rows: "4",
                    placeholder: "What's On Your Mind, Mohamed?"
                  },
                  domProps: { value: _vm.content },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.content = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "mt-4 mb-2 w-full px-2 flex justify-center font-bold py-2 focus:outline-none rounded-lg",
                    class: [
                      _vm.content.trim() == ""
                        ? ["bg-gray-200", "text-gray-700"]
                        : [
                            "bg-blue-500",
                            "hover:bg-blue-600",
                            "focus:bg-blue-700",
                            "text-white"
                          ]
                    ]
                  },
                  [_vm._v("Post")]
                )
              ]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "flex items-center px-4 py-2 border border-gray-300 rounded-lg"
      },
      [
        _c("div", { staticClass: "w-1/2" }, [
          _c("h1", { staticClass: "font-bold text-sm text-gray-700" }, [
            _vm._v("Add to Your Post")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/2" }, [
          _c("div", { staticClass: "flex justify-around" }, [
            _c(
              "div",
              {
                staticClass:
                  "relative px-8 py-1 hover:bg-gray-100 rounded-lg cursor-pointer"
              },
              [
                _c("input", {
                  staticClass:
                    "absolute mx-4 left-0 top-0 z-10 w-10 opacity-0 cursor-pointer",
                  attrs: { type: "file", name: "gallery", title: "photo/video" }
                }),
                _vm._v(" "),
                _c("img", {
                  staticClass: "absolute top-0 left-0 mx-4 w-8 h-8",
                  attrs: { src: "/images/svg/gallery.svg" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "px-6 py-1 hover:bg-gray-100 rounded-lg cursor-pointer",
                attrs: { title: "tag friend" }
              },
              [
                _c("img", {
                  staticClass: "w-6 h-6",
                  attrs: { src: "/images/svg/user.svg" }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "px-6 py-1 hover:bg-gray-100 rounded-lg cursor-pointer",
                attrs: { title: "feeling/activity" }
              },
              [
                _c("img", {
                  staticClass: "w-6 h-6",
                  attrs: { src: "/images/svg/smile.svg" }
                })
              ]
            )
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/NewPost.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/NewPost.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewPost_vue_vue_type_template_id_4f84dfc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewPost.vue?vue&type=template&id=4f84dfc5& */ "./resources/js/components/NewPost.vue?vue&type=template&id=4f84dfc5&");
/* harmony import */ var _NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewPost.vue?vue&type=script&lang=js& */ "./resources/js/components/NewPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewPost_vue_vue_type_template_id_4f84dfc5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewPost_vue_vue_type_template_id_4f84dfc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NewPost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NewPost.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/NewPost.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NewPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NewPost.vue?vue&type=template&id=4f84dfc5&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/NewPost.vue?vue&type=template&id=4f84dfc5& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_template_id_4f84dfc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NewPost.vue?vue&type=template&id=4f84dfc5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewPost.vue?vue&type=template&id=4f84dfc5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_template_id_4f84dfc5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_template_id_4f84dfc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);