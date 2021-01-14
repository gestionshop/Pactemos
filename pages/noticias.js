import React, { Component } from 'react';
import Head from 'next/head';
import Top from '../components/Top';
import Footer from '../components/Footer';


class Sucursales extends Component {
  render () {
    return (
      <>
        <Head>
          <title>Noticias</title>
        </Head>
        <div>
          <Top />
          <div className="container">
            <section className="offices-header">
              <h1>Noticias</h1>
              <p>Revisa nuestras últimas novedades de nuestra empresa</p>
            </section>

            <section className="news-list">
              <article className="news-item">
                <img src="/static/img/blog.jpg" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
                <div>
                  <h2>¿Cómo identificar una compraventa confiable?</h2>
                  
                  <p>Ten en cuenta estos tres consejos.
                      Son conocidas comúnmente como casas de empeño y hay un sinnúmero de estas en
                      el país, pero ¿Cómo escoger una compraventa confiable y segura en caso de
                      necesitar dinero?
                  </p>
                  <p>
                      1. Observa las instalaciones y el nivel de seguridad de estas, esto te dará mayor
                      tranquilidad a la hora de dejar tus joyas de oro u otros artículos.<br/>
                      2. Ten en cuenta la atención y el profesionalismo del personal, es muy importante que
                      te generen confianza y que te ayuden a resolver todas las dudas que tengas.<br/>
                      3. Cobertura, una compraventa con múltiples sucursales te generará más confianza y
                      respaldo.
                    </p>
                </div>
              </article>
            
              {/* <article className="news-item">
                <img src="https://picsum.photos/600/300/?gravity=east" alt="Noticia img"/>
                <div>
                  <h2>Noticia importante</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel beatae, quia nam quisquam sequi quibusdam adipisci non neque! Blanditiis nisi iste doloribus placeat natus. Adipisci, nostrum nam. Temporibus, eaque?</p>
                </div>
              </article> */}
            </section>
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

export default Sucursales;