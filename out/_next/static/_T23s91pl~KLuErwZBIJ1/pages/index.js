(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{RNiq:function(e,a,t){"use strict";t.r(a);var l=t("0iUn"),n=t("sLSF"),s=t("MI3g"),c=t("a7VT"),o=t("AT/M"),r=t("Tit0"),m=t("vYYK"),i=t("q1tI"),u=t.n(i),d=t("m/Pd"),p=t.n(d),E=t("6npZ"),h=t("8lYe"),v=t("vDqi"),g=t.n(v),N=(t("naA1"),function(e){function a(){var e,t;Object(l.default)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=Object(s.default)(this,(e=Object(c.default)(a)).call.apply(e,[this].concat(r))),Object(m.a)(Object(o.default)(t),"state",{step:1,visible:!1,visibleModal:!1,submited:!1,typeData:"domicilio"}),Object(m.a)(Object(o.default)(t),"showModal",function(e){e.preventDefault(),t.setState({visibleModal:!0})}),Object(m.a)(Object(o.default)(t),"closeModal",function(){t.setState({visibleModal:!1})}),Object(m.a)(Object(o.default)(t),"onChangeInput",function(e){var a=e.target.name,l=e.target.value;t.setState(Object(m.a)({},a,l))}),Object(m.a)(Object(o.default)(t),"onChangeSelect",function(e){var a=e.target.name,l=e.target.value;t.setState(Object(m.a)({},a,l))}),Object(m.a)(Object(o.default)(t),"submit",function(e){e.preventDefault();g.a.post("https://gestionshop.co/api/pactemos/domicilio",t.state).then(function(e){t.setState({submited:!0}),window.location.replace("/gracias")}).catch(function(e){alert("Ocurrio un error y no se pudo enviar la información."),console.log("res error",e)})}),Object(m.a)(Object(o.default)(t),"showStep",function(e){t.setState({step:e})}),t}return Object(r.default)(a,e),Object(n.default)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){var a=e.state.step+1;4===a&&(a=1),e.setState({step:a})},3e3)}},{key:"render",value:function(){var e=this,a=this.state.step;return u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,null,u.a.createElement("title",null,"Compraventas Pactemos - Dinero inmediato")),u.a.createElement("div",null,u.a.createElement(E.a,null),u.a.createElement("section",{className:"home-welcome"},u.a.createElement("div",{className:"container"},u.a.createElement("figure",{className:"home-welcome-img"},u.a.createElement("img",{src:"/static/img/banner-home.png",alt:""})),u.a.createElement("a",{className:"home-welcome-btn",href:"/cotizar"},"Obtenlo aqui"))),u.a.createElement("div",{className:"container"},u.a.createElement("section",{className:"home-steps"},u.a.createElement("div",{className:"home-steps-row"},u.a.createElement("ul",{className:"home-steps-list"},u.a.createElement("h2",{className:"home-steps-title"},"Obtén dinero Inmediato en solo 3 pasos !Así de fácil!"),u.a.createElement("li",{className:"home-steps-item",onClick:function(){return e.showStep(1)}},u.a.createElement("span",{className:1===a?"home-steps-circle active":"home-steps-circle"},"1"),u.a.createElement("div",null,u.a.createElement("strong",null,"Paso 1"),u.a.createElement("p",null,"Revisa cuánto te damos por tu artículo ",u.a.createElement("a",{href:"/cotizar"},"AQUI")))),u.a.createElement("li",{className:"home-steps-item",onClick:function(){return e.showStep(2)}},u.a.createElement("span",{className:2===a?"home-steps-circle active":"home-steps-circle"},"2"),u.a.createElement("div",null,u.a.createElement("strong",null,"Paso 2"),u.a.createElement("p",null,"Danos tus datos personales y recibirás la confirmación."))),u.a.createElement("li",{className:"home-steps-item",onClick:function(){return e.showStep(3)}},u.a.createElement("span",{className:3===a?"home-steps-circle active":"home-steps-circle"},"3"),u.a.createElement("div",null,u.a.createElement("strong",null,"Paso 3"),u.a.createElement("p",null,"Obtén el dinero que necesitas.")))),u.a.createElement("figure",{className:"home-steps-figures"},u.a.createElement("img",{src:"/static/img/step-"+this.state.step+".png",alt:""})))),u.a.createElement("section",{className:"home-benefits"},u.a.createElement("div",{className:"home-benefits-row"},u.a.createElement("div",{className:"home-benefits-half"},u.a.createElement("h3",null,"Lo que tiene valor para ti, también lo tiene para nosotros"),u.a.createElement("p",null,"Por eso a través de una compraventa con pacto de retroventa, podrás obtener dinero inmediato con tus artículos.")),u.a.createElement("div",{className:"home-benefits-half"},u.a.createElement("h4",null,"Beneficios"),u.a.createElement("ul",null,u.a.createElement("li",null,"Puedes recuperar tu artículo cuando lo decidas"),u.a.createElement("li",null,"No tienes que vender eso que tanto aprecias"),u.a.createElement("li",null,"Puedes usar el mismo artículo las veces que quieras"),u.a.createElement("li",null,"Sin trámites demorados"))))),u.a.createElement("section",{className:"home-products"},u.a.createElement("div",{className:"home-products-row"},u.a.createElement("img",{className:"home-products-img",src:"/static/img/productos.png",alt:""}),u.a.createElement("div",null,u.a.createElement("h2",{className:"home-products-title"},"Artículos que puedes convertir en Dinero Inmediato"),u.a.createElement("div",null,u.a.createElement("div",{className:"home-products-item"},u.a.createElement("div",{className:"home-products-item-header"},u.a.createElement("img",{className:"home-products-item-img",src:"/static/img/diamond.svg",alt:""}),u.a.createElement("h4",null,"Joyas de oro y plata")),u.a.createElement("p",null,"La valorización de tus joyas depende de características como: el peso, estado de la joya, pureza del oro, (22k,18k, 14k, 10k etc)")),u.a.createElement("div",{className:"home-products-item"},u.a.createElement("div",{className:"home-products-item-header"},u.a.createElement("img",{className:"home-products-item-img",src:"/static/img/refrigerator.svg",alt:""}),u.a.createElement("h4",null,"Otros productos")),u.a.createElement("p",null,"Electrodomésticos, Herramientas, Tecnología, Bicicletas y más.")),u.a.createElement("div",{className:"home-products-item"},u.a.createElement("div",{className:"home-products-item-header"},u.a.createElement("img",{className:"home-products-item-img",src:"/static/img/file.svg",alt:""}),u.a.createElement("h4",null,"Tu CDT")),u.a.createElement("p",null,"Puedes obtener el dinero de tu cdt antes de la fecha de vencimiento.")),u.a.createElement("a",{className:"home-welcome-btn",href:"/cotizar"},"Cotiza aquí"))))),u.a.createElement("section",{className:"home-contact"},u.a.createElement("div",{className:"home-contact-header"},u.a.createElement("h3",null,"¿Cuanto me dan por mis artículos?"),u.a.createElement("p",null,"Ya no tienes que salir de casa para saber cuánto dinero puedes recibir por tu joya de oro, televisor o herramienta, ahora puedes hacerlo desde la comodidad de tu casa u oficina.")),u.a.createElement("div",{className:"home-contact-row"},u.a.createElement("div",{className:"home-contact-item"},u.a.createElement("a",{className:"home-contact-link",href:"https://wa.me/573015371656",target:"_blank"},u.a.createElement("img",{src:"/static/img/whatsapp.svg",alt:"Asesoría por Whatsapp"}),u.a.createElement("span",null,"Asesoría por Whatsapp"))),u.a.createElement("div",{className:"home-contact-item"},u.a.createElement("a",{className:"home-contact-link",href:"/cotizar"},u.a.createElement("img",{src:"/static/img/computer.svg",alt:"Cotizador en línea"}),u.a.createElement("span",null,"Cotizador en línea"))),u.a.createElement("div",{className:"home-contact-item"},u.a.createElement("a",{className:"home-contact-link",href:"#",onClick:this.showModal},u.a.createElement("img",{src:"/static/img/hand.svg",alt:"Servicio a Domicilio"}),u.a.createElement("span",null,"Servicio a Domicilio")))))),u.a.createElement("section",{className:"home-choose"},u.a.createElement("div",{className:"container"},u.a.createElement("h2",{className:"home-choose-title"},"Porque elegir a Compraventas Pactemos"),u.a.createElement("div",{className:"home-choose-list"},u.a.createElement("div",{className:"home-choose-item"},u.a.createElement("img",{src:"/static/img/seguridad.png",alt:""}),u.a.createElement("div",null,u.a.createElement("h3",null,"Por seguridad"),u.a.createElement("p",null,"Compraventas Pactemos es la única empresa en Colombia en la que tus artículos son custodiados y guardados por una empresa de valores hasta que tu decidas regresar por ellas, eso te da la garantía de que tus joyas cuentan con un seguro sin generar costos adicionales."))),u.a.createElement("div",{className:"home-choose-item right"},u.a.createElement("div",null,u.a.createElement("h3",null,"Personal calificado"),u.a.createElement("p",null,"Tenemos más de 60 colaboradores capacitados para brindar un buen servicio y la mejor atención, además cuentan con amplios conocimientos y gran experiencia para valorar tus artículos de manera profesional.")),u.a.createElement("img",{src:"/static/img/calificado.png",alt:""})),u.a.createElement("div",{className:"home-choose-item"},u.a.createElement("img",{src:"/static/img/respaldo.png",alt:""}),u.a.createElement("div",null,u.a.createElement("h3",null,"Cuentas con mayor respaldo"),u.a.createElement("p",null,"Somos una empresa en constante crecimiento, organizada y con procesos administrativos transparentes que permiten que nuestros clientes tengan total confianza a la hora de realizar sus transacciones."))),u.a.createElement("div",{className:"home-choose-item right"},u.a.createElement("div",null,u.a.createElement("h3",null,"Hacemos todo lo posible para que recupere su articulo"),u.a.createElement("p",null,"Le avisamos por SMS, mail, llamadas telefónicas, whatsapp, o personalmente el tiempo de su artículo.")),u.a.createElement("img",{src:"/static/img/recuperacion.png",alt:""}))))),u.a.createElement("div",{className:"container"},u.a.createElement("section",{className:"home-products"},u.a.createElement("div",{className:"home-products-row"},u.a.createElement("img",{className:"home-products-img",src:"/static/img/mas-servicios.png",alt:""}),u.a.createElement("div",null,u.a.createElement("h2",{className:"home-products-title"},"Además en compraventas pactemos podrás:"),u.a.createElement("p",null,"Comprar lo que necesites, joyas de oro y plata, electrodomésticos, herramientas, tecnología, bicicletas y mucho más."),u.a.createElement("div",null,u.a.createElement("h4",null,"¿Porque comprar en nuestras compraventas?"),u.a.createElement("ul",{className:"home-servicios-list"},u.a.createElement("li",null,"Nuestros artículos usados se venden con precios sorprendentes y lo mejor, con  ",u.a.createElement("strong",null,"Garantía"),"."),u.a.createElement("li",null,"Vendemos artículos totalmente nuevos con garantía."),u.a.createElement("li",null,"Te entregamos factura, así que su compra es totalmente legal, en caso de algún reclamo.")))))),u.a.createElement(h.a,null),this.state.visibleModal&&u.a.createElement("div",{id:"myModal",className:"modal"},u.a.createElement("div",{className:"modal-content"},u.a.createElement("span",{onClick:this.closeModal,className:"close"},"×"),u.a.createElement("form",{name:"cotizacion",method:"POST",onSubmit:this.submit},u.a.createElement("h3",{style:{marginBottom:30}},"Completa tus datos personales"),u.a.createElement("div",{className:"form-row"},u.a.createElement("label",{className:"label"},"Nombres y Apellidos *"),u.a.createElement("input",{className:"input",type:"text",name:"names",onChange:this.onChangeInput,required:!0})),u.a.createElement("div",{className:"form-row"},u.a.createElement("label",{className:"label"},"Celular *"),u.a.createElement("input",{className:"input",type:"text",name:"mobile",onChange:this.onChangeInput,required:!0})),u.a.createElement("div",{className:"form-row"},u.a.createElement("label",{className:"label"},"Correo"),u.a.createElement("input",{className:"input",type:"text",onChange:this.onChangeInput,name:"email"})),u.a.createElement("div",{className:"form-row"},u.a.createElement("label",{className:"label"},"¿Cuánto necesita?"),u.a.createElement("input",{className:"input",type:"text",onChange:this.onChangeInput,name:"many"})),u.a.createElement("div",{className:"form-row"},u.a.createElement("label",{className:"label"},"¿Cómo nos contactó? *"),u.a.createElement("select",{name:"source",className:"input",onChange:this.onChangeSelect,required:!0},u.a.createElement("option",null),u.a.createElement("option",{value:"Radio"},"Radio"),u.a.createElement("option",{value:"Volantes"},"Volantes"),u.a.createElement("option",{value:"Facebook"},"Facebook"),u.a.createElement("option",{value:"Instagram"},"Instagram"),u.a.createElement("option",{value:"Google"},"Google"),u.a.createElement("option",{value:"Amigos"},"Amigos"),u.a.createElement("option",{value:"Otro"},"Otro"))),u.a.createElement("button",{type:"submit",className:"form-btn"},"Enviar datos")))))))}}]),a}(i.Component));a.default=N},vlRD:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=t("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);