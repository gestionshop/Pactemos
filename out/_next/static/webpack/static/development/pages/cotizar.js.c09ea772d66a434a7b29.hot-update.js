webpackHotUpdate("static/development/pages/cotizar.js",{

/***/ "./pages/cotizar.js":
/*!**************************!*\
  !*** ./pages/cotizar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Top */ "./components/Top.js");
var _jsxFileName = "/Users/edwinpgm/Sites/Pactemos/pages/cotizar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var data = [{
  name: 'Joyeria',
  options: [{
    name: 'Oro',
    options: [{
      name: '22k',
      value: 76000
    }, {
      name: '18k',
      value: 63000
    }, {
      name: '14k',
      value: 48000
    }, {
      name: '10k',
      value: 27000
    }]
  }, {
    name: 'Plata',
    options: [{
      name: 'Ley 925',
      value: 800
    }]
  }]
}, {
  name: 'Articulo',
  options: [{
    name: 'Electrodomesticos',
    options: [{
      name: 'Televisor',
      value: 0
    }, {
      name: 'Nevera',
      value: 0
    }, {
      name: 'Estufa',
      value: 0
    }, {
      name: 'Lavadora',
      value: 0
    }, {
      name: 'Equipo de sonido',
      value: 0
    }]
  }, {
    name: 'Herramientas',
    options: [{
      name: 'Tipo de herramientas',
      value: 0
    }]
  }, {
    name: 'Tecnologia',
    options: [{
      name: 'Portatil',
      value: 0
    }, {
      name: 'Tablet',
      value: 0
    }]
  }]
}, {
  name: 'Vender CDT'
}, {
  name: 'Otro'
}];

var Cotizar =
/*#__PURE__*/
function (_Component) {
  _inherits(Cotizar, _Component);

  function Cotizar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Cotizar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Cotizar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      type: null,
      subtype: null,
      category: null,
      weight: undefined,
      value: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectType", function (type) {
      console.log('type', type);

      _this.setState({
        type: type,
        subtype: null,
        category: null,
        weight: undefined,
        value: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectSubType", function (subtype) {
      console.log('subtype', subtype);

      _this.setState({
        subtype: subtype,
        category: null,
        weight: undefined,
        value: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectCategory", function (category) {
      console.log('category', category);

      _this.setState({
        category: category,
        weight: undefined,
        value: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeInput", function (e) {
      var _this$setState;

      var name = e.target.name;
      var value = e.target.value;
      console.log('name', name);
      console.log('value', value);

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, name, value), _defineProperty(_this$setState, "value", value * _this.state.category.value), _this$setState));
    });

    return _this;
  }

  _createClass(Cotizar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Cotiza en Compraventa Pactemos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Top__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "offices-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Cotizador en l\xEDnea"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Rellene los campos y recuerde que la informaci\xF3n personal la utilizaremos para confirmarle cu\xE1nto dinero le damos por su art\xEDculo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, data.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.selectType(item);
          },
          className: "cotizar-select-item ".concat(_this2.state.type && item.name === _this2.state.type.name ? 'active' : ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, item.name));
      })), this.state.type && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, this.state.type.options.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.selectSubType(item);
          },
          className: "cotizar-select-item ".concat(_this2.state.subtype && item.name === _this2.state.subtype.name ? 'active' : ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, item.name));
      })), this.state.subtype && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, this.state.subtype.options.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.selectCategory(item);
          },
          className: "cotizar-select-item ".concat(_this2.state.category && item.name === _this2.state.category.name ? 'active' : ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, item.name));
      })), this.state.type && this.state.type.name === 'Joyeria' && this.state.category && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "Peso"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "En gramos",
        name: "weight",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }))), this.state.weight && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "\xBFCu\xE1nto me dan por mi joya?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "Te damos hasta $ ", this.state.value, " pesos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "cotizar-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "\xA1Quiero el dinero ya!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "myModal",
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        action: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "Nombres y apellidos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "Correo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "Telefono"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "\xBFCu\xE1nto necesita?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "\xBFC\xF3mo se entero de nosotros?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      })))))))));
    }
  }]);

  return Cotizar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cotizar);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/cotizar")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cotizar.js.c09ea772d66a434a7b29.hot-update.js.map