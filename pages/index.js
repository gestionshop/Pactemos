import React, { Component } from 'react';
import Head from 'next/head';
import Top from '../components/Top';


class Home extends Component {
  render () {
    return (
      <>
        <Head>
          <title>Compraventa Pactemos - Dinero inmediato</title>
        </Head>
        <div>
          <Top />

          <div className="container">
            <section className="home-welcome">
              <img src="/static/img/banner-home.png" alt=""/>

              <a className="home-welcome-btn" href="/cotizar">Cotiza en linea</a>
            </section>

            <section className="home-steps">
              <div className="home-steps-row">
                <ul className="home-steps-list">
                  <h2 className="home-steps-title">Obtén dinero Inmediato en solo 3 pasos !Así de fácil!</h2>
                  <li className="home-steps-item">
                    <span className="home-steps-circle">1</span>
                    <div>
                      <strong>Paso 1</strong>
                      <p>Encuentra nuestra Compraventa más cercana.</p>
                    </div>
                  </li>
                  <li className="home-steps-item">
                    <span className="home-steps-circle">2</span>
                    <div>
                      <strong>Paso 2</strong>
                      <p>Trae tu artículo para revisarlo y ofrecerte la máxima valorización.</p>
                    </div>
                  </li>
                  <li className="home-steps-item">
                    <span className="home-steps-circle">3</span>
                    <div>
                      <strong>Paso 3</strong>
                      <p>Presenta tu cédula, firma el contrato y recibe el dinero en segundos.</p>
                    </div>
                  </li>
                </ul>
                <figure className="home-steps-figures">
                  <img src="/static/img/step-1.png" alt=""/>
                </figure>
              </div>
            </section>

            <section className="home-benefits">
              <div className="home-benefits-row">
                <div className="home-benefits-half">
                  <h3>Lo que tiene valor para ti, también lo tiene para nosotros</h3>
                  <p>Por eso a través de un contrato con pacto de retroventa, podrás obtener liquidez inmediata dejando como garantía un artículo.</p>
                </div>
                <ul className="home-benefits-half">
                  <h4>Beneficios</h4>
                  <li>Puedes recuperar tu artículo cuando lo decidas</li>
                  <li>No tienes que vender eso que tanto aprecias</li>
                  <li>Puedes usar el mismo artículo las veces que quieras</li>
                  <li>Sin trámites demorados</li>
                </ul>
              </div>
            </section>

            <section className="home-products">
              <div className="home-products-row">
                <img src="/static/img/products.png" alt=""/>
                <div>
                  <h2 className="home-products-title">Artículos que puedes convertir en Dinero Inmediato</h2>

                  <div>
                    <div>
                      <h4>JOYAS DE ORO Y PLATA</h4>
                      <p>La valorización de tus joyas depende de características como: el peso, estado de la joya, pureza del oro, (22k,18k, 14k, 10k etc)</p>
                    </div>

                    <div>
                      <h4>OTROS PRODUCTOS</h4>
                      <p>Electrodomésticos, Herramientas, Tecnología, Bicicletas y más.</p>
                    </div>

                    <div>
                      <h4>Tu CDT</h4>
                      <p>Puedes obtener el dinero de tu cdt antes de la fecha de vencimiento.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    )
  }
}

export default Home;