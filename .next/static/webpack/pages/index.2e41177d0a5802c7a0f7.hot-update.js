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
        src: item.primary.url,
        alt: "perfil",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 20
        }
      });
    }

    return null;
  })), __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, JSON.stringify(data, null, 2)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRDb2xvciIsImNvcmZ1bmRvIiwiY29sb3IiLCJjb3J0ZXh0byIsImJvZHkiLCJtYXAiLCJpdGVtIiwic2xpY2VfdHlwZSIsInByaW1hcnkiLCJub21lIiwiZGVzdGlubyIsInVybCIsInRleHRvX2RvX2JvdGFvIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLFNBQ0E7QUFDRSxTQUFLLEVBQUU7QUFDSEMscUJBQWUsRUFBRUgsSUFBSSxDQUFDSSxRQURuQjtBQUVIQyxXQUFLLEVBQUVMLElBQUksQ0FBQ007QUFGVCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQU5KLEVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixJQUFJLENBQUNPLElBQUwsQ0FBVUMsR0FBVixDQUFjLFVBQUFDLElBQUksRUFBSTtBQUNyQixRQUFJQSxJQUFJLENBQUNDLFVBQUwsS0FBb0IsT0FBeEIsRUFBZ0M7QUFDOUIsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtELElBQUksQ0FBQ0UsT0FBTCxDQUFhQyxJQUFsQixDQUFQO0FBQ0Q7O0FBQ0QsUUFBSUgsSUFBSSxDQUFDQyxVQUFMLEtBQW9CLE1BQXhCLEVBQStCO0FBQy9CLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsWUFBSSxFQUFFRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUUsT0FBYixDQUFxQkMsR0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFvQ0wsSUFBSSxDQUFDRSxPQUFMLENBQWFJLGNBQWpELENBREYsQ0FERjtBQUtDOztBQUNELFFBQUlOLElBQUksQ0FBQ0MsVUFBTCxLQUFvQixPQUF4QixFQUFnQztBQUM5QixhQUFPO0FBQUssV0FBRyxFQUFFRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUcsR0FBdkI7QUFBNEIsV0FBRyxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUNEOztBQUVELFdBQU8sSUFBUDtBQUNELEdBaEJBLENBREgsQ0FQSixFQTBCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1FLElBQUksQ0FBQ0MsU0FBTCxDQUFlakIsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUFOLENBMUJKLENBREE7QUE4QkQsQ0FoQ0Q7O0tBQU1ELEs7O0FBNENTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZTQxMTc3ZDBhNTgwMmM3YTBmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByaXNtaWMgZnJvbSAncHJpc21pYy1qYXZhc2NyaXB0JztcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJjbGllbnRcIik7XHJcbiAgcmV0dXJuIChcclxuICA8ZGl2IFxyXG4gICAgc3R5bGU9e3sgXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRhLmNvcmZ1bmRvLFxyXG4gICAgICAgIGNvbG9yOiBkYXRhLmNvcnRleHRvXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxoMT5Tb2NpYWxMaW5rcyAoQ2VudHJhbCBkZSBMaW5rcyk8L2gxPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2RhdGEuYm9keS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5zbGljZV90eXBlID09PSAnc2VjYW8nKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxoMj57aXRlbS5wcmltYXJ5Lm5vbWV9PC9oMj47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaXRlbS5zbGljZV90eXBlID09PSAnbGluaycpe1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ucHJpbWFyeS5kZXN0aW5vLnVybH0+e2l0ZW0ucHJpbWFyeS50ZXh0b19kb19ib3Rhb308L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGl0ZW0uc2xpY2VfdHlwZSA9PT0gJ2ltYWdlJyl7XHJcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17aXRlbS5wcmltYXJ5LnVybH0gYWx0PVwicGVyZmlsXCIvPjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpfTwvcHJlPlxyXG4gIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnNvbGUubG9nKFwic2VydmVyXCIpO1xyXG4gIGNvbnN0IGNsaWVudCA9IFByaXNtaWMuY2xpZW50KCdodHRwczovL3JhZmFlbHRlaXhlaXJhLmNkbi5wcmlzbWljLmlvL2FwaS92MicpO1xyXG4gIGNvbnN0IGNlbnRyYWxMaW5rcyA9IGF3YWl0IGNsaWVudC5nZXRTaW5nbGUoXCJjZW50cmFsbGlua3NcIik7XHJcbiAgY29uc29sZS5sb2coY2VudHJhbExpbmtzKTtcclxuICByZXR1cm4geyBwcm9wczoge1xyXG4gICAgZGF0YTogY2VudHJhbExpbmtzLmRhdGEsXHJcbiAgfSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9