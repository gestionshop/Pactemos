webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Top__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Top */ "./components/Top.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _gracias__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gracias */ "./pages/gracias.js");







var _jsxFileName = "/Users/sr.arnold/Sites/Pactemos/pages/index.js";







var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      step: 1,
      visible: false,
      visibleModal: false,
      submited: false,
      typeData: 'domicilio'
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChangeCiudad", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState({
        category: {
          name: name,
          value: value
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submit", function (e) {
      e.preventDefault(); // const url = 'http://localhost:3001/api/pactemos/domicilio'

      var url = 'https://gestionshop.co/api/pactemos/domicilio';
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(url, _this.state).then(function (res) {
        _this.setState({
          submited: true
        });

        window.location.replace('/gracias');
      }).catch(function (error) {
        alert('Ocurrio un error y no se pudo enviar la información.');
        console.log('res error', error);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showStep", function (step) {
      _this.setState({
        step: step
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        var step = _this2.state.step + 1;

        if (step === 4) {
          step = 1;
        }

        _this2.setState({
          step: step
        });
      }, 3000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var classStep = 'home-steps-circle';
      var classStepActive = 'home-steps-circle active';
      var step = this.state.step;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Compraventas Pactemos")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Top__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "home-welcome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "home-welcome-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/banner-home.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "home-welcome-btn",
        href: "/cotizar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Obtenlo aqui"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "home-steps",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-steps-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "home-steps-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "home-steps-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Obt\xE9n dinero Inmediato en solo 3 pasos !As\xED de f\xE1cil!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "home-steps-item",
        onClick: function onClick() {
          return _this3.showStep(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: step === 1 ? classStepActive : classStep,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Paso 1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Revisa cu\xE1nto te damos por tu art\xEDculo ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "/cotizar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "AQUI")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "home-steps-item",
        onClick: function onClick() {
          return _this3.showStep(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: step === 2 ? classStepActive : classStep,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "2"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Paso 2"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Danos tus datos personales y recibir\xE1s la confirmaci\xF3n."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "home-steps-item",
        onClick: function onClick() {
          return _this3.showStep(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: step === 3 ? classStepActive : classStep,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "3"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Paso 3"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Obt\xE9n el dinero que necesitas.")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "home-steps-figures",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/step-" + this.state.step + ".png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "home-benefits",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-benefits-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-benefits-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Lo que tiene valor para ti, tambi\xE9n lo tiene para nosotros"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Por eso a trav\xE9s de una compraventa con pacto de retroventa, podr\xE1s obtener dinero inmediato con tus art\xEDculos.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-benefits-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Beneficios"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Puedes recuperar tu art\xEDculo cuando lo decidas"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "No tienes que vender eso que tanto aprecias"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Puedes usar el mismo art\xEDculo las veces que quieras"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Sin tr\xE1mites demorados"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "home-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-products-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "home-products-img",
        src: "/static/img/productos.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "home-products-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Art\xEDculos que puedes convertir en Dinero Inmediato"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-products-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-products-item-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "home-products-item-img",
        src: "/static/img/diamond.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Joyas de oro y plata")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "La valorizaci\xF3n de tus joyas depende de caracter\xEDsticas como: el peso, estado de la joya, pureza del oro, (22k,18k, 14k, 10k etc)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-products-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-products-item-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "home-products-item-img",
        src: "/static/img/refrigerator.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Otros productos")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Electrodom\xE9sticos, Herramientas, Tecnolog\xEDa, Bicicletas y m\xE1s.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-products-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-products-item-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "home-products-item-img",
        src: "/static/img/file.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "Tu CDT")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "Puedes obtener el dinero de tu cdt antes de la fecha de vencimiento.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "home-welcome-btn",
        href: "/cotizar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Cotiza aqu\xED"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "home-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-contact-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "Ya no tienes que salir de casa para saber cu\xE1nto dinero puedes recibir por tu joya de oro, televisor o herramienta, ahora puedes hacerlo desde la comodidad de tu casa u oficina.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-contact-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-contact-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "home-contact-link",
        href: "https://wa.me/573015371656",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/whatsapp.svg",
        alt: "Asesor\xEDa por Whatsapp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Asesor\xEDa por Whatsapp"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-contact-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "home-contact-link",
        href: "/cotizar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/computer.svg",
        alt: "Cotizador en l\xEDnea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "Cotizador en l\xEDnea"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-contact-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "home-contact-link",
        href: "#",
        onClick: this.showModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/hand.svg",
        alt: "Servicio a Domicilio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "Servicio a Domicilio")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "home-choose",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "home-choose-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Porque elegir a Compraventas Pactemos"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-choose-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-choose-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/seguridad.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Por seguridad"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "Compraventas Pactemos es la \xFAnica empresa en Colombia en la que tus art\xEDculos son custodiados y guardados por una empresa de valores hasta que tu decidas regresar por ellas, eso te da la garant\xEDa de que tus joyas cuentan con un seguro sin generar costos adicionales."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-choose-item right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Personal calificado"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Tenemos m\xE1s de 60 colaboradores capacitados para brindar un buen servicio y la mejor atenci\xF3n, adem\xE1s cuentan con amplios conocimientos y gran experiencia para valorar tus art\xEDculos de manera profesional.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/calificado.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-choose-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/respaldo.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "Cuentas con mayor respaldo"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "Somos una empresa en constante crecimiento, organizada y con procesos administrativos transparentes que permiten que nuestros clientes tengan total confianza a la hora de realizar sus transacciones."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-choose-item right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Hacemos todo lo posible para que recupere su articulo"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "Le avisamos por SMS, mail, llamadas telef\xF3nicas, whatsapp, o personalmente el tiempo de su art\xEDculo.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/recuperacion.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "home-products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "home-products-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "home-products-img",
        src: "/static/img/mas-servicios.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "home-products-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "Adem\xE1s en compraventas pactemos podr\xE1s:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "Comprar lo que necesites, joyas de oro y plata, electrodom\xE9sticos, herramientas, tecnolog\xEDa, bicicletas y mucho m\xE1s."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "\xBFPorque comprar en nuestras compraventas?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "home-servicios-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "Nuestros art\xEDculos usados se venden con precios sorprendentes y lo mejor, con  ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "Garant\xEDa"), "."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Vendemos art\xEDculos totalmente nuevos con garant\xEDa."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "Te entregamos factura, as\xED que su compra es totalmente legal, en caso de alg\xFAn reclamo.")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }), this.state.visibleModal && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "myModal",
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        onClick: this.closeModal,
        className: "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, "\xD7"), // this.state.submited
      // ?
      // <Thanks/>
      // // <p>La información se envio a la CompraVenta.</p>
      // :
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        name: "cotizacion",
        method: "POST",
        onSubmit: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        style: {
          marginBottom: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "Completa tus datos personales"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, "Selecciona tu ciudad *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        name: "city",
        className: "input",
        onChange: this.onChangeCiudad,
        required: true,
        placeholder: "Seleccione tu cuidad",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Cartagena",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, "Cartagena"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Sabanalarga",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "Sabanalarga"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Baranoa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, "Baranoa"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "SantaMarta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "Santa Marta"))), this.state.category && this.state.category.value === 'Cartagena' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "Tu sucursal m\xE1s cercana *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        name: "compraventa",
        className: "input",
        onChange: this.onChangeSelect,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC02",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "Centro, Calle del Cabo. C.C Invercr\xE9dito. Local 5"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC01",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, "Centro, Calle del Cabo. C.C Invercr\xE9dito. Local 9"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC03",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, "Centro, Calle de las Carretas"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC04",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "Centro. Portal De Los Dulces, Calle Portocarrero"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, "Centro, C.C. El Ca\xF1onazo Lc 7"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC07",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, "Bocagrande. Cra 3 # 5- 187"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, "San jose de los Campanos. Cra 101B. # 38A-83"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, "Boquilla, Calle Principal. CRA 9 # 59-17"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, "Bazurto, C.C Almacentro. Local 4"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, "Turbaco, Calle Real #17-91"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC19",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, "Poz\xF3n, Carrera 88 #56-1. A una cuadra de la entrada"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "SantaRosa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, "Santa Rosa. Calle 16 # 27-19"))), this.state.category && this.state.category.value === 'Sabanalarga' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, "Tu sucursal m\xE1s cercanaa *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        name: "compraventa",
        className: "input",
        onChange: this.onChangeSelect,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC05",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, "Cra 19 N\xBA 20 - 14"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC06",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "Calle 20 N\xBA 18 - 56"))), this.state.category && this.state.category.value === 'Baranoa' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, "Tu sucursal m\xE1s cercana *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        name: "compraventa",
        className: "input",
        onChange: this.onChangeSelect,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC08",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, "Carrera 19 #18-18 Local 2"))), this.state.category && this.state.category.value === 'SantaMarta' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, "Tu sucursal m\xE1s cercana *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        name: "compraventa",
        className: "input",
        onChange: this.onChangeSelect,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC09",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, "Centro, Cra 5, Edificio Galaxia. Local 102"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, "Centro, Cra 5 # 21 - 16"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, "Gaira, Cra 10 # 9- 35"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC17",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, "Avenida El Libertador #27 - 231"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "PAC18",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, "Concepci\xF3n 2 Mz Y Casa 19. 2da Etapa "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "GranPunto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, "Av. el Rio con Av. del libertador 30 -146"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Tayrona",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, "Avenida Del Ferrocarril #5-08"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Sierra",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "Mercado, Calle 12 #8-80"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
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
          lineNumber: 401
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
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
          lineNumber: 410
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, "Correo"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "input",
        type: "text",
        onChange: this.onChangeInput,
        name: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, "\xBF Cu\xE1nto necesita ?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "input",
        type: "text",
        onChange: this.onChangeInput,
        name: "many",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        __self: this
      }, "\xBF C\xF3mo nos contact\xF3 ? *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        name: "source",
        className: "input",
        onChange: this.onChangeSelect,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        __self: this
      }, "Radio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Volantes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, "Volantes"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, "Facebook"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Instagram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, "Instagram"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Google",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, "Google"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Amigos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, "Amigos"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Otro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, "Otro"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        className: "form-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, "Enviar datos")))))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.02eeaded773abc213e90.hot-update.js.map