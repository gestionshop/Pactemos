webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Top.js":
/*!***************************!*\
  !*** ./components/Top.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pages_gracias__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/gracias */ "./pages/gracias.js");







var _jsxFileName = "/Users/sr.arnold/Sites/cotizador/Pactemos/components/Top.js";




var Top =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Top, _Component);

  function Top() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Top);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Top)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      visible: false,
      visibleModal: false,
      submited: false,
      typeData: 'domicilio'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showMenu", function () {
      _this.setState({
        visible: !_this.state.visible
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showModal", function (e) {
      e.preventDefault();

      _this.setState({
        visibleModal: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeModal", function () {
      _this.setState({
        visibleModal: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChangeInput", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChangeSelect", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submit", function (e) {
      e.preventDefault(); // const url = 'http://localhost:3001/api/pactemos/domicilio'

      var url = 'https://gestionshop.co/api/pactemos/domicilio';
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(url, _this.state).then(function (res) {
        _this.setState({
          submited: true
        });

        console.log('ENVIADOO');
        window.location.replace('/gracias');
      }).catch(function (error) {
        alert('Ocurrio un error y no se pudo enviar la información');
        console.log('res error', error);
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Top, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        className: "Top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Top_row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "Top_logo",
        src: "/static/img/logo.png",
        alt: "Compra Venta Pactemos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        onClick: this.showMenu,
        className: "Top_menu_icon",
        src: "/static/img/menu.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), this.state.visible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "Top_list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "Top_item",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Inicio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "Top_item",
        href: "/sucursales",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Sucursales"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "Top_item",
        href: "/noticias",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Noticias"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "Top_item",
        href: "#",
        onClick: this.showModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Servicio a Domicilio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "Top_item",
        href: "/cotizar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Cotizar en linea")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "Top_list_desktop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "Top_item",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Inicio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "Top_item",
        href: "/sucursales",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Sucursales"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "Top_item",
        href: "/noticias",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Noticias"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "Top_item",
        href: "#",
        onClick: this.showModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Servicio a Domicilio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "Top_item Top_item_button",
        href: "/cotizar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Cotizar en linea")))), this.state.visibleModal && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "myModal",
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        onClick: this.closeModal,
        className: "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        name: "cotizacion",
        method: "POST",
        onSubmit: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        style: {
          marginBottom: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Completa tus datos personales"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Nombres y Apellidos *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "names",
        onChange: this.onChangeInput,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Celular *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "mobile",
        onChange: this.onChangeInput,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Correo"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "input",
        type: "text",
        onChange: this.onChangeInput,
        name: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "\xBFCu\xE1nto necesita?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "input",
        type: "text",
        onChange: this.onChangeInput,
        name: "many",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "\xBFC\xF3mo nos contact\xF3? *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        name: "source",
        className: "input",
        onChange: this.onChangeSelect,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Radio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Volantes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Volantes"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Facebook"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Instagram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Instagram"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Google",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Google"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Amigos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Amigos"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Otro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Otro"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        className: "form-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Enviar datos")))));
    }
  }]);

  return Top;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Top);

/***/ })

})
//# sourceMappingURL=index.js.b7d68fe5f908a0eb4a6a.hot-update.js.map