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

          <section className="home-welcome">
            <div className="container">
              <figure>
                <img src="/static/img/banner-home.png" alt=""/>
              </figure>
              <a className="home-welcome-btn" href="/cotizar">Cotiza en linea</a>
            </div>
          </section>

          <div className="container">

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
                <img src="/static/img/productos.png" alt=""/>
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

          <section className="home-choose">
            <div className="container">
              <div className="home-products-row">
                <div>
                  <h2 className="home-products-title">Artículos que puedes convertir en Dinero Inmediato</h2>

                  <div>
                    <div>
                      <img src="/static/img/seguridad.png" alt=""/>
                      <h4>Por seguridad</h4>
                      <p>Compraventas Pactemos es la única empresa en Colombia en la que tus artículos son custodiados y guardados por una empresa de valores hasta que tu decidas regresar por ellas, eso te da la garantía de que tus joyas cuentan con un seguro sin generar costos adicionales.</p>
                    </div>

                    <div>
                      <img src="/static/img/calificado.png" alt=""/>
                      <h4>Personal calificado</h4>
                      <p>Tenemos más de 60 colaboradores capacitados para brindar un buen servicio y la mejor atención, además cuentan con amplios conocimientos y gran experiencia para valorar tus artículos de manera profesional.</p>
                    </div>

                    <div>
                      <img src="/static/img/respaldo.png" alt=""/>
                      <h4>Cuentas con mayor respaldo</h4>
                      <p>Somos una empresa en constante crecimiento, organizada y con procesos administrativos transparentes que permiten que nuestros clientes tengan total confianza a la hora de realizar sus transacciones.</p>
                    </div>
                    
                    <div>
                      <img src="/static/img/recuperacion.png" alt=""/>
                      <h4>Hacemos todo lo posible para que recupere su articulo</h4>
                      <p>Le avisamos por SMS, mail, llamadas telefónicas, whatsapp, o personalmente el tiempo de su artículo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default Home;