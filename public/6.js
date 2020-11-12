(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GetComments.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GetComments.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "GetComments",
  props: ["postId"],
  data: function data() {
    return {
      comments: [],
      nextPage: 0,
      showMore: false
    };
  },
  mounted: function mounted() {
    this.getComments();
    this.newCommentListener();
  },
  methods: {
    getComments: function getComments() {
      var _this = this;

      axios.get("/api/posts/".concat(this.postId, "/comments")).then(function (res) {
        _this.comments = res.data.data;

        _this.$store.dispatch("getComments", _this.comments);

        if (res.data.current_page < res.data.last_page) {
          _this.showMore = true;
          _this.nextPage = res.data.current_page + 1;
        } else {
          _this.showMore = false;
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    loadComments: function loadComments() {
      var _this2 = this;

      axios.get("/api/posts/".concat(this.postId, "/comments?page=").concat(this.nextPage)).then(function (res) {
        res.data.data.forEach(function (data) {
          _this2.comments.unshift(data);
        });

        if (res.data.current_page < res.data.last_page) {
          _this2.showMore = true;
          _this2.nextPage = res.data.current_page + 1;
        } else {
          _this2.showMore = false;
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    newCommentListener: function newCommentListener() {
      var _this3 = this;

      Echo.channel("post.".concat(this.postId)).listen("NewComment", function (comment) {
        _this3.comments.unshift(comment);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GetComments.vue?vue&type=style&index=0&id=7c05514f&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GetComments.vue?vue&type=style&index=0&id=7c05514f&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fade-enter-active[data-v-7c05514f],\n.fade-leave-active[data-v-7c05514f] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-7c05514f],\n.fade-leave-to[data-v-7c05514f] {\n  opacity: 0;\n}\n#post_comments[data-v-7c05514f]::-webkit-scrollbar {\n  width: 1px;\n  background-color: #f5f5f5;\n}\n#post_comments[data-v-7c05514f]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 2px;\n  background-color: #f5f5f5;\n}\n#post_comments[data-v-7c05514f]::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #888;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GetComments.vue?vue&type=style&index=0&id=7c05514f&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GetComments.vue?vue&type=style&index=0&id=7c05514f&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./GetComments.vue?vue&type=style&index=0&id=7c05514f&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GetComments.vue?vue&type=style&index=0&id=7c05514f&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GetComments.vue?vue&type=template&id=7c05514f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GetComments.vue?vue&type=template&id=7c05514f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _vm.showMore
      ? _c(
          "a",
          {
            staticClass:
              "m-2 text-gray-600 text-sm hover:underline cursor-pointer",
            on: {
              click: function($event) {
                return _vm.loadComments()
              }
            }
          },
          [_vm._v("View more comments")]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "max-h-84 w-full overflow-y-scroll overflow-x-hidden mt-4",
        attrs: { id: "post_comments" }
      },
      _vm._l(_vm.comments, function(comment, index) {
        return _c(
          "div",
          { key: index, staticClass: "w-10/12 m-2" },
          [
            _c("transition", { attrs: { name: "fade" } }, [
              _c(
                "div",
                { staticClass: "flex" },
                [
                  _c("router-link", { attrs: { to: "#" } }, [
                    _c("img", {
                      staticClass: "w-8 h-8 rounded-full",
                      attrs: {
                        src: comment.user.photo
                          ? "/storage/uploads/profile/" + comment.user.photo
                          : "/images/svg/default-male.svg"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "div",
                      { staticClass: "px-3 py-2 ml-1 bg-gray-100 rounded-lg" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "hover:underline",
                            attrs: { to: "#" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "text-sm font-bold text-gray-800"
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    comment.user.first_name +
                                      " " +
                                      comment.user.last_name
                                  )
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "text-gray-600 text-xs break-words" },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(comment.content) +
                                "\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex items-center justify-center ml-4 mt-1"
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "text-blue-500 cursor-pointer",
                            staticStyle: { "font-size": "13px" }
                          },
                          [_vm._v("like")]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "ml-2 text-gray-800 cursor-pointer",
                            staticStyle: { "font-size": "13px" }
                          },
                          [_vm._v("reply")]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "ml-3 text-gray-500",
                            staticStyle: { "font-size": "11px" }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm._f("formatTime")(comment.created_at))
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ],
                1
              )
            ])
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/GetComments.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/GetComments.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GetComments_vue_vue_type_template_id_7c05514f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetComments.vue?vue&type=template&id=7c05514f&scoped=true& */ "./resources/js/components/GetComments.vue?vue&type=template&id=7c05514f&scoped=true&");
/* harmony import */ var _GetComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetComments.vue?vue&type=script&lang=js& */ "./resources/js/components/GetComments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GetComments_vue_vue_type_style_index_0_id_7c05514f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetComments.vue?vue&type=style&index=0&id=7c05514f&scoped=true&lang=css& */ "./resources/js/components/GetComments.vue?vue&type=style&index=0&id=7c05514f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GetComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GetComments_vue_vue_type_template_id_7c05514f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GetComments_vue_vue_type_template_id_7c05514f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c05514f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GetComments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GetComments.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/GetComments.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GetComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GetComments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GetComments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GetComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/GetComments.vue?vue&type=style&index=0&id=7c05514f&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/GetComments.vue?vue&type=style&index=0&id=7c05514f&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetComments_vue_vue_type_style_index_0_id_7c05514f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./GetComments.vue?vue&type=style&index=0&id=7c05514f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GetComments.vue?vue&type=style&index=0&id=7c05514f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetComments_vue_vue_type_style_index_0_id_7c05514f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetComments_vue_vue_type_style_index_0_id_7c05514f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetComments_vue_vue_type_style_index_0_id_7c05514f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetComments_vue_vue_type_style_index_0_id_7c05514f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetComments_vue_vue_type_style_index_0_id_7c05514f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/GetComments.vue?vue&type=template&id=7c05514f&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/GetComments.vue?vue&type=template&id=7c05514f&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetComments_vue_vue_type_template_id_7c05514f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GetComments.vue?vue&type=template&id=7c05514f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GetComments.vue?vue&type=template&id=7c05514f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetComments_vue_vue_type_template_id_7c05514f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetComments_vue_vue_type_template_id_7c05514f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);