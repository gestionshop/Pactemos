import React, { Component } from 'react';
import Head from 'next/head';
import Top from '../components/Top';


class Sucursales extends Component {
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
                <div className="cotizar-select-item active">
                  <span>Joyeria</span>
                </div>
                <div className="cotizar-select-item">
                  <span>Articulo</span>
                </div>
                <div className="cotizar-select-item">
                  <span>Vender CDT</span>
                </div>
                <div className="cotizar-select-item">
                  <span>Otro</span>
                </div>
              </div>
              
              <div className="cotizar-select">
                <div className="cotizar-select-item active">
                  <span>Oro</span>
                </div>
                <div className="cotizar-select-item">
                  <span>Plata</span>
                </div>
              </div>
              
              <div className="cotizar-select">
                <div className="cotizar-select-item active">
                  <span>22k</span>
                </div>
                <div className="cotizar-select-item">
                  <span>18k</span>
                </div>
                <div className="cotizar-select-item">
                  <span>14k</span>
                </div>
                <div className="cotizar-select-item">
                  <span>10k</span>
                </div>
              </div>
              
              <div className="cotizar-select">
                <div className="form-input">
                  <label className="label">Peso</label>
                  <input className="input" type="text" placeholder="En gramos" />
                </div>
              </div>

              <div className="cotizar-result">
                <h4>¿Cuánto me dan por mi joya?</h4>
                <span>Te damos hasta $ 570.000 pesos</span>

                <a href="#" className="cotizar-btn">¡Quiero el dinero ya!</a>
              </div>

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

export default Sucursales;