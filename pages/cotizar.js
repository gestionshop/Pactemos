import React, { Component } from 'react';
import Head from 'next/head';
import Top from '../components/Top';


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
    console.log('type', type)
    this.setState({
      type,
      subtype: null,
      category: null,
      weight: undefined,
      value: undefined,
    })
  }
  
  selectSubType = (subtype) => {
    console.log('subtype', subtype)
    this.setState({
      subtype,
      category: null,
      weight: undefined,
      value: undefined,
    })
  }

  selectCategory = (category) => {
    console.log('category', category)
    this.setState({
      category,
      weight: undefined,
      value: undefined,
    })
  }

  onChangeInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    console.log('name', name)
    console.log('value', value)

    if (this.state.type === ' Joyeria') {
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

  render () {
    return (
      <>
        <Head>
          <title>Cotiza en Compraventa Pactemos</title>
        </Head>
        <div>
          <Top />
          {/* <img className="cover" src="/static/img/oficinas.png" alt=""/> */}
          <div className="container">
            <section className="offices-header">
              <h1>Cotizador en línea</h1>
              <p>Rellene los campos y recuerde que la información personal la utilizaremos para confirmarle cuánto dinero le damos por su artículo</p>

              {/* <div>
                <span>Información personal</span>
                <span>Articulo</span>
                <span>Cotización</span>
              </div> */}

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
                this.state.weight
                &&
                <div className="cotizar-result">
                  <h4>¿Cuánto me dan por mi joya?</h4>
                  <span>Te damos hasta $ { this.state.value } pesos</span>

                  <a href="#" onClick={ this.showModal } className="cotizar-btn">¡Quiero el dinero ya!</a>
                </div>
              }

              {
                this.state.visible
                &&
                <div id="myModal" className="modal">
                  <div className="modal-content">
                    <span onClick={ this.closeModal } className="close">&times;</span>
                    
                    <form name="cotizacion" action="/gracias" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
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
        </div>
      </>
    )
  }
}

export default Cotizar;