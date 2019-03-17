import React, { Component } from 'react';
import Head from 'next/head';
import Top from '../components/Top';
import axios from 'axios';
import Footer from '../components/Footer'
import Thanks from './gracias'
import * as funtions from '../funciones/funciones';


const data = [
  {
    name: 'Joyería',
    options: [
      {
        name: 'Oro',
        options: [
          {
            name: '18k',
            value: 90000,
          },
          {
            name: '14k',
            value: 48000,
          },
          {
            name: '10k',
            value: 27000,
          },
        ],
      },
      {
        name: 'Plata',
        options: [
          {
            name: 'Ley 925',
            value: 800,
          },
        ],
      },
    ],
  },
  {
    name: 'Artículos',
    options: [
      {
        name: 'Electrodomésticos',
        // options: [
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
      },
      {
        name: 'Herramientas',
        // options: [
        //   {
        //     name: 'Tipo de herramientas',
        //     value: 0,
        //   },
        // ],
      },
      {
        name: 'Tecnología',
        // options: [
        //   {
        //     name: 'Portatil',
        //     value: 0,
        //   },
        //   {
        //     name: 'Tablet',
        //     value: 0,
        //   },
        // ],
      },
    ],
  },
  {
    name: 'Otros',
  },
  {
    name: 'Vender CDT',
  },
]

class Cotizar extends Component {
  state = {
    type: null,
    subtype: null,
    category: null,
    weight: undefined,
    value: undefined,
    visible: false,
    submited: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }
  
  closeModal = () => {
    this.setState({
      visible: false,
    })
  }

  selectType = (type) => {
    this.setState({
      type,
      subtype: null,
      category: null,
      weight: undefined,
      value: undefined,
    })
  }
  
  selectSubType = (subtype) => {
    this.setState({
      subtype,
      category: null,
      weight: undefined,
      value: undefined,
    })
  }

  selectCategory = (category) => {
    this.setState({
      category,
      weight: undefined,
      value: undefined,
    })
  }

  onChangeInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (this.state.type.name === 'Joyería') {
      this.setState({
        [name]: value,
        value: value*this.state.category.value,
      })
      console.log('valor',this.state.value)
      console.log('categoria',this.state.category.value)
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  onChangeSelect = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value,
    })
  }
  
  onChangeTipoHerramienta = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      category: {
        name,
        value,
      }
    })
  }

  onChangeElectrodomesticos = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      category: {
        name,
        value,
      }
    })
  }

  onChangeTecnologia = (e) => {
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

    const url = 'https://gestionshop.co/api/pactemos/cotizacion'
    // const url = 'http://localhost:3001/api/pactemos/cotizacion'
    axios.post(url, this.state).then(res => {
      this.setState({ visible: false, submited: true })
    }).catch(error => {
      alert('Ocurrio un error y no se pudo enviar la cotización.')
      console.log('res error', error)
    })
  }

  render () {
    return (
      <>
        <Head>
          <title>Cotiza en Compraventa Pactemos</title>
        </Head>
        <div className="cotizar">
          <Top />
          <img className="cover" src="/static/img/cover-cotizar.png" alt=""/>
          {
            this.state.submited
            ?
            <Thanks/>
            // <div className="container">
            //   <div style={{
            //     margin: 30,
            //     textAlign: 'center',
            //     fontSize: 18,
            //   }}>
            //     <h1>¡YA ESTÁ EN PROCESO TU SOLICITUD!</h1>
            //     <p>Uno de nuestros asesores se comunicará contigo para confirmar el valor que podrás recibir por tu artículo</p>
            //   </div>
            // </div>
            :
            <div className="container">
              <section className="offices-header">
                <h1>Cotizador en línea</h1>
                <p>Rellene los campos y recuerde que la información personal la utilizaremos para confirmarle cuánto dinero le damos por su artículo</p>

                <div className="cotizar-select">
                  {
                    data.map(item => <div
                      onClick={ () => this.selectType(item) }
                      className={`cotizar-select-item ${ this.state.type && item.name === this.state.type.name ? 'active' : '' }`}>
                      <span>{ item.name }</span>
                    </div>)
                  }
                </div>
                
                {
                  this.state.type
                  &&
                  (this.state.type.name === 'Joyería' || this.state.type.name === 'Artículos')
                  &&
                  <div className="cotizar-select">
                    {
                      this.state.type.options.map(item => <div
                        onClick={ () => this.selectSubType(item) }
                        className={`cotizar-select-item ${ this.state.subtype && item.name === this.state.subtype.name ? 'active' : '' }`}>
                        <span>{ item.name }</span>
                      </div>)
                    }
                  </div>
                }

                {
                  this.state.subtype
                  &&
                  this.state.subtype.options
                  &&
                  <div className="cotizar-select">
                    {
                      this.state.subtype.options.map(item => <div
                        onClick={ () => this.selectCategory(item) }
                        className={`cotizar-select-item ${ this.state.category && item.name === this.state.category.name ? 'active' : '' }`}>
                        <span>{ item.name }</span>
                      </div>)
                    }
                  </div>
                }

                {
                  this.state.subtype
                  &&
                  this.state.subtype.name === 'Herramientas'
                  &&
                  <div className="cotizar-select">
                    <div className="form-row">
                      {/* <label className="label">Tipo de herramienta</label> */}
                      <select
                        name="tipo_herramienta"
                        className="input"
                        onChange={ this.onChangeTipoHerramienta }
                        required
                      >
                        <option>Seleccionar una herramienta</option>
                        <option value="Taladro">Taladro</option>
                        <option value="Pulidora">Pulidora</option>
                        <option value="Caladora">Caladora</option>
                        <option value="Trozadora">Tronzadora</option>
                        <option value="Ingledora">Ingletadora</option>
                        <option value="Sierra Circular">Sierra Circular</option>
                        <option value="Lijadora">Lijadora</option>
                        <option value="Ruteadora">Ruteadora</option>
                        <option value="Pistola de Impacto">Pistola de Impacto</option>
                        <option value="Cortadora">Cortadora</option>
                        <option value="Otro">Otros</option>
                      </select>
                    </div>
                  </div>
                }

                {
                  this.state.subtype
                  &&
                  this.state.subtype.name === 'Electrodomésticos'
                  &&
                  <div className="cotizar-select">
                    <div className="form-row">
                      {/* <label className="label">Tipo de Electrodomésticos</label> */}
                      <select
                        name="tipo_electrodomesticos"
                        className="input"
                        onChange={ this.onChangeElectrodomesticos }
                        required
                      >
                        <option>Selecciona un electrodoméstico</option>
                        <option value="Televisor">Televisor</option>
                        <option value="Nevera">Nevera</option>
                        <option value="Estufa">Estufa</option>
                        <option value="Equipo de Sonido">Equipo de Sonido</option>
                        <option value="Otro">Otros</option>
                      </select>
                    </div>
                  </div>
                }

                {
                  this.state.subtype
                  &&
                  this.state.subtype.name === 'Tecnología'
                  &&
                  <div className="cotizar-select">
                    <div className="form-row">
                      {/* <label className="label">Tipo de Electrodomésticos</label> */}
                      <select
                        name="tipo_tecnologia"
                        className="input"
                        onChange={ this.onChangeTecnologia }
                        required
                      >
                        <option>Selecciona un articulo</option>
                        <option value="Portatil">Portatil</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Otro">Otros</option>
                      </select>
                    </div>
                  </div>
                }
                
                {
                  this.state.type
                  &&
                  this.state.type.name === 'Joyería'
                  &&
                  this.state.category
                  &&
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">Peso aproximado</label>
                      <input
                        className="input"
                        type="text"
                        placeholder="En gramos"
                        name="weight"
                        onChange={ this.onChangeInput }
                      />
                    </div>
                  </div>
                }

                {
                  this.state.type
                  &&
                  this.state.type.name === 'Artículos'
                  &&
                  this.state.category
                  &&
                  <>
                    <div className="cotizar-select">
                      <div className="form-input">
                        <label className="label">Marca *</label>
                        <input
                          className="input"
                          type="text"
                          placeholder=""
                          name="brand"
                          onChange={ this.onChangeInput }
                        />
                      </div>
                    </div>
                    <div className="cotizar-select">
                      <div className="form-input">
                        <label className="label">Modelo</label>
                        <input
                          className="input"
                          type="text"
                          placeholder=""
                          name="model"
                          onChange={ this.onChangeInput }
                        />
                      </div>
                    </div>
                    <div className="cotizar-select">
                      <div className="form-input">
                        <label className="label">Tiempo de uso (Ej. 2 año y/o 3 meses) *</label>
                        <input
                          className="input"
                          type="text"
                          placeholder=""
                          name="time"
                          onChange={ this.onChangeInput }
                        />
                      </div>
                    </div>
                    <div className="cotizar-select">
                      <div className="form-input">
                        <label className="label">¿Tiene factura? *</label>

                        <label className="radio">
                          <input
                            type="radio"
                            placeholder=""
                            name="invoice"
                            value="Si"
                            onChange={ this.onChangeInput }
                          /> Si
                        </label>
                        <label className="radio">
                          <input
                            type="radio"
                            placeholder=""
                            name="invoice"
                            value="No"
                            onChange={ this.onChangeInput }
                          /> No
                        </label>
                      </div>
                    </div>
                    <div className="cotizar-select">
                      <div className="form-input">
                        <label className="label">Comentarios</label>
                        <textarea
                          style={{ height: 60 }}
                          className="input"
                          type="text"
                          placeholder=""
                          name="comment"
                          onChange={ this.onChangeInput }
                        />
                      </div>
                    </div>
                  </>
                }

                {
                  this.state.type
                  &&
                  this.state.type.name === 'Otros'
                  &&
                  <>
                    <div className="cotizar-select">
                      <div className="form-input">
                        <label className="label">Tipo de articulo</label>
                        <input
                          className="input"
                          type="text"
                          placeholder=""
                          name="articleType"
                          onChange={ this.onChangeInput }
                        />
                      </div>
                    </div>
                    <div className="cotizar-select">
                      <div className="form-input">
                        <label className="label">Marca</label>
                        <input
                          className="input"
                          type="text"
                          placeholder=""
                          name="brand"
                          onChange={ this.onChangeInput }
                        />
                      </div>
                    </div>
                    <div className="cotizar-select">
                      <div className="form-input">
                        <label className="label">Tiempo de uso</label>
                        <input
                          className="input"
                          type="text"
                          placeholder=""
                          name="time"
                          onChange={ this.onChangeInput }
                        />
                      </div>
                    </div>
                    <div className="cotizar-select">
                      <div className="form-input">
                        <label className="label">Comentarios</label>
                        <textarea
                          style={{ height: 60 }}
                          className="input"
                          type="text"
                          placeholder=""
                          name="comment"
                          onChange={ this.onChangeInput }
                        />
                      </div>
                    </div>
                  </>
                }

                {
                  this.state.type
                  &&
                  this.state.type.name === 'Vender CDT'
                  &&
                  <>
                    <div className="cotizar-select">
                      <div className="form-input">
                        <label className="label">Valor CDT</label>
                        <input
                          className="input"
                          type="text"
                          placeholder=""
                          name="valueCDT"
                          onChange={ this.onChangeInput }
                        />
                      </div>
                    </div>
                    <div className="cotizar-select">
                      <div className="form-input">
                        <label className="label">Fecha de apertura</label>
                        <input
                          className="input"
                          type="date"
                          placeholder=""
                          name="openCDT"
                          onChange={ this.onChangeInput }
                        />
                      </div>
                    </div>
                    <div className="cotizar-select">
                      <div className="form-input">
                        <label className="label">Fecha de vencimiento</label>
                        <input
                          className="input"
                          type="date"
                          placeholder=""
                          name="closeCDT"
                          onChange={ this.onChangeInput }
                        />
                      </div>
                    </div>
                  </>
                }

                {
                  this.state.type
                  &&
                  this.state.type.name === 'Joyería'
                  &&
                  this.state.weight
                  &&
                  <div className="cotizar-result">
                    <h4>¿Cuánto me dan por mi joya?</h4>
                    <span>Te damos hasta $ { funtions.FormatMil(this.state.value) } pesos</span>

                    <a href="#" onClick={ this.showModal } className="cotizar-btn">¡Quiero el dinero ya!</a>

                    <p style={{
                      marginTop: 10,
                      fontSize: 13,
                    }}>
                      *Aplican condiciones
                    </p>
                  </div>
                }

                {
                  this.state.type
                  &&
                  this.state.type.name === 'Artículos'
                  &&
                  this.state.brand
                  &&
                  this.state.time
                  &&
                  this.state.invoice
                  &&
                  <div className="cotizar-result">
                    <h4>¿Cuánto me dan por mi artículo?</h4>

                    <a href="#" onClick={ this.showModal } className="cotizar-btn">¡Descúbrelo!</a>

                    <p style={{
                      marginTop: 10,
                      fontSize: 13,
                    }}>
                      *Aplican condiciones
                    </p>

                  </div>
                }

                {
                  this.state.type
                  &&
                  this.state.type.name === 'Vender CDT'
                  &&
                  this.state.valueCDT
                  &&
                  this.state.openCDT
                  &&
                  this.state.closeCDT
                  &&
                  <div className="cotizar-result">
                    <h4>¿Cuánto me dan por mi CDT?</h4>

                    <a href="#" onClick={ this.showModal } className="cotizar-btn">¡Descúbrelo!</a>

                    <p style={{
                      marginTop: 10,
                      fontSize: 13,
                    }}>
                      *Aplican condiciones
                    </p>

                  </div>
                }

                {
                  this.state.type
                  &&
                  this.state.type.name === 'Otros'
                  &&
                  this.state.articleType
                  &&
                  this.state.brand
                  &&
                  this.state.time
                  &&
                  this.state.comment
                  &&
                  <div className="cotizar-result">
                    <h4>¿Cuánto me dan por mi artículo?</h4>

                    <a href="#" onClick={ this.showModal } className="cotizar-btn">¡Descúbrelo!</a>

                    <p style={{
                      marginTop: 10,
                      fontSize: 13,
                    }}>
                      *Aplican condiciones
                    </p>

                  </div>
                }

                {
                  this.state.visible
                  &&
                  <div id="myModal" className="modal">
                    <div className="modal-content">
                      <span onClick={ this.closeModal } className="close">&times;</span>
                      
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
                      
                    </div>
                  </div>
                }
              </section>
            </div>
          }
          
        </div>
        <div className="container">
          <Footer />
        </div>
      </>
    )
  }
}

export default Cotizar;