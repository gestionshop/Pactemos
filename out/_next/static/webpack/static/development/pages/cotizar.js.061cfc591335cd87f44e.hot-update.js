webpackHotUpdate("static/development/pages/cotizar.js",{

/***/ "./pages/cotizar.js":
/*!**************************!*\
  !*** ./pages/cotizar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Top__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Top */ "./components/Top.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _gracias__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gracias */ "./pages/gracias.js");
/* harmony import */ var _funciones_funciones__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../funciones/funciones */ "./funciones/funciones.js");










var _jsxFileName = "/Users/arnoldtorres/Sites/cotizador/Pactemos/pages/cotizar.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }









var Dropzone = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js")];
    },
    modules: ['react-dropzone']
  }
});
var data = [{
  name: 'Joyería',
  options: [{
    name: 'Oro',
    options: [{
      name: '18k',
      value: 100000
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
  name: 'Artículos',
  options: [{
    name: 'Electrodomésticos' // options: [
    //   {
    //     name: 'Televisor',
    //     value: 0,
    //   },
    //   {
    //     name: 'Nevera',
    //     value: 0,
    //   },
    //   {
    //     name: 'Estufa',
    //     value: 0,
    //   },
    //   {
    //     name: 'Lavadora',
    //     value: 0,
    //   },
    //   {
    //     name: 'Equipo de sonido',
    //     value: 0,
    //   },
    // ],

  }, {
    name: 'Herramientas' // options: [
    //   {
    //     name: 'Tipo de herramientas',
    //     value: 0,
    //   },
    // ],

  }, {
    name: 'Tecnología' // options: [
    //   {
    //     name: 'Portatil',
    //     value: 0,
    //   },
    //   {
    //     name: 'Tablet',
    //     value: 0,
    //   },
    // ],

  }]
}, {
  name: 'Otros'
}, {
  name: 'Vender CDT'
}];

var Cotizar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Cotizar, _Component);

  var _super = _createSuper(Cotizar);

  function Cotizar() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Cotizar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      type: null,
      subtype: null,
      category: null,
      localizacion: null,
      weight: undefined,
      value: undefined,
      visible: false,
      submited: false,
      files: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "closeModal", function () {
      _this.setState({
        visible: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "selectType", function (type) {
      _this.setState({
        type: type,
        subtype: null,
        category: null,
        weight: undefined,
        value: undefined
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "selectSubType", function (subtype) {
      _this.setState({
        subtype: subtype,
        category: null,
        weight: undefined,
        value: undefined
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "selectCategory", function (category) {
      _this.setState({
        category: null
      }, function () {
        _this.setState({
          category: category,
          weight: undefined,
          value: undefined
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onChangeInput", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      if (_this.state.type.name === 'Joyería' && name === 'weight') {
        var _this$setState;

        _this.setState((_this$setState = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this$setState, name, value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this$setState, "value", value * _this.state.category.value), _this$setState));
      } else {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, value));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onChangeSelect", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onChangeTipoHerramienta", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState({
        category: {
          name: name,
          value: value
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onChangeElectrodomesticos", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState({
        category: {
          name: name,
          value: value
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onChangeTecnologia", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState({
        category: {
          name: name,
          value: value
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onChangeCiudad", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState({
        localizacion: {
          name: name,
          value: value
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "submit", function (e) {
      e.preventDefault();
      var url = 'https://gestionshop.co/api/pactemos/cotizacion'; // const url = 'http://localhost:3001/api/pactemos/cotizacion'

      var formData = new FormData();

      for (var i = 0; i < _this.state.files.length; i++) {
        var file = _this.state.files[i];
        formData.append('files[' + i + ']', file);
      }

      formData.append('data', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_this.state));
      axios__WEBPACK_IMPORTED_MODULE_14___default.a.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (res) {
        _this.setState({
          visible: false,
          submited: true
        });

        window.location.replace('/gracias');
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onDrop", function (newFiles) {
      var files = _this.state.files;
      files = files.concat(newFiles);

      _this.setState({
        files: files
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "deleteFiles", function (e) {
      e.preventDefault();

      _this.setState({
        files: []
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Cotizar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 11
        }
      }, "Cotiza en Compraventa Pactemos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Top__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        className: "cover",
        src: "/static/img/cover-cotizar.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "offices-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 15
        }
      }, "Cotizador en l\xEDnea"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 15
        }
      }, "Rellene los campos y recuerde que la informaci\xF3n personal la utilizaremos para confirmarle cu\xE1nto dinero le damos por su art\xEDculo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 15
        }
      }, data.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.selectType(item);
          },
          className: "cotizar-select-item ".concat(_this2.state.type && item.name === _this2.state.type.name ? 'active' : ''),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 36
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 21
          }
        }, item.name));
      })), this.state.type && (this.state.type.name === 'Joyería' || this.state.type.name === 'Artículos') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 17
        }
      }, this.state.type.options.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.selectSubType(item);
          },
          className: "cotizar-select-item ".concat(_this2.state.subtype && item.name === _this2.state.subtype.name ? 'active' : ''),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 57
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 23
          }
        }, item.name));
      })), this.state.subtype && this.state.subtype.options && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 17
        }
      }, this.state.subtype.options.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.selectCategory(item);
          },
          className: "cotizar-select-item ".concat(_this2.state.category && item.name === _this2.state.category.name ? 'active' : ''),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 60
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 23
          }
        }, item.name));
      })), this.state.subtype && this.state.subtype.name === 'Herramientas' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        name: "tipo_herramienta",
        className: "input",
        onChange: this.onChangeTipoHerramienta,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 23
        }
      }, "Seleccionar una herramienta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Taladro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 23
        }
      }, "Taladro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Pulidora",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 23
        }
      }, "Pulidora"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Caladora",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 23
        }
      }, "Caladora"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Trozadora",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 23
        }
      }, "Tronzadora"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Ingledora",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 23
        }
      }, "Ingletadora"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Sierra Circular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 23
        }
      }, "Sierra Circular"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Lijadora",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 23
        }
      }, "Lijadora"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Ruteadora",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 23
        }
      }, "Ruteadora"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Pistola de Impacto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 23
        }
      }, "Pistola de Impacto"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Cortadora",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 23
        }
      }, "Cortadora"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Otro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 23
        }
      }, "Otros")))), this.state.subtype && this.state.subtype.name === 'Electrodomésticos' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        name: "tipo_electrodomesticos",
        className: "input",
        onChange: this.onChangeElectrodomesticos,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 23
        }
      }, "Selecciona un electrodom\xE9stico"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Televisor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 23
        }
      }, "Televisor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Nevera",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 23
        }
      }, "Nevera"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Estufa",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 23
        }
      }, "Estufa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Equipo de Sonido",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 23
        }
      }, "Equipo de Sonido"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Otro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 23
        }
      }, "Otros")))), this.state.subtype && this.state.subtype.name === 'Tecnología' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        name: "tipo_tecnologia",
        className: "input",
        onChange: this.onChangeTecnologia,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 23
        }
      }, "Seleccione un art\xEDculo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Portatil",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 23
        }
      }, "Portatil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Tablet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 23
        }
      }, "Tablet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Otro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 23
        }
      }, "Otros")))), this.state.type && this.state.type.name === 'Joyería' && this.state.category && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 23
        }
      }, "Peso aproximado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "En gramos",
        name: "weight",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Dropzone, {
        onDrop: this.onDrop,
        multiple: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 19
        }
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
            getInputProps = _ref.getInputProps,
            isDragActive = _ref.isDragActive;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
          style: {
            margin: '30px 0 10px 0'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 23
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          style: {
            textAlign: 'left',
            fontSize: 14
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 25
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 28
          }
        }, "Agregar imagen"), " (opcional)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getRootProps(), {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getInputProps(), {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 27
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          style: {
            padding: 30,
            color: '#aaa',
            textAlign: 'center',
            border: '1px dashed #ccc'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 27
          }
        }, isDragActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442,
            columnNumber: 31
          }
        }, "Soltar archivo") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 31
          }
        }, "Arrastra la imagen o clic para elegir"))), _this2.state.files && _this2.state.files.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          style: {
            marginTop: 10,
            padding: '10px 20px',
            textAlign: 'left',
            fontSize: 14,
            backgroundColor: '#f3f0ee',
            borderRadius: 4
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 453,
            columnNumber: 27
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 461,
            columnNumber: 29
          }
        }, "Archivo seleccionado"), _this2.state.files.map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 463,
              columnNumber: 60
            }
          }, item.name);
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          href: "#",
          onClick: _this2.deleteFiles,
          style: {
            display: 'block',
            marginTop: 10,
            fontSize: 13,
            color: '#555'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 466,
            columnNumber: 29
          }
        }, "Borrar archivos seleccionados")));
      })), this.state.type && this.state.type.name === 'Artículos' && this.state.category && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490,
          columnNumber: 23
        }
      }, "Marca *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "brand",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502,
          columnNumber: 23
        }
      }, "Modelo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "model",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514,
          columnNumber: 23
        }
      }, "Tiempo de uso (Ej. 2 a\xF1o y/o 3 meses) *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "time",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 23
        }
      }, "\xBFTiene factura? *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "radio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "radio",
        placeholder: "",
        name: "invoice",
        value: "Si",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529,
          columnNumber: 25
        }
      }), " Si"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "radio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "radio",
        placeholder: "",
        name: "invoice",
        value: "No",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538,
          columnNumber: 25
        }
      }), " No"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 23
        }
      }, "Comentarios"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        style: {
          height: 60
        },
        className: "input",
        type: "text",
        placeholder: "",
        name: "comment",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Dropzone, {
        onDrop: this.onDrop,
        multiple: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 19
        }
      }, function (_ref2) {
        var getRootProps = _ref2.getRootProps,
            getInputProps = _ref2.getInputProps,
            isDragActive = _ref2.isDragActive;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
          style: {
            margin: '30px 0 10px 0'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 563,
            columnNumber: 23
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          style: {
            textAlign: 'left',
            fontSize: 14
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 566,
            columnNumber: 25
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 569,
            columnNumber: 28
          }
        }, "Agregar imagen"), " (opcional)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getRootProps(), {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 570,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getInputProps(), {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 571,
            columnNumber: 27
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          style: {
            padding: 30,
            color: '#aaa',
            textAlign: 'center',
            border: '1px dashed #ccc'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 572,
            columnNumber: 27
          }
        }, isDragActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 581,
            columnNumber: 31
          }
        }, "Soltar archivo") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 583,
            columnNumber: 31
          }
        }, "Arrastra la imagen o clic para elegir"))), _this2.state.files && _this2.state.files.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          style: {
            marginTop: 10,
            padding: '10px 20px',
            textAlign: 'left',
            fontSize: 14,
            backgroundColor: '#f3f0ee',
            borderRadius: 4
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 592,
            columnNumber: 27
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 600,
            columnNumber: 29
          }
        }, "Archivo seleccionado"), _this2.state.files.map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 602,
              columnNumber: 60
            }
          }, item.name);
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          href: "#",
          onClick: _this2.deleteFiles,
          style: {
            display: 'block',
            marginTop: 10,
            fontSize: 13,
            color: '#555'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 605,
            columnNumber: 29
          }
        }, "Borrar archivos seleccionados")));
      })), this.state.type && this.state.type.name === 'Otros' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 23
        }
      }, "Tipo de articulo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "articleType",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639,
          columnNumber: 23
        }
      }, "Marca"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "brand",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 649,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651,
          columnNumber: 23
        }
      }, "Tiempo de uso"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "time",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 652,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663,
          columnNumber: 23
        }
      }, "Comentarios"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        style: {
          height: 60
        },
        className: "input",
        type: "text",
        placeholder: "",
        name: "comment",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Dropzone, {
        onDrop: this.onDrop,
        multiple: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674,
          columnNumber: 19
        }
      }, function (_ref3) {
        var getRootProps = _ref3.getRootProps,
            getInputProps = _ref3.getInputProps,
            isDragActive = _ref3.isDragActive;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
          style: {
            margin: '30px 0 10px 0'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 676,
            columnNumber: 23
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          style: {
            textAlign: 'left',
            fontSize: 14
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 679,
            columnNumber: 25
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 682,
            columnNumber: 28
          }
        }, "Agregar imagen"), " (opcional)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getRootProps(), {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 683,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getInputProps(), {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 684,
            columnNumber: 27
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          style: {
            padding: 30,
            color: '#aaa',
            textAlign: 'center',
            border: '1px dashed #ccc'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 685,
            columnNumber: 27
          }
        }, isDragActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 694,
            columnNumber: 31
          }
        }, "Soltar archivo") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 696,
            columnNumber: 31
          }
        }, "Arrastra la imagen o clic para elegir"))), _this2.state.files && _this2.state.files.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          style: {
            marginTop: 10,
            padding: '10px 20px',
            textAlign: 'left',
            fontSize: 14,
            backgroundColor: '#f3f0ee',
            borderRadius: 4
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 705,
            columnNumber: 27
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 713,
            columnNumber: 29
          }
        }, "Archivo seleccionado"), _this2.state.files.map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 715,
              columnNumber: 60
            }
          }, item.name);
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          href: "#",
          onClick: _this2.deleteFiles,
          style: {
            display: 'block',
            marginTop: 10,
            fontSize: 13,
            color: '#555'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 718,
            columnNumber: 29
          }
        }, "Borrar archivos seleccionados")));
      })), this.state.type && this.state.type.name === 'Vender CDT' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 738,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 739,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 740,
          columnNumber: 23
        }
      }, "Valor CDT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "valueCDT",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 741,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 751,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 752,
          columnNumber: 23
        }
      }, "Fecha de apertura"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "date",
        placeholder: "",
        name: "openCDT",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 762,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 763,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764,
          columnNumber: 23
        }
      }, "Fecha de vencimiento"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "date",
        placeholder: "",
        name: "closeCDT",
        onChange: this.onChangeInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765,
          columnNumber: 23
        }
      })))), this.state.type && this.state.type.name === 'Joyería' && this.state.weight && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-result",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 784,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 785,
          columnNumber: 19
        }
      }, "\xBFCu\xE1nto me dan por mi joya?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        onClick: this.showModal,
        className: "cotizar-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 788,
          columnNumber: 19
        }
      }, "\xA1 Desc\xFAbrelo !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: {
          marginTop: 10,
          fontSize: 13
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 790,
          columnNumber: 19
        }
      }, "* Aplican condiciones")), this.state.type && this.state.type.name === 'Artículos' && this.state.brand && this.state.time && this.state.invoice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-result",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 810,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 811,
          columnNumber: 19
        }
      }, "\xBFCu\xE1nto me dan por mi art\xEDculo?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        onClick: this.showModal,
        className: "cotizar-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 813,
          columnNumber: 19
        }
      }, "\xA1 Desc\xFAbrelo !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: {
          marginTop: 10,
          fontSize: 13
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 815,
          columnNumber: 19
        }
      }, "* Aplican condiciones")), this.state.type && this.state.type.name === 'Vender CDT' && this.state.valueCDT && this.state.openCDT && this.state.closeCDT && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-result",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 836,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 837,
          columnNumber: 19
        }
      }, "\xBFCu\xE1nto me dan por mi CDT?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        onClick: this.showModal,
        className: "cotizar-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 839,
          columnNumber: 19
        }
      }, "\xA1 Desc\xFAbrelo !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: {
          marginTop: 10,
          fontSize: 13
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 841,
          columnNumber: 19
        }
      }, "*Aplican condiciones")), this.state.type && this.state.type.name === 'Otros' && this.state.articleType && this.state.brand && this.state.time && this.state.comment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "cotizar-result",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 864,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 865,
          columnNumber: 19
        }
      }, "\xBFCu\xE1nto me dan por mi art\xEDculo?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        onClick: this.showModal,
        className: "cotizar-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 867,
          columnNumber: 19
        }
      }, "\xA1 Desc\xFAbrelo !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: {
          marginTop: 10,
          fontSize: 13
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 869,
          columnNumber: 19
        }
      }, "*Aplican condiciones")), this.state.visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "myModal",
        className: "modal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 882,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 883,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        onClick: this.closeModal,
        className: "close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 884,
          columnNumber: 21
        }
      }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        name: "cotizacion",
        method: "POST",
        onSubmit: this.submit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 886,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        style: {
          marginBottom: 30
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 887,
          columnNumber: 23
        }
      }, "Completa tus datos personales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 888,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 889,
          columnNumber: 21
        }
      }, "Selecciona tu ciudad *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        name: "city",
        className: "input",
        onChange: this.onChangeCiudad,
        required: true,
        placeholder: "Seleccione tu cuidad",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 890,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 897,
          columnNumber: 23
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Cartagena",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 898,
          columnNumber: 23
        }
      }, "Cartagena"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Turbaco",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 899,
          columnNumber: 23
        }
      }, "Turbaco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Arjona",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 900,
          columnNumber: 23
        }
      }, "Arjona"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Sabanalarga",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 901,
          columnNumber: 23
        }
      }, "Sabanalarga"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Baranoa",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 902,
          columnNumber: 23
        }
      }, "Baranoa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "SantaMarta",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 903,
          columnNumber: 23
        }
      }, "Santa Marta"))), this.state.localizacion && this.state.localizacion.value === 'Cartagena' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 911,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 912,
          columnNumber: 21
        }
      }, "Tu sucursal m\xE1s cercana *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        name: "compraventa",
        className: "input",
        onChange: this.onChangeSelect,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 913,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 919,
          columnNumber: 25
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC02",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 920,
          columnNumber: 25
        }
      }, "Centro, Calle del Cabo. C.C Invercr\xE9dito. Local 5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC01",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 921,
          columnNumber: 25
        }
      }, "Centro, Calle del Cabo. C.C Invercr\xE9dito. Local 9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC04",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 923,
          columnNumber: 25
        }
      }, "Centro. Portal De Los Dulces, Calle Portocarrero"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Centenario",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 924,
          columnNumber: 25
        }
      }, "Parque centenario, Centro, Avenida Daniel lemaitreo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC07",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 926,
          columnNumber: 25
        }
      }, "Bocagrande. Cra 3 # 5- 187"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 927,
          columnNumber: 25
        }
      }, "San jose de los Campanos. Cra 101B. # 38A-83"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC13",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 928,
          columnNumber: 25
        }
      }, "Boquilla, Calle Principal. CRA 9 # 59-17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC14",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 929,
          columnNumber: 25
        }
      }, "Bazurto, C.C Almacentro. Local 4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC15",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 930,
          columnNumber: 25
        }
      }, "Turbaco, Calle Real #17-91"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC19",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 931,
          columnNumber: 25
        }
      }, "Poz\xF3n, Carrera 88 #56-1. A una cuadra de la entrada"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "SantaRosa",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 932,
          columnNumber: 25
        }
      }, "Santa Rosa. Calle 16 # 27-19"))), this.state.localizacion && this.state.localizacion.value === 'Sabanalarga' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 941,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 942,
          columnNumber: 21
        }
      }, "Tu sucursal m\xE1s cercanaa *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        name: "compraventa",
        className: "input",
        onChange: this.onChangeSelect,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 943,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 949,
          columnNumber: 23
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC05",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 950,
          columnNumber: 23
        }
      }, "Cra 19 N\xBA 20 - 14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC06",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 951,
          columnNumber: 23
        }
      }, "Calle 20 N\xBA 18 - 56"))), this.state.localizacion && this.state.localizacion.value === 'Baranoa' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 960,
          columnNumber: 18
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 961,
          columnNumber: 21
        }
      }, "Tu sucursal m\xE1s cercana *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        name: "compraventa",
        className: "input",
        onChange: this.onChangeSelect,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 962,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 968,
          columnNumber: 23
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC08",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 969,
          columnNumber: 23
        }
      }, "Carrera 19 #18-18 Local 2"))), this.state.localizacion && this.state.localizacion.value === 'SantaMarta' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 978,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 979,
          columnNumber: 23
        }
      }, "Tu sucursal m\xE1s cercana *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        name: "compraventa",
        className: "input",
        onChange: this.onChangeSelect,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 980,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 986,
          columnNumber: 25
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC09",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 987,
          columnNumber: 25
        }
      }, "Centro, Cra 5, Edificio Galaxia. Local 102"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 988,
          columnNumber: 25
        }
      }, "Centro, Cra 5 # 21 - 16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC11",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 989,
          columnNumber: 25
        }
      }, "Gaira, Cra 10 # 9- 35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC17",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 990,
          columnNumber: 25
        }
      }, "Avenida El Libertador #27 - 231"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "PAC18",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 991,
          columnNumber: 25
        }
      }, "Concepci\xF3n 2 Mz Y Casa 19. 2da Etapa "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "GranPunto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 992,
          columnNumber: 25
        }
      }, "Av. el Rio con Av. del libertador 30 -146"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Tayrona",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 993,
          columnNumber: 25
        }
      }, "Avenida Del Ferrocarril #5-08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Sierra",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 994,
          columnNumber: 25
        }
      }, "Mercado, Calle 12 #8-80"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Yucal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 995,
          columnNumber: 25
        }
      }, "El Yucal, via Minca."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 999,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1000,
          columnNumber: 25
        }
      }, "Nombres y Apellidos *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "names",
        onChange: this.onChangeInput,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1001,
          columnNumber: 25
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1008,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1009,
          columnNumber: 25
        }
      }, "Celular *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "mobile",
        onChange: this.onChangeInput,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1010,
          columnNumber: 25
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1017,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1018,
          columnNumber: 25
        }
      }, "Correo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "text",
        onChange: this.onChangeInput,
        name: "email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1019,
          columnNumber: 25
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1025,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1026,
          columnNumber: 25
        }
      }, "\xBF Cu\xE1nto necesita ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "input",
        type: "text",
        onChange: this.onChangeInput,
        name: "many",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1027,
          columnNumber: 25
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1033,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1034,
          columnNumber: 25
        }
      }, "\xBF C\xF3mo nos contact\xF3 ? *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        name: "source",
        className: "input",
        onChange: this.onChangeSelect,
        required: true,
        placeholder: "Seleccione una opcion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1035,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1042,
          columnNumber: 27
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Radio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1043,
          columnNumber: 27
        }
      }, "Radio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Volantes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1044,
          columnNumber: 27
        }
      }, "Volantes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Facebook",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1045,
          columnNumber: 27
        }
      }, "Facebook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Instagram",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1046,
          columnNumber: 27
        }
      }, "Instagram"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Google",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1047,
          columnNumber: 27
        }
      }, "Google"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Amigos",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1048,
          columnNumber: 27
        }
      }, "Amigos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "Otro",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1049,
          columnNumber: 27
        }
      }, "Otro"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "submit",
        className: "form-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1053,
          columnNumber: 23
        }
      }, "Enviar datos"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1063,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1064,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Cotizar;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cotizar);

/***/ })

})
//# sourceMappingURL=cotizar.js.061cfc591335cd87f44e.hot-update.js.map