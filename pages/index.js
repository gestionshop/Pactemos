import React, { Component } from 'react';
import Head from 'next/head';
import Top from '../components/Top';
import Footer from '../components/Footer';
import axios from 'axios';
import Thanks from './gracias'

import { serviceSendToSalesforce } from '../services/salesforce'

class Home extends Component {
  state = {
    step: 1,
    visible: false,
    visibleModal: false,
    submited: false,
    typeData: 'domicilio',
    names: ''
  }

  componentDidMount() {
    setInterval(() => {
      let step = this.state.step + 1
      if (step === 4) {
        step = 1
      }
      this.setState({ step })
    }, 3000)
  }
  showModal = (e) => {
    e.preventDefault()
    this.setState({ visibleModal: true })
  }
  closeModal = () => {
    this.setState({ visibleModal: false })
  }
  onChangeInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    const names = (
      name === 'name'
        ? `${value} ${ this.state.lasname || '' }`.trim()
      : name === 'lastname'
        ? `${ this.state.name || '' } ${value}`.trim()
      : this.state.names
    )

    this.setState({
      [name]: value,
      names
    })
  }
  onChangeSelect = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value,
    })
  }
  onChangeCiudad = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      category: {
        name,
        value,
      }
    })
  }

  submit = (e) => {
    e.preventDefault()

    // const url = 'http://localhost:3001/api/pactemos/domicilio'
    const url = 'https://gestionshop.co/api/pactemos/domicilio'
    axios.post(url, this.state)
    .then(() => this.sendToSalesforce())
    .then(res => {
      this.setState({ submited: true })
      window.location.replace('/gracias')
    }).catch(error => {
      alert('Ocurrio un error y no se pudo enviar la información.')
      console.log('res error', error)
    })
  }

  sendToSalesforce = () => {
    const values = {
      oid: '00D4x000006qQ0N',
      retURL: 'https://compraventaspactemos.com/cotizar/',
      first_name: this.state.name,
      last_name: this.state.lastname,
      email: this.state.email,
      mobile: this.state.mobile,
      '00N4x00000Knv0j': this.state.category.value,
      '00N4x00000Q5kDM': 'Dinero inmediato',
      '00N4x00000Knv1D': this.state.compraventa,
      '00N4x00000KnvIO': this.state.many,
      'lead_source': this.state.source,
      xSucursal: 'PCT 100'
    }

    return serviceSendToSalesforce(values)
  }

  showStep = (step) => {
    this.setState({step})
  }
  render () {

    const classStep = 'home-steps-circle'
    const classStepActive = 'home-steps-circle active'
    const {
      step,
    } = this.state

    return (
      <>
        <Head>
          <title>Compraventas Pactemos - Obten dinero inmediato de manera segura</title>
          <meta name="description" content="Más que casas de empeño, somos una cadena de compraventas confiables y seguras donde te ofrecemos más dinero por tus joyas y artículos."/>
        </Head>
        <div>
          <Top />

          <section className="home-welcome">
            <div className="container">
              <figure className="home-welcome-img">
                <img src="/static/img/banner-home.png" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
              </figure>
              <a className="home-welcome-btn" href="/cotizar">Obtenlo aqui</a>
            </div>
          </section>

          <div className="container">

            <section className="home-steps">
              <div className="home-steps-row">
                <ul className="home-steps-list">
                  <h2 className="home-steps-title">Obtén dinero Inmediato en solo 3 pasos !Así de fácil!</h2>
                  <li className="home-steps-item" onClick={() => this.showStep(1)}>
                    <span className={ step === 1 ? classStepActive : classStep }>1</span>
                    <div>
                      <strong>Paso 1</strong>
                      <p>Revisa cuánto te damos por tu artículo <a href="/cotizar">AQUI</a></p>
                    </div>
                  </li>
                  <li className="home-steps-item" onClick={() => this.showStep(2)}>
                    <span className={ step === 2 ? classStepActive : classStep }>2</span>
                    <div>
                      <strong>Paso 2</strong>
                      <p>Danos tus datos personales y recibirás la confirmación.</p>
                    </div>
                  </li>
                  <li className="home-steps-item" onClick={() => this.showStep(3)}>
                    <span className={ step === 3 ? classStepActive : classStep }>3</span>
                    <div>
                      <strong>Paso 3</strong>
                      <p>Obtén el dinero que necesitas.</p>
                    </div>
                  </li>
                </ul>
                <figure className="home-steps-figures">
                  <img src={"/static/img/step-" + this.state.step + ".png"} alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
                </figure>
              </div>
            </section>

            <section className="home-benefits">
              <div className="home-benefits-row">
                <div className="home-benefits-half">
                  <h3>Lo que tiene valor para ti, también lo tiene para nosotros</h3>
                  <p>Por eso a través de una compraventa con pacto de retroventa, podrás obtener dinero inmediato con tus artículos.</p>
                </div>
                <div className="home-benefits-half">
                  <h4>Beneficios</h4>
                  <ul>
                    <li>Puedes recuperar tu artículo cuando lo decidas</li>
                    <li>No tienes que vender eso que tanto aprecias</li>
                    <li>Puedes usar el mismo artículo las veces que quieras</li>
                    <li>Sin trámites demorados</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="home-products">
              <div className="home-products-row">
                <img className="home-products-img" src="/static/img/productos.png" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
                <div>
                  <h2 className="home-products-title">Artículos que puedes convertir en Dinero Inmediato</h2>

                  <div>
                    <div className="home-products-item">
                      <div className="home-products-item-header">
                        <img className="home-products-item-img" src="/static/img/diamond.svg" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
                        <h4>Joyas de oro y plata</h4>
                      </div>
                      <p>La valorización de tus joyas depende de características como: el peso, estado de la joya, pureza del oro, (22k,18k, 14k, 10k etc)</p>
                    </div>

                    <div className="home-products-item">
                      <div className="home-products-item-header">
                        <img className="home-products-item-img" src="/static/img/refrigerator.svg" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
                        <h4>Otros productos</h4>
                      </div>
                      <p>Electrodomésticos, Herramientas, Tecnología, Bicicletas y más.</p>
                    </div>

                    <div className="home-products-item">
                      <div className="home-products-item-header">
                        <img className="home-products-item-img" src="/static/img/file.svg" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
                        <h4>Tu CDT</h4>
                      </div>
                      <p>Puedes obtener el dinero de tu cdt antes de la fecha de vencimiento.</p>
                    </div>

                    <a className="home-welcome-btn" href="/cotizar">Cotiza aquí</a>
                  </div>
                </div>
              </div>
            </section>

            <section className="home-contact">
              <div className="home-contact-header">
                {/* <h3>¿Cuanto me dan por mis artículos?</h3> */}
                <p>Ya no tienes que salir de casa para saber cuánto dinero puedes recibir por tu joya de oro, televisor o herramienta, ahora puedes hacerlo desde la comodidad de tu casa u oficina.</p>
              </div>
              <div className="home-contact-row">
                <div className="home-contact-item">
                  <a className="home-contact-link"
                    href="https://api.whatsapp.com/send?phone=573012693491&text=%F0%9F%91%8B%20%20Hola!!%20Estuve%20revisando%20la%20web%20de%20*COMPRAVENTAS%20PACTEMOS*%20y%20necesito%20asesor%C3%ADa"
                  // href="https://wa.me/573012693491"
                    target="_blank">
                    <img src="/static/img/whatsapp.svg" alt="Asesoría por Whatsapp" />
                    <span>Asesoría por Whatsapp</span>
                  </a>
                </div>
                <div className="home-contact-item">
                  <a className="home-contact-link" href="/cotizar">
                    <img src="/static/img/computer.svg" alt="Cotizador en línea" />
                    <span>Cotizador en línea</span>
                  </a>
                </div>
                <div className="home-contact-item">
                  <a className="home-contact-link" href="https://api.whatsapp.com/send?phone=573012693491&text=%F0%9F%91%8B%20%20Hola!!%20Estuve%20revisando%20la%20web%20de%20*COMPRAVENTAS%20PACTEMOS*%20y%20necesito%20asesor%C3%ADa" target="_blank" >
                  {/* <a className="home-contact-link" href="#" onClick={this.showModal}> */}
                    <img src="/static/img/hand.svg" alt="Servicio a Domicilio" />
                    <span>Servicio a Domicilio</span>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <section className="home-choose">
            <div className="container">
              <h2 className="home-choose-title">Porque elegir a Compraventas Pactemos</h2>

              <div className="home-choose-list">
                <div className="home-choose-item">
                  <img src="/static/img/seguridad.png" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
                  <div>
                    <h3>Por seguridad</h3>
                    <p>Compraventas Pactemos es la única empresa en Colombia en la que tus artículos son custodiados y guardados por una empresa de valores hasta que tu decidas regresar por ellas, eso te da la garantía de que tus joyas cuentan con un seguro sin generar costos adicionales.</p>
                  </div>
                </div>

                <div className="home-choose-item right">
                  <div>
                    <h3>Personal calificado</h3>
                    <p>Tenemos más de 60 colaboradores capacitados para brindar un buen servicio y la mejor atención, además cuentan con amplios conocimientos y gran experiencia para valorar tus artículos de manera profesional.</p>
                  </div>
                  <img src="/static/img/calificado.png" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
                </div>

                <div className="home-choose-item">
                  <img src="/static/img/respaldo.png" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
                  <div>
                    <h3>Cuentas con mayor respaldo</h3>
                    <p>Somos una empresa en constante crecimiento, organizada y con procesos administrativos transparentes que permiten que nuestros clientes tengan total confianza a la hora de realizar sus transacciones.</p>
                  </div>
                </div>

                <div className="home-choose-item right">
                  <div>
                    <h3>Hacemos todo lo posible para que recupere su articulo</h3>
                    <p>Le avisamos por SMS, mail, llamadas telefónicas, whatsapp, o personalmente el tiempo de su artículo.</p>
                  </div>
                  <img src="/static/img/recuperacion.png" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
                </div>
              </div>
            </div>
          </section>

          <div className="container">
            <section className="home-products">
              <div className="home-products-row">
                <img className="home-products-img" src="/static/img/mas-servicios.png" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
                <div>
                  <h2 className="home-products-title">Además en Compraventas Pactemos podrás:</h2>
                  <p>Comprar lo que necesites, joyas de oro y plata, electrodomésticos, herramientas, tecnología, bicicletas y mucho más.</p>

                  <div>
                    <h4>¿Porque comprar en nuestras compraventas?</h4>
                    <ul className="home-servicios-list">
                      <li>Nuestros artículos usados se venden con precios sorprendentes y lo mejor, con  <strong>Garantía</strong>.</li>
                      <li>Vendemos artículos totalmente nuevos con garantía.</li>
                      <li>Te entregamos factura, así que su compra es totalmente legal, en caso de algún reclamo.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <Footer />

            {
              this.state.visibleModal
              &&
              <div id="myModal" className="modal">
                <div className="modal-content">
                  <span onClick={ this.closeModal } className="close">&times;</span>

                  {
                    // this.state.submited
                    // ?
                    // <Thanks/>
                    // // <p>La información se envio a la CompraVenta.</p>
                    // :
                    <form name="cotizacion" method="POST" onSubmit={ this.submit }>
                      <h3 style={{ marginBottom: 30 }}>Completa tus datos personales</h3>
                      <div className="form-row">
                    <label className="label">Selecciona tu ciudad *</label>
                    <select
                      name="city"
                      className="input"
                      onChange={ this.onChangeCiudad }
                      required
                      placeholder = "Seleccione tu cuidad"
                    >
                      <option></option>
                      <option value="Cartagena De Indias">Cartagena De Indias</option>
                      <option value="Turbaco">Turbaco</option>
                      <option value="Arjona">Arjona</option>
                      <option value="Santa Marta">Santa Marta</option>
                      <option value="Sabanalarga">Sabanalarga</option>
                      <option value="Baranoa">Baranoa</option>
                    </select>
                </div>
                {
                  this.state.category
                  &&
                  this.state.category.value === 'Cartagena De Indias'
                  &&
                  <div className="form-row">
                    <label className="label">Tu sucursal más cercana *</label>
                      <select
                        name="compraventa"
                        className="input"
                        onChange={ this.onChangeSelect }
                        required
                      >
                        <option></option>
                        <option value="PCT 02">Centro, Calle del Cabo. C.C Invercrédito. Local 5</option>
                        <option value="PCT 01">Centro, Calle del Cabo. C.C Invercrédito. Local 9</option>
                        <option value="PCT 04">Centro. Portal De Los Dulces, Calle Portocarrero</option>
                        <option value="PCT 16">Centro, Av Daniel Lemaitre al lado del Hotel San Felipe</option>
                        <option value="PCT 07">Bocagrande. Cra 3 # 5-187</option>
                        <option value="PCT 12">San jose de los Campanos. Cra 101B. # 38A-83</option>
                        <option value="PCT 13">Boquilla, Calle Principal. CRA 9 # 59-17</option>
                        <option value="PCT 14">Bazurto, C.C Almacentro. Local 4</option>
                        <option value="PCT 21">Avenida Pedro de Heredia, Frente a la Castellana</option>
                        <option value="PCT 22">Las Ramblas</option>
                        <option value="PCT 23">Bosque</option>
                        <option value="PCT 19">Pozón, Carrera 88 #56-1. A una cuadra de la entrada</option>
                        <option value="PCT 20">Plazuela, Frente al multicentro La Plazuela, Dg. 31 # 71-59</option>
                        <option value="PCT 201">Crespo, Calle 70 # 2-67 al lado de Megatiendas</option>
                        <option value="PCT 103">Superefectivo Terminal</option>
                        <option value="PCT 104">Superefectivo Socorro</option>
                      </select>
                </div>
                }
                {
                  this.state.category
                  &&
                  this.state.category.value === 'Turbaco'
                  &&
                  <div className="form-row">
                    <label className="label">Tu sucursal más cercana *</label>
                    <select
                      name="compraventa"
                      className="input"
                      onChange={ this.onChangeSelect }
                      required
                    >
                      <option></option>
                      <option value="PCT 15">Turbaco, Calle Real. #17-91</option>
                    </select>
                  </div>
                }
                {
                  this.state.category
                  &&
                  this.state.category.value === 'Arjona'
                  &&
                  <div className="form-row">
                    <label className="label">Tu sucursal más cercana *</label>
                    <select
                      name="compraventa"
                      className="input"
                      onChange={ this.onChangeSelect }
                      required
                    >
                      <option></option>
                      <option value="PCT 17">Arjona, Calle del Coco con Mercado, Esquina.</option>
                    </select>
                  </div>
                }
                {
                  this.state.category
                  &&
                  this.state.category.value === 'Sabanalarga'
                  &&
                  <div className="form-row">
                    <label className="label">Tu sucursal más cercana *</label>
                    <select
                      name="compraventa"
                      className="input"
                      onChange={ this.onChangeSelect }
                      required
                    >
                      <option></option>
                      <option value="PCT 05">Cra 19 Nº 20 - 14</option>
                      <option value="PCT 06">Calle 20 Nº 18 - 56</option>
                    </select>
                  </div>
                }
                {
                 this.state.category
                 &&
                 this.state.category.value === 'Baranoa'
                 &&
                 <div className="form-row">
                    <label className="label">Tu sucursal más cercana *</label>
                    <select
                      name="compraventa"
                      className="input"
                      onChange={ this.onChangeSelect }
                      required
                    >
                      <option></option>
                      <option value="PCT 08">Carrera 19 #18-18 Local 2</option>
                    </select>
                  </div>
                }
                {
                 this.state.category
                 &&
                 this.state.category.value === 'Santa Marta'
                 &&
                  <div className="form-row">
                      <label className="label">Tu sucursal más cercana *</label>
                      <select
                        name="compraventa"
                        className="input"
                        onChange={ this.onChangeSelect }
                        required
                      >
                        <option></option>
                        <option value="PCT 09">Centro, Cra 5, Edificio Galaxia. Local 102</option>
                        <option value="PCT 10">Centro, Cra 5 # 21 - 16</option>
                        <option value="PCT 11">Gaira, Cra 10 # 9- 35</option>
                        <option value="PCT 202">Avenida El Libertador #27 - 231</option>
                        <option value="PCT 18">Concepción 2 Mz Y Casa 19. 2da Etapa </option>
                        <option value="PCT 06">Av. el Rio con Av. del libertador 30 -146</option>
                        {/* <option value="PCT 102">Avenida Del Ferrocarril #5-08</option> */}
                        <option value="PCT 105">Vía a Minca, Cra 66 N. 39 - 81, Yucal</option>
                        <option value="PCT 101">Mercado, Calle 12 #8-80</option>
                        <option value="PCT 107">Av. Santa rita, Calle 22 con 18. Esquina</option>
                        <option value="PCT 108">Bonga, Cra 17 con 7</option>
                      </select>
                    </div>
                }
                      <div className="form-row">
                        <label className="label">Nombres *</label>
                        <input
                          className="input"
                          type="text"
                          name="name"
                          onChange={ this.onChangeInput }
                          required />
                      </div>
                      <div className="form-row">
                        <label className="label">Apellidos *</label>
                        <input
                          className="input"
                          type="text"
                          name="lastname"
                          onChange={ this.onChangeInput }
                          required />
                      </div>
                      <div className="form-row">
                        <label className="label">Celular *</label>
                        <input
                          className="input"
                          type="text"
                          name="mobile"
                          onChange={ this.onChangeInput }
                          required />
                      </div>
                      <div className="form-row">
                        <label className="label">Correo *</label>
                        <input
                          className="input"
                          type="text"
                          required
                          onChange={ this.onChangeInput }
                          name="email" />
                      </div>
                      <div className="form-row">
                        <label className="label">¿ Cuánto necesita ?</label>
                        <input
                          className="input"
                          type="text"
                          onChange={ this.onChangeInput }
                          name="many" />
                      </div>
                      <div className="form-row">
                        <label className="label">¿ Cómo nos contactó ? *</label>
                        <select
                          name="source"
                          className="input"
                          onChange={ this.onChangeSelect }
                          required
                        >
                          <option></option>
                          <option value="Radio">Radio</option>
                          <option value="Volantes">Volantes</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Instagram">Instagram</option>
                          <option value="Google">Google</option>
                          <option value="Amigos">Amigos</option>
                          <option value="Otro">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="politica-tratamiento-datos"
                            required
                          />
                          &nbsp;Acepto
                          <a href="/politica">
                            &nbsp;politica de tratamiento de datos
                          </a>
                        </label>
                      </div>
                      <button type="submit" className="form-btn">Enviar datos</button>
                    </form>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </>
    )
  }
}

export default Home;