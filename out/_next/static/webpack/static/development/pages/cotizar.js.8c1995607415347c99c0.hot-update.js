webpackHotUpdate("static/development/pages/cotizar.js",{

/***/ "./pages/cotizar.js":
/*!**************************!*\
  !*** ./pages/cotizar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Top__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Top */ "./components/Top.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _gracias__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gracias */ "./pages/gracias.js");
/* harmony import */ var _funciones_funciones__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../funciones/funciones */ "./funciones/funciones.js");









var _jsxFileName = "/Users/sr.arnold/Sites/cotizador/Pactemos/pages/cotizar.js";








var Dropzone = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(function () {
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
      value: 90000
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

var Cotizar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Cotizar, _Component);

  function Cotizar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Cotizar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Cotizar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      type: null,
      subtype: null,
      category: null,
      weight: undefined,
      value: undefined,
      visible: false,
      submited: false,
      files: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "closeModal", function () {
      _this.setState({
        visible: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "selectType", function (type) {
      _this.setState({
        type: type,
        subtype: null,
        category: null,
        weight: undefined,
        value: undefined
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "selectSubType", function (subtype) {
      _this.setState({
        subtype: subtype,
        category: null,
        weight: undefined,
        value: undefined
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "selectCategory", function (category) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChangeInput", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      if (_this.state.type.name === 'Joyería' && name === 'weight') {
        var _this$setState;

        _this.setState((_this$setState = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState, name, value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState, "value", value * _this.state.category.value), _this$setState));
      } else {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChangeSelect", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChangeTipoHerramienta", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState({
        category: {
          name: name,
          value: value
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChangeElectrodomesticos", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState({
        category: {
          name: name,
          value: value
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChangeTecnologia", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState({
        category: {
          name: name,
          value: value
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "submit", function (e) {
      e.preventDefault(); // const url = 'http://gestionshop.co/api/pactemos/cotizacion'

      var url = 'http://localhost:3001/api/pactemos/cotizacion';
      var formData = new FormData();

      for (var i = 0; i < _this.state.files.length; i++) {
        var file = _this.state.files[i];
        formData.append('files[' + i + ']', file);
      }

      formData.append('data', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_this.state));
      axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(url, formData, {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onDrop", function (newFiles) {
      var files = _this.state.files;
      files = files.concat(newFiles);

      _this.setState({
        files: files
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "deleteFiles", function (e) {
      e.preventDefault();

      _this.setState({
        files: []
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Cotizar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "Cotiza en Compraventa Pactemos")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Top__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "cover",
        src: "/static/img/cover-cotizar.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "offices-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Cotizador en l\xEDnea"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "Rellene los campos y recuerde que la informaci\xF3n personal la utilizaremos para confirmarle cu\xE1nto dinero le damos por su art\xEDculo"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Dropzone, {
        onDrop: this.onDrop,
        multiple: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
            getInputProps = _ref.getInputProps,
            isDragActive = _ref.isDragActive;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
          style: {
            margin: '30px 0 10px 0'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          style: {
            textAlign: 'left',
            fontSize: 14
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278
          },
          __self: this
        }, "Agregar imagen"), " (opcional)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          style: {
            padding: 30,
            color: '#aaa',
            textAlign: 'center',
            border: '1px dashed #ccc'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }, isDragActive ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }, "Soltar archivo") : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          },
          __self: this
        }, "Arrastra la imagen o clic para elegir"))), _this2.state.files && _this2.state.files.length > 0 && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          style: {
            marginTop: 10,
            padding: '10px 20px',
            textAlign: 'left',
            fontSize: 14,
            backgroundColor: '#f3f0ee',
            borderRadius: 4
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309
          },
          __self: this
        }, "Archivo seleccionado"), _this2.state.files.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 311
            },
            __self: this
          }, item.name);
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: "#",
          onClick: _this2.deleteFiles,
          style: {
            display: 'block',
            marginTop: 10,
            fontSize: 13,
            color: '#555'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314
          },
          __self: this
        }, "Borrar archivos seleccionados")));
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, data.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.selectType(item);
          },
          className: "cotizar-select-item ".concat(_this2.state.type && item.name === _this2.state.type.name ? 'active' : ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          },
          __self: this
        }, item.name));
      })), this.state.type && (this.state.type.name === 'Joyería' || this.state.type.name === 'Artículos') && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, this.state.type.options.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.selectSubType(item);
          },
          className: "cotizar-select-item ".concat(_this2.state.subtype && item.name === _this2.state.subtype.name ? 'active' : ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346
          },
          __self: this
        }, item.name));
      })), this.state.subtype && this.state.subtype.options && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, this.state.subtype.options.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.selectCategory(item);
          },
          className: "cotizar-select-item ".concat(_this2.state.category && item.name === _this2.state.category.name ? 'active' : ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 362
          },
          __self: this
        }, item.name));
      })), this.state.subtype && this.state.subtype.name === 'Herramientas' && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        name: "tipo_herramienta",
        className: "input",
        onChange: this.onChangeTipoHerramienta,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, "Seleccionar una herramienta"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Taladro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, "Taladro"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Pulidora",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, "Pulidora"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Caladora",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, "Caladora"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Trozadora",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, "Tronzadora"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Ingledora",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, "Ingletadora"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Sierra Circular",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, "Sierra Circular"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Lijadora",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, "Lijadora"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Ruteadora",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, "Ruteadora"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Pistola de Impacto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, "Pistola de Impacto"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Cortadora",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, "Cortadora"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Otro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, "Otros")))), this.state.subtype && this.state.subtype.name === 'Electrodomésticos' && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        name: "tipo_electrodomesticos",
        className: "input",
        onChange: this.onChangeElectrodomesticos,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, "Selecciona un electrodom\xE9stico"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Televisor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, "Televisor"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Nevera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, "Nevera"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Estufa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, "Estufa"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Equipo de Sonido",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, "Equipo de Sonido"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Otro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, "Otros")))), this.state.subtype && this.state.subtype.name === 'Tecnología' && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        name: "tipo_tecnologia",
        className: "input",
        onChange: this.onChangeTecnologia,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }, "Selecciona un articulo"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Portatil",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, "Portatil"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Tablet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, "Tablet"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Otro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }, "Otros")))), this.state.type && this.state.type.name === 'Joyería' && this.state.category && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, "Peso aproximado"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "En gramos",
        name: "weight",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }))), this.state.type && this.state.type.name === 'Artículos' && this.state.category && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }, "Marca *"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "brand",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, "Modelo"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "model",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }, "Tiempo de uso (Ej. 2 a\xF1o y/o 3 meses) *"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "time",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, "\xBFTiene factura? *"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "radio",
        placeholder: "",
        name: "invoice",
        value: "Si",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }), " Si"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "radio",
        placeholder: "",
        name: "invoice",
        value: "No",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }), " No"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, "Comentarios"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
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
          lineNumber: 539
        },
        __self: this
      })))), this.state.type && this.state.type.name === 'Otros' && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, "Tipo de articulo"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "articleType",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, "Marca"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "brand",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        },
        __self: this
      }, "Tiempo de uso"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "time",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: this
      }, "Comentarios"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
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
          lineNumber: 597
        },
        __self: this
      })))), this.state.type && this.state.type.name === 'Vender CDT' && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618
        },
        __self: this
      }, "Valor CDT"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "",
        name: "valueCDT",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630
        },
        __self: this
      }, "Fecha de apertura"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "date",
        placeholder: "",
        name: "openCDT",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 631
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        },
        __self: this
      }, "Fecha de vencimiento"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "date",
        placeholder: "",
        name: "closeCDT",
        onChange: this.onChangeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643
        },
        __self: this
      })))), this.state.type && this.state.type.name === 'Joyería' && this.state.weight && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663
        },
        __self: this
      }, "\xBFCu\xE1nto me dan por mi joya?"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664
        },
        __self: this
      }, "Te damos hasta $ ", _funciones_funciones__WEBPACK_IMPORTED_MODULE_16__["FormatMil"](this.state.value), " pesos"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        onClick: this.showModal,
        className: "cotizar-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666
        },
        __self: this
      }, "\xA1Quiero el dinero ya!"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        style: {
          marginTop: 10,
          fontSize: 13
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668
        },
        __self: this
      }, "*Aplican condiciones")), this.state.type && this.state.type.name === 'Artículos' && this.state.brand && this.state.time && this.state.invoice && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 688
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 689
        },
        __self: this
      }, "\xBFCu\xE1nto me dan por mi art\xEDculo?"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        onClick: this.showModal,
        className: "cotizar-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691
        },
        __self: this
      }, "\xA1Desc\xFAbrelo!"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        style: {
          marginTop: 10,
          fontSize: 13
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693
        },
        __self: this
      }, "*Aplican condiciones")), this.state.type && this.state.type.name === 'Vender CDT' && this.state.valueCDT && this.state.openCDT && this.state.closeCDT && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 715
        },
        __self: this
      }, "\xBFCu\xE1nto me dan por mi CDT?"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        onClick: this.showModal,
        className: "cotizar-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 717
        },
        __self: this
      }, "\xA1Desc\xFAbrelo!"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        style: {
          marginTop: 10,
          fontSize: 13
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 719
        },
        __self: this
      }, "*Aplican condiciones")), this.state.type && this.state.type.name === 'Otros' && this.state.articleType && this.state.brand && this.state.time && this.state.comment && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cotizar-result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 743
        },
        __self: this
      }, "\xBFCu\xE1nto me dan por mi art\xEDculo?"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        onClick: this.showModal,
        className: "cotizar-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 745
        },
        __self: this
      }, "\xA1Desc\xFAbrelo!"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        style: {
          marginTop: 10,
          fontSize: 13
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 747
        },
        __self: this
      }, "*Aplican condiciones")), this.state.visible && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "myModal",
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 760
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 761
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        onClick: this.closeModal,
        className: "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 762
        },
        __self: this
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        name: "cotizacion",
        method: "POST",
        onSubmit: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        style: {
          marginBottom: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765
        },
        __self: this
      }, "Completa tus datos personales"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 766
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 767
        },
        __self: this
      }, "Nombres y Apellidos *"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "names",
        onChange: this.onChangeInput,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 768
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776
        },
        __self: this
      }, "Celular *"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "mobile",
        onChange: this.onChangeInput,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 777
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 784
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 785
        },
        __self: this
      }, "Correo"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "text",
        onChange: this.onChangeInput,
        name: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 786
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 792
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 793
        },
        __self: this
      }, "\xBFCu\xE1nto necesita?"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "input",
        type: "text",
        onChange: this.onChangeInput,
        name: "many",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 794
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 800
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 801
        },
        __self: this
      }, "\xBFC\xF3mo nos contact\xF3? *"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        name: "source",
        className: "input",
        onChange: this.onChangeSelect,
        required: true,
        placeholder: "Seleccione una opcion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 802
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 809
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 810
        },
        __self: this
      }, "Radio"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Volantes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 811
        },
        __self: this
      }, "Volantes"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 812
        },
        __self: this
      }, "Facebook"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Instagram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 813
        },
        __self: this
      }, "Instagram"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Google",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 814
        },
        __self: this
      }, "Google"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Amigos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 815
        },
        __self: this
      }, "Amigos"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Otro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 816
        },
        __self: this
      }, "Otro"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "submit",
        className: "form-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 820
        },
        __self: this
      }, "Enviar datos"))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 830
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 831
        },
        __self: this
      })));
    }
  }]);

  return Cotizar;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cotizar);

/***/ })

})
//# sourceMappingURL=cotizar.js.8c1995607415347c99c0.hot-update.js.map