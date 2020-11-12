(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddFriend.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddFriend.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AddFriend",
  props: ["profile_owner", "authUser"],
  data: function data() {
    return {
      friendship: null,
      isPending: false,
      isFriend: false
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/profile/".concat(this.profile_owner.id, "/isPending")).then(function (res) {
      _this.manageResponseData(res.data);
    })["catch"](function (err) {
      return console.log(err);
    });
  },
  methods: {
    manageResponseData: function manageResponseData(data) {
      this.friendship = data.friendship;
      this.isPending = data.isPending;
      this.isFriend = data.isFriend;
    },
    addFriend: function addFriend() {
      var _this2 = this;

      axios.post("/api/profile/".concat(this.profile_owner.id, "/add")).then(function (res) {
        _this2.manageResponseData(res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    acceptRequest: function acceptRequest() {
      var _this3 = this;

      axios.post("/api/profile/".concat(this.profileId, "/accept-request")).then(function (res) {
        console.log(res.data);

        _this3.manageResponseData(res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    rejectRequest: function rejectRequest() {
      var _this4 = this;

      axios.post("/api/profile/".concat(this.profile_owner.id, "/reject-request")).then(function (res) {
        _this4.manageResponseData(res.data);

        console.log(res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    removeFriend: function removeFriend() {
      var _this5 = this;

      axios.post("/api/profile/".concat(this.profile_owner.id, "/remove-friend")).then(function (res) {
        _this5.manageResponseData(res.data);

        console.log(res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddFriend.vue?vue&type=template&id=73901578&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddFriend.vue?vue&type=template&id=73901578& ***!
  \************************************************************************************************************************************************************************************************************/
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
    !_vm.isPending && !_vm.isFriend
      ? _c(
          "button",
          {
            staticClass:
              "px-4 py-1 font-semibold text-white text-sm tracking-wide bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg",
            on: {
              click: function($event) {
                return _vm.addFriend()
              }
            }
          },
          [_vm._v("\n        add friend\n    ")]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.isPending && !_vm.isFriend
      ? _c("div", { staticClass: "flex justify-end" }, [
          _vm.friendship.reciever_id === _vm.profile_owner.id
            ? _c(
                "button",
                {
                  staticClass:
                    "px-4 py-1 font-semibold text-gray-800 text-sm tracking-wide bg-white border border-gray-400 rounded-lg shadow-sm hover:bg-gray-900 hover:text-white focus:outline-none",
                  on: {
                    click: function($event) {
                      return _vm.addFriend()
                    }
                  }
                },
                [_vm._v("\n             remove request\n          ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.friendship.sender_id === _vm.profile_owner.id
            ? _c("div", { staticClass: "flex justify-end items-center" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "px-4 py-1 font-semibold text-white bg-blue-500 text-sm tracking-wide hover:bg-blue-600 focus:outline-none rounded-lg",
                    on: {
                      click: function($event) {
                        return _vm.acceptRequest()
                      }
                    }
                  },
                  [_vm._v("\n                    accept\n              ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "ml-3 px-4 py-1 font-semibold text-white bg-red-500 text-sm tracking-wide hover:bg-red-700 focus:outline-none rounded-lg",
                    on: {
                      click: function($event) {
                        return _vm.rejectRequest()
                      }
                    }
                  },
                  [_vm._v("\n                  reject\n              ")]
                )
              ])
            : _vm._e()
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.isFriend && !_vm.isPending
      ? _c(
          "button",
          {
            staticClass:
              "px-4 py-1 font-semibold text-gray-800 text-sm tracking-wide bg-white border border-gray-400 rounded-lg shadow-sm hover:bg-gray-900 hover:text-white focus:outline-none",
            on: {
              click: function($event) {
                return _vm.removeFriend()
              }
            }
          },
          [_vm._v("\n    remove friend\n    ")]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AddFriend.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/AddFriend.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddFriend_vue_vue_type_template_id_73901578___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddFriend.vue?vue&type=template&id=73901578& */ "./resources/js/components/AddFriend.vue?vue&type=template&id=73901578&");
/* harmony import */ var _AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFriend.vue?vue&type=script&lang=js& */ "./resources/js/components/AddFriend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddFriend_vue_vue_type_template_id_73901578___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddFriend_vue_vue_type_template_id_73901578___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddFriend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddFriend.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/AddFriend.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddFriend.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddFriend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddFriend.vue?vue&type=template&id=73901578&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/AddFriend.vue?vue&type=template&id=73901578& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_template_id_73901578___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddFriend.vue?vue&type=template&id=73901578& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddFriend.vue?vue&type=template&id=73901578&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_template_id_73901578___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_template_id_73901578___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);