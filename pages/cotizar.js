import React, { Component } from 'react';
import Head from 'next/head';
import Top from '../components/Top';
import axios from 'axios';
import Footer from '../components/Footer'


const data = [
  {
    name: 'Joyeria',
    options: [
      {
        name: 'Oro',
        options: [
          {
            name: '22k',
            value: 76000,
          },
          {
            name: '18k',
            value: 63000,
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
    name: 'Articulo',
    options: [
      {
        name: 'Electrodomesticos',
        options: [
          {
            name: 'Televisor',
            value: 0,
          },
          {
            name: 'Nevera',
            value: 0,
          },
          {
            name: 'Estufa',
            value: 0,
          },
          {
            name: 'Lavadora',
            value: 0,
          },
          {
            name: 'Equipo de sonido',
            value: 0,
          },
        ],
      },
      {
        name: 'Herramientas',
        options: [
          {
            name: 'Tipo de herramientas',
            value: 0,
          },
        ],
      },
      {
        name: 'Tecnologia',
        options: [
          {
            name: 'Portatil',
            value: 0,
          },
          {
            name: 'Tablet',
            value: 0,
          },
        ],
      },
    ],
  },
  {
    name: 'Vender CDT',
  },
  {
    name: 'Otro',
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

    if (this.state.type.name === 'Joyeria') {
      this.setState({
        [name]: value,
        value: value*this.state.category.value,
      })
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  submit = (e) => {
    e.preventDefault()

    const url = 'http://localhost:3001/api/pactemos/cotizacion'
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
            <div className="container">
              <div style={{
                margin: 30,
                textAlign: 'center',
                fontSize: 18,
              }}>
                <h1>Gracias por enviar tu cotización</h1>
                <p>Uno de nuestros asesores se comunicará contigo.</p>
              </div>
            </div>
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
                  (this.state.type.name === 'Joyeria' || this.state.type.name === 'Articulo')
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
                  this.state.type
                  &&
                  this.state.type.name === 'Joyeria'
                  &&
                  this.state.category
                  &&
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">Peso</label>
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
                  this.state.type.name === 'Articulo'
                  &&
                  this.state.category
                  &&
                  <>
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
                        <label className="label">¿Tiene factura?</label>

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
                  this.state.type.name === 'Otro'
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
                  this.state.type.name === 'Joyeria'
                  &&
                  this.state.weight
                  &&
                  <div className="cotizar-result">
                    <h4>¿Cuánto me dan por mi joya?</h4>
                    <span>Te damos hasta $ { this.state.value } pesos</span>

                    <a href="#" onClick={ this.showModal } className="cotizar-btn">¡Quiero el dinero ya!</a>
                  </div>
                }

                {
                  this.state.type
                  &&
                  this.state.type.name === 'Articulo'
                  &&
                  this.state.brand
                  &&
                  this.state.model
                  &&
                  this.state.time
                  &&
                  this.state.invoice
                  &&
                  this.state.comment
                  &&
                  <div className="cotizar-result">
                    <h4>¿Cuánto me dan por mi artículo?</h4>

                    <a href="#" onClick={ this.showModal } className="cotizar-btn">¡Descúbrelo!</a>
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
                  </div>
                }

                {
                  this.state.type
                  &&
                  this.state.type.name === 'Otro'
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
                        {
                          this.state.type
                          &&
                          <input type="hidden" name="type" value={this.state.type.name} />
                        }
                        {
                          this.state.subtype
                          &&
                          <input type="hidden" name="subtype" value={this.state.subtype.name} />
                        }
                        {
                          this.state.category
                          &&
                          <input type="hidden" name="category" value={this.state.category.name} />
                        }
                        {
                          this.state.weight
                          &&
                          <input type="hidden" name="category" value={this.state.weight} />
                        }
                        <div className="form-row">
                          <label className="label">Nombres y apellidos</label>
                          <input className="input" type="text" name="names" required />
                        </div>
                        <div className="form-row">
                          <label className="label">Correo</label>
                          <input className="input" type="text" name="email" required />
                        </div>
                        <div className="form-row">
                          <label className="label">Telefono</label>
                          <input className="input" type="text" name="mobile" required />
                        </div>
                        <div className="form-row">
                          <label className="label">¿Cuánto necesita?</label>
                          <input className="input" type="text" name="many" />
                        </div>
                        <div className="form-row">
                          <label className="label">¿Cómo se entero de nosotros?</label>
                          <input className="input" type="text" name="source"  required />
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