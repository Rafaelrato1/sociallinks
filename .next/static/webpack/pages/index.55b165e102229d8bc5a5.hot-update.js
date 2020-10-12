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
        src: item.primary.imageperfil.url,
        alt: item.primary.imageperfil.alt,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRDb2xvciIsImNvcmZ1bmRvIiwiY29sb3IiLCJjb3J0ZXh0byIsImJvZHkiLCJtYXAiLCJpdGVtIiwic2xpY2VfdHlwZSIsInByaW1hcnkiLCJub21lIiwiZGVzdGlubyIsInVybCIsInRleHRvX2RvX2JvdGFvIiwiaW1hZ2VwZXJmaWwiLCJhbHQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzFCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsU0FDQTtBQUNFLFNBQUssRUFBRTtBQUNIQyxxQkFBZSxFQUFFSCxJQUFJLENBQUNJLFFBRG5CO0FBRUhDLFdBQUssRUFBRUwsSUFBSSxDQUFDTTtBQUZULEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBTkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLElBQUksQ0FBQ08sSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ3JCLFFBQUlBLElBQUksQ0FBQ0MsVUFBTCxLQUFvQixPQUF4QixFQUFnQztBQUM5QixhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0QsSUFBSSxDQUFDRSxPQUFMLENBQWFDLElBQWxCLENBQVA7QUFDRDs7QUFDRCxRQUFJSCxJQUFJLENBQUNDLFVBQUwsS0FBb0IsTUFBeEIsRUFBK0I7QUFDL0IsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxZQUFJLEVBQUVELElBQUksQ0FBQ0UsT0FBTCxDQUFhRSxPQUFiLENBQXFCQyxHQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW9DTCxJQUFJLENBQUNFLE9BQUwsQ0FBYUksY0FBakQsQ0FERixDQURGO0FBS0M7O0FBQ0QsUUFBSU4sSUFBSSxDQUFDQyxVQUFMLEtBQW9CLE9BQXhCLEVBQWdDO0FBQzlCLGFBQU87QUFBSyxXQUFHLEVBQUVELElBQUksQ0FBQ0UsT0FBTCxDQUFhSyxXQUFiLENBQXlCRixHQUFuQztBQUF3QyxXQUFHLEVBQUVMLElBQUksQ0FBQ0UsT0FBTCxDQUFhSyxXQUFiLENBQXlCQyxHQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRCxHQWhCQSxDQURILENBUEosRUEwQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNQyxJQUFJLENBQUNDLFNBQUwsQ0FBZW5CLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0IsQ0FBTixDQTFCSixDQURBO0FBOEJELENBaENEOztLQUFNRCxLOztBQTRDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTViMTY1ZTEwMjIyOWQ4YmM1YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcmlzbWljIGZyb20gJ3ByaXNtaWMtamF2YXNjcmlwdCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiY2xpZW50XCIpO1xyXG4gIHJldHVybiAoXHJcbiAgPGRpdiBcclxuICAgIHN0eWxlPXt7IFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YS5jb3JmdW5kbyxcclxuICAgICAgICBjb2xvcjogZGF0YS5jb3J0ZXh0b1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aDE+U29jaWFsTGlua3MgKENlbnRyYWwgZGUgTGlua3MpPC9oMT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtkYXRhLmJvZHkubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uc2xpY2VfdHlwZSA9PT0gJ3NlY2FvJyl7XHJcbiAgICAgICAgICAgIHJldHVybiA8aDI+e2l0ZW0ucHJpbWFyeS5ub21lfTwvaDI+O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGl0ZW0uc2xpY2VfdHlwZSA9PT0gJ2xpbmsnKXtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLnByaW1hcnkuZGVzdGluby51cmx9PntpdGVtLnByaW1hcnkudGV4dG9fZG9fYm90YW99PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChpdGVtLnNsaWNlX3R5cGUgPT09ICdpbWFnZScpe1xyXG4gICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e2l0ZW0ucHJpbWFyeS5pbWFnZXBlcmZpbC51cmx9IGFsdD17aXRlbS5wcmltYXJ5LmltYWdlcGVyZmlsLmFsdH0vPjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpfTwvcHJlPlxyXG4gIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnNvbGUubG9nKFwic2VydmVyXCIpO1xyXG4gIGNvbnN0IGNsaWVudCA9IFByaXNtaWMuY2xpZW50KCdodHRwczovL3JhZmFlbHRlaXhlaXJhLmNkbi5wcmlzbWljLmlvL2FwaS92MicpO1xyXG4gIGNvbnN0IGNlbnRyYWxMaW5rcyA9IGF3YWl0IGNsaWVudC5nZXRTaW5nbGUoXCJjZW50cmFsbGlua3NcIik7XHJcbiAgY29uc29sZS5sb2coY2VudHJhbExpbmtzKTtcclxuICByZXR1cm4geyBwcm9wczoge1xyXG4gICAgZGF0YTogY2VudHJhbExpbmtzLmRhdGEsXHJcbiAgfSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9