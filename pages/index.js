import React, { Component } from 'react';
import Head from 'next/head';
import Top from '../components/Top';
import Footer from '../components/Footer';
import axios from 'axios';
import Thanks from './gracias'

class Home extends Component {
  state = {
    step: 1,
    visible: false,
    visibleModal: false,
    submited: false,
    typeData: 'domicilio',
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
    this.setState({
      [name]: value,
    })
  }
  onChangeSelect = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value,
    })
  }
  submit = (e) => {
    e.preventDefault()

    // const url = 'https://gestionshop.co/api/pactemos/cotizacion'
    const url = 'http://localhost:3001/api/pactemos/cotizacion'
    axios.post(url, this.state).then(res => {
      this.setState({ submited: true })
    }).catch(error => {
      alert('Ocurrio un error y no se pudo enviar la información.')
      console.log('res error', error)
    })
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
          <title>Compraventas Pactemos - Dinero inmediato</title>
        </Head>
        <div>
          <Top />

          <section className="home-welcome">
            <div className="container">
              <figure className="home-welcome-img">
                <img src="/static/img/banner-home.png" alt=""/>
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
                  <img src={"/static/img/step-" + this.state.step + ".png"} alt=""/>
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
                <img className="home-products-img" src="/static/img/productos.png" alt=""/>
                <div>
                  <h2 className="home-products-title">Artículos que puedes convertir en Dinero Inmediato</h2>

                  <div>
                    <div className="home-products-item">
                      <div className="home-products-item-header">
                        <img className="home-products-item-img" src="/static/img/diamond.svg" alt=""/>
                        <h4>Joyas de oro y plata</h4>
                      </div>
                      <p>La valorización de tus joyas depende de características como: el peso, estado de la joya, pureza del oro, (22k,18k, 14k, 10k etc)</p>
                    </div>

                    <div className="home-products-item">
                      <div className="home-products-item-header">
                        <img className="home-products-item-img" src="/static/img/refrigerator.svg" alt=""/>
                        <h4>Otros productos</h4>
                      </div>
                      <p>Electrodomésticos, Herramientas, Tecnología, Bicicletas y más.</p>
                    </div>

                    <div className="home-products-item">
                      <div className="home-products-item-header">
                        <img className="home-products-item-img" src="/static/img/file.svg" alt=""/>
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
                <h3>¿Cuanto me dan por mis artículos?</h3>
                <p>Ya no tienes que salir de casa para saber cuánto dinero puedes recibir por tu joya de oro, televisor o herramienta, ahora puedes hacerlo desde la comodidad de tu casa u oficina.</p>
              </div>
              <div className="home-contact-row">
                <div className="home-contact-item">
                  <a className="home-contact-link" href="https://wa.me/573015371656" target="_blank">
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
                  <a className="home-contact-link" href="#" onClick={this.showModal}>
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
                  <img src="/static/img/seguridad.png" alt=""/>
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
                  <img src="/static/img/calificado.png" alt=""/>
                </div>

                <div className="home-choose-item">
                  <img src="/static/img/respaldo.png" alt=""/>
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
                  <img src="/static/img/recuperacion.png" alt=""/>
                </div>
              </div>
            </div>
          </section>

          <div className="container">
            <section className="home-products">
              <div className="home-products-row">
                <img className="home-products-img" src="/static/img/mas-servicios.png" alt=""/>
                <div>
                  <h2 className="home-products-title">Además en compraventas pactemos podrás:</h2>
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
                    this.state.submited
                    ?
                    <Thanks/>
                    // <p>La información se envio a la CompraVenta.</p>
                    :
                    <form name="cotizacion" method="POST" onSubmit={ this.submit }>
                      <h3 style={{ marginBottom: 30 }}>Completa tus datos personales</h3>
                      <div className="form-row">
                        <label className="label">Nombres y Apellidos *</label>
                        <input
                          className="input"
                          type="text"
                          name="names"
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
                        <label className="label">Correo</label>
                        <input
                          className="input"
                          type="text"
                          onChange={ this.onChangeInput }
                          name="email" />
                      </div>
                      <div className="form-row">
                        <label className="label">¿Cuánto necesita?</label>
                        <input
                          className="input"
                          type="text"
                          onChange={ this.onChangeInput }
                          name="many" />
                      </div>
                      <div className="form-row">
                        <label className="label">¿Cómo nos contactó? *</label>
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