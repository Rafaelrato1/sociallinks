webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\RafaelExtension\\sociallinks\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Index = function Index(_ref) {
  var data = _ref.data;
  console.log("client");
  return __jsx("div", {
    style: {
      backgroundColor: data.corfundo,
      color: data.cortexto
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "SocialLinks (Central de Links)"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, data.body.map(function (item) {
    if (item.slice_type === 'secao') {
      return __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 20
        }
      }, item.primary.nome);
    }

    if (item.slice_type === 'link') {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: item.primary.destino.url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }
      }, item.primary.texto_do_botao));
    }

    if (item.slice_type === 'image') {
      return __jsx("img", {
        src: item.primary.image - perfil,
        alt: "perfil",
        width: "160",
        height: "160",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 20
        }
      });
    }

    return null;
  })));
};

_c = Index;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRDb2xvciIsImNvcmZ1bmRvIiwiY29sb3IiLCJjb3J0ZXh0byIsImJvZHkiLCJtYXAiLCJpdGVtIiwic2xpY2VfdHlwZSIsInByaW1hcnkiLCJub21lIiwiZGVzdGlubyIsInVybCIsInRleHRvX2RvX2JvdGFvIiwiaW1hZ2UiLCJwZXJmaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQSxTQUNBO0FBQ0UsU0FBSyxFQUFFO0FBQ0hDLHFCQUFlLEVBQUVILElBQUksQ0FBQ0ksUUFEbkI7QUFFSEMsV0FBSyxFQUFFTCxJQUFJLENBQUNNO0FBRlQsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FOSixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sSUFBSSxDQUFDTyxJQUFMLENBQVVDLEdBQVYsQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDckIsUUFBSUEsSUFBSSxDQUFDQyxVQUFMLEtBQW9CLE9BQXhCLEVBQWdDO0FBQzlCLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUMsSUFBbEIsQ0FBUDtBQUNEOztBQUNELFFBQUlILElBQUksQ0FBQ0MsVUFBTCxLQUFvQixNQUF4QixFQUErQjtBQUMvQixhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLFlBQUksRUFBRUQsSUFBSSxDQUFDRSxPQUFMLENBQWFFLE9BQWIsQ0FBcUJDLEdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBb0NMLElBQUksQ0FBQ0UsT0FBTCxDQUFhSSxjQUFqRCxDQURGLENBREY7QUFLQzs7QUFDRCxRQUFJTixJQUFJLENBQUNDLFVBQUwsS0FBb0IsT0FBeEIsRUFBZ0M7QUFDOUIsYUFBTztBQUFLLFdBQUcsRUFBRUQsSUFBSSxDQUFDRSxPQUFMLENBQWFLLEtBQWIsR0FBbUJDLE1BQTdCO0FBQXFDLFdBQUcsRUFBQyxRQUF6QztBQUFrRCxhQUFLLEVBQUMsS0FBeEQ7QUFBOEQsY0FBTSxFQUFDLEtBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUNEOztBQUNELFdBQU8sSUFBUDtBQUNELEdBZkEsQ0FESCxDQVBKLENBREE7QUE0QkQsQ0E5QkQ7O0tBQU1sQixLOztBQTBDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjg3YmNiODljMWMyZjIyN2UwNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcmlzbWljIGZyb20gJ3ByaXNtaWMtamF2YXNjcmlwdCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiY2xpZW50XCIpO1xyXG4gIHJldHVybiAoXHJcbiAgPGRpdiBcclxuICAgIHN0eWxlPXt7IFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YS5jb3JmdW5kbyxcclxuICAgICAgICBjb2xvcjogZGF0YS5jb3J0ZXh0b1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aDE+U29jaWFsTGlua3MgKENlbnRyYWwgZGUgTGlua3MpPC9oMT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtkYXRhLmJvZHkubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uc2xpY2VfdHlwZSA9PT0gJ3NlY2FvJyl7XHJcbiAgICAgICAgICAgIHJldHVybiA8aDI+e2l0ZW0ucHJpbWFyeS5ub21lfTwvaDI+O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGl0ZW0uc2xpY2VfdHlwZSA9PT0gJ2xpbmsnKXtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLnByaW1hcnkuZGVzdGluby51cmx9PntpdGVtLnByaW1hcnkudGV4dG9fZG9fYm90YW99PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChpdGVtLnNsaWNlX3R5cGUgPT09ICdpbWFnZScpe1xyXG4gICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e2l0ZW0ucHJpbWFyeS5pbWFnZS1wZXJmaWx9IGFsdD1cInBlcmZpbFwiIHdpZHRoPVwiMTYwXCIgaGVpZ2h0PVwiMTYwXCIvPjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnNvbGUubG9nKFwic2VydmVyXCIpO1xyXG4gIGNvbnN0IGNsaWVudCA9IFByaXNtaWMuY2xpZW50KCdodHRwczovL3JhZmFlbHRlaXhlaXJhLmNkbi5wcmlzbWljLmlvL2FwaS92MicpO1xyXG4gIGNvbnN0IGNlbnRyYWxMaW5rcyA9IGF3YWl0IGNsaWVudC5nZXRTaW5nbGUoXCJjZW50cmFsbGlua3NcIik7XHJcbiAgY29uc29sZS5sb2coY2VudHJhbExpbmtzKTtcclxuICByZXR1cm4geyBwcm9wczoge1xyXG4gICAgZGF0YTogY2VudHJhbExpbmtzLmRhdGEsXHJcbiAgfSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9