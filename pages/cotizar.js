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
            value: 23000,
          },
          {
            name: '18k',
            value: 13000,
          },
          {
            name: '14k',
            value: 33000,
          },
          {
            name: '10k',
            value: 3000,
          },
        ],
      },
      {
        name: 'Plata',
      },
    ],
  },
  {
    name: 'Articulo',
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
  }

  selectType = (type) => {
    console.log('type', type)
    this.setState({ type })
  }
  
  selectSubType = (subtype) => {
    console.log('subtype', subtype)
    this.setState({ subtype })
  }

  selectCategory = (category) => {
    console.log('subtype', category)
    this.setState({ category })
  }

  onChangeInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    console.log('name', name)
    console.log('value', value)

    this.setState({
      [name]: value,
      value: value*this.state.category.value,
    })
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

              <div>
                <span>Información personal</span>
                <span>Articulo</span>
                <span>Cotización</span>
              </div>

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
                this.state.weight
                &&
                <div className="cotizar-result">
                  <h4>¿Cuánto me dan por mi joya?</h4>
                  <span>Te damos hasta $ { this.state.value } pesos</span>

                  <a href="#" className="cotizar-btn">¡Quiero el dinero ya!</a>
                </div>
              }

              <div style={{ display: 'none' }}>
                <form action="">
                  <div>
                    <label htmlFor="">Nombres y apellidos</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Correo</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Telefono</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">¿Cuánto necesita?</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">¿Cómo se entero de nosotros?</label>
                    <input type="text" />
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </>
    )
  }
}

export default Cotizar;