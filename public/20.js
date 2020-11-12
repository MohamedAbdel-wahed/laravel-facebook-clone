(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/Posts.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/Posts.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Posts",
  props: ["profileOwner"],
  components: {
    NewPost: function NewPost() {
      return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../NewPost */ "./resources/js/components/NewPost.vue"));
    },
    Like: function Like() {
      return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../Like */ "./resources/js/components/Like.vue"));
    },
    GetLikes: function GetLikes() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../GetLikes */ "./resources/js/components/GetLikes.vue"));
    },
    Comment: function Comment() {
      return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../Comment */ "./resources/js/components/Comment.vue"));
    }
  },
  data: function data() {
    return {
      showPostOptionsModal: false,
      toggleSaveIcon: false,
      icon: "save.svg",
      savePostStatus: "Save Post",
      posts: [],
      profileId: this.$route.params.id
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["authUser"])),
  mounted: function mounted() {
    this.getPosts();
  },
  methods: {
    getPosts: function getPosts() {
      var _this = this;

      axios.get("/api/profile/".concat(this.profileId, "/posts")).then(function (res) {
        _this.posts = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    savePost: function savePost() {
      this.toggleSaveIcon = !this.toggleSaveIcon;

      if (this.toggleSaveIcon) {
        this.icon = "saved.svg";
        this.savePostStatus = "Post saved";
      } else {
        this.icon = "save.svg";
        this.savePostStatus = "save Post";
      }
    },
    updatedProfileId: function updatedProfileId() {
      this.profileId = this.$route.params.id;
    }
  },
  watch: {
    $route: 'updatedProfileId',
    profileId: 'getPosts'
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/Posts.vue?vue&type=template&id=51f36512&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/Posts.vue?vue&type=template&id=51f36512& ***!
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
    _vm.authUser.id == _vm.profileOwner.id
      ? _c("div", [_c("NewPost")], 1)
      : _vm._e(),
    _vm._v(" "),
    _vm.posts.length > 0
      ? _c(
          "div",
          _vm._l(_vm.posts, function(post, index) {
            return _c("div", { key: post.id, staticClass: "relative mt-3" }, [
              _c(
                "div",
                {
                  staticClass:
                    "px-4 py-2 bg-white border border-gray-200 rounded-lg"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "float-right hover:bg-gray-100 focus:bg-gray-200 cursor-pointer px-3 py-1 rounded-full",
                      on: {
                        click: function($event) {
                          _vm.showPostOptionsModal = !_vm.showPostOptionsModal
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "w-6 h-6",
                        attrs: { src: "/images/svg/more.svg" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _vm.showPostOptionsModal
                    ? _c(
                        "ul",
                        {
                          staticClass:
                            "absolute right-0 mr-10 mt-8 w-48 flex flex-col items-center rounded-lg border border-gray-300 bg-gray-100 motion-reduce:transition-none transition-all duration-300 ease-out"
                        },
                        [
                          _c(
                            "li",
                            {
                              staticClass:
                                "w-full flex items-center py-2 px-4 text-sm text-center border-b text-gray-700 hover:bg-gray-200 cursor-pointer",
                              on: {
                                click: function($event) {
                                  return _vm.savePost()
                                }
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "w-6 h-6 rounded-full",
                                attrs: { src: "/images/svg/" + _vm.icon }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "ml-1 font-bold text-sm text-gray-800"
                                },
                                [_vm._v(_vm._s(_vm.savePostStatus))]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(0, true),
                          _vm._v(" "),
                          _vm._m(1, true),
                          _vm._v(" "),
                          _vm._m(2, true)
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "W-7/12 flex items-center" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "border border-gray-200 rounded-full",
                          attrs: { to: "#" }
                        },
                        [
                          _c("img", {
                            staticClass:
                              "border border-gray-300 w-10 h-10 rounded-full",
                            attrs: {
                              src: post.user.photo
                                ? "/storage/uploads/profile/" + post.user.photo
                                : "/images/svg/default-male.svg"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "ml-2 flex flex-col" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "hover:underline",
                              attrs: { to: "#" }
                            },
                            [
                              _c(
                                "h1",
                                {
                                  staticClass: "text-gray-800 font-bold text-sm"
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        post.user.first_name +
                                          " " +
                                          post.user.last_name
                                      ) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex items-center" }, [
                            _c("p", { staticClass: "text-gray-500 text-xs" }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm._f("formatTime")(post.created_at)
                                  ) +
                                  "\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "ml-2 w-4 h-4 rounded-full",
                              attrs: {
                                src: "/images/svg/" + post.privacy + ".svg"
                              }
                            })
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-3 px-12" }, [
                    _c(
                      "p",
                      { staticClass: "text-sm text-gray-700 break-words" },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(post.content) +
                            "\n                    "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mt-8 px-10" },
                    [
                      _c("GetLikes", { attrs: { postId: post.id } }),
                      _vm._v(" "),
                      _vm._m(3, true)
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr", { staticClass: "mt-2" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-full py-2 px-2 flex" },
                    [
                      _c("Like", { attrs: { postId: post.id } }),
                      _vm._v(" "),
                      _c("Comment", { attrs: { postId: post.id } }),
                      _vm._v(" "),
                      _vm._m(4, true)
                    ],
                    1
                  )
                ]
              )
            ])
          }),
          0
        )
      : _c("div", [
          _c(
            "h1",
            {
              staticClass:
                "text-3xl text-gray-600 font-extrabold text-center my-32 tracking-wide"
            },
            [_vm._v("\n            No Posts Yet\n        ")]
          )
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
          "w-full flex items-center py-2 px-4 text-sm text-center border-b text-gray-700 hover:bg-gray-200 cursor-pointer"
      },
      [
        _c("img", {
          staticClass: "w-6 h-6 rounded-full",
          attrs: { src: "/images/svg/edit.svg" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "ml-1 font-bold text-sm text-gray-800" }, [
          _vm._v("Edit")
        ])
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
          "w-full flex items-center py-2 px-4 text-sm text-center border-b text-gray-700 hover:bg-gray-200 cursor-pointer"
      },
      [
        _c("img", {
          staticClass: "w-6 h-6 rounded-full",
          attrs: { src: "/images/svg/trash.svg" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "ml-1 font-bold text-sm text-gray-800" }, [
          _vm._v("Delete")
        ])
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
          "w-full flex items-center py-2 px-4 text-sm text-center text-gray-700 hover:bg-gray-200 cursor-pointer"
      },
      [
        _c("img", {
          staticClass: "w-6 h-6 rounded-full",
          attrs: { src: "/images/svg/report.svg" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "ml-1 font-bold text-sm text-gray-800" }, [
          _vm._v("Report this Post")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "float-right -mt-6 hover:underline cursor-pointer" },
      [
        _c("span", { staticClass: "text-sm text-gray-700" }, [
          _vm._v("22 shares")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "w-1/3 flex justify-center items-center px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-lg"
      },
      [
        _c("img", {
          staticClass: "w-6 h-6 rounded-full",
          attrs: { src: "/images/svg/share.svg" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "text-sm ml-2 font-bold text-gray-500" }, [
          _vm._v("Share")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/profile/Posts.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/profile/Posts.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Posts_vue_vue_type_template_id_51f36512___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Posts.vue?vue&type=template&id=51f36512& */ "./resources/js/components/profile/Posts.vue?vue&type=template&id=51f36512&");
/* harmony import */ var _Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Posts.vue?vue&type=script&lang=js& */ "./resources/js/components/profile/Posts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Posts_vue_vue_type_template_id_51f36512___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Posts_vue_vue_type_template_id_51f36512___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profile/Posts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/profile/Posts.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/profile/Posts.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Posts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/Posts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profile/Posts.vue?vue&type=template&id=51f36512&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/profile/Posts.vue?vue&type=template&id=51f36512& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_51f36512___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Posts.vue?vue&type=template&id=51f36512& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/Posts.vue?vue&type=template&id=51f36512&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_51f36512___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_51f36512___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);