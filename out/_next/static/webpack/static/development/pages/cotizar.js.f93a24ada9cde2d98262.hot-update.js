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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
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
      value: undefined,
      visible: false,
      submited: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeModal", function () {
      _this.setState({
        visible: false
      });
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
      var name = e.target.name;
      var value = e.target.value;
      console.log('name', name);
      console.log('value', value);

      if (_this.state.type.name === 'Joyeria') {
        var _this$setState;

        _this.setState((_this$setState = {}, _defineProperty(_this$setState, name, value), _defineProperty(_this$setState, "value", value * _this.state.category.value), _this$setState));
      } else {
        _this.setState(_defineProperty({}, name, value));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit", function (e) {
      e.preventDefault();
      var url = 'http://localhost:3001/api/pactemos/cotizacion';
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, _this.state).then(function (res) {
        console.log('res data', res);

        _this.setState({
          visible: false,
          submited: true
        });
      }).catch(function (error) {
        console.log('res error', error);
      });
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
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Cotiza en Compraventa Pactemos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Top__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "cover",
        src: "/static/img/cover-cotizar.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), this.state.submited ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "Gracias por enviar tu cotizaci\xF3n")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "offices-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Cotizador en l\xEDnea"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Rellene los campos y recuerde que la informaci\xF3n personal la utilizaremos para confirmarle cu\xE1nto dinero le damos por su art\xEDculo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
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
            lineNumber: 211
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, item.name));
      })), this.state.type && (this.state.type.name === 'Joyeria' || this.state.type.name === 'Articulo') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
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
            lineNumber: 226
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }, item.name));
      })), this.state.subtype && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
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
            lineNumber: 240
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, item.name));
      })), this.state.type && this.state.type.name === 'Joyeria' && this.state.category && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
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
      }, "Peso"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "En gramos",
        name: "weight",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }))), this.state.type && this.state.type.name === 'Articulo' && this.state.category && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "Marca"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "brand",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Modelo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "model",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, "Tiempo de uso"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "time",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "\xBFTiene factura?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        placeholder: "",
        name: "invoice",
        value: "Si",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }), " Si"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        placeholder: "",
        name: "invoice",
        value: "No",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }), " No"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, "Comentarios"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        style: {
          height: 60
        },
        className: "input",
        type: "text",
        placeholder: "",
        name: "comment",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      })))), this.state.type && this.state.type.name === 'Otro' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, "Tipo de articulo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "articleType",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, "Marca"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "brand",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, "Tiempo de uso"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "time",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, "Comentarios"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        style: {
          height: 60
        },
        className: "input",
        type: "text",
        placeholder: "",
        name: "comment",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      })))), this.state.type && this.state.type.name === 'Vender CDT' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }, "Valor CDT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "valueCDT",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, "Fecha de apertura"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "date",
        placeholder: "",
        name: "openCDT",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, "Fecha de vencimiento"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "date",
        placeholder: "",
        name: "closeCDT",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      })))), this.state.type && this.state.type.name === 'Joyeria' && this.state.weight && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, "\xBFCu\xE1nto me dan por mi joya?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, "Te damos hasta $ ", this.state.value, " pesos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: this.showModal,
        className: "cotizar-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, "\xA1Quiero el dinero ya!")), this.state.type && this.state.type.name === 'Articulo' && this.state.brand && this.state.model && this.state.time && this.state.invoice && this.state.comment && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }, "\xBFCu\xE1nto me dan por mi art\xEDculo?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: this.showModal,
        className: "cotizar-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, "\xA1Desc\xFAbrelo!")), this.state.type && this.state.type.name === 'Vender CDT' && this.state.valueCDT && this.state.openCDT && this.state.closeCDT && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }, "\xBFCu\xE1nto me dan por mi CDT?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: this.showModal,
        className: "cotizar-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        },
        __self: this
      }, "\xA1Desc\xFAbrelo!")), this.state.type && this.state.type.name === 'Otro' && this.state.articleType && this.state.brand && this.state.time && this.state.comment && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cotizar-result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }, "\xBFCu\xE1nto me dan por mi art\xEDculo?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: this.showModal,
        className: "cotizar-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        },
        __self: this
      }, "\xA1Desc\xFAbrelo!")), this.state.visible && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "myModal",
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this.closeModal,
        className: "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        name: "cotizacion",
        method: "POST",
        onSubmit: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        style: {
          marginBottom: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, "Completa tus datos personales"), this.state.type && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        name: "type",
        value: this.state.type.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        __self: this
      }), this.state.subtype && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        name: "subtype",
        value: this.state.subtype.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }), this.state.category && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        name: "category",
        value: this.state.category.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        },
        __self: this
      }), this.state.weight && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        name: "category",
        value: this.state.weight,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      }, "Nombres y apellidos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "names",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        },
        __self: this
      }, "Correo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "email",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }, "Telefono"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "mobile",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        },
        __self: this
      }, "\xBFCu\xE1nto necesita?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "many",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }, "\xBFC\xF3mo se entero de nosotros?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "source",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "form-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, "Enviar datos"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      })));
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
//# sourceMappingURL=cotizar.js.f93a24ada9cde2d98262.hot-update.js.map