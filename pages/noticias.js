import React, { Component } from 'react';
import Head from 'next/head';
import Top from '../components/Top';
import Footer from '../components/Footer';


class Sucursales extends Component {
  render () {
    return (
      <>
        <Head>
          <title>Noticias de Pactemos</title>
        </Head>
        <div>
          <Top />
          <div className="container">
            <section className="offices-header">
              <h1>Noticias de Pactemos</h1>
              <p>Revisa nuestras últimas novedades de nuestra empresa</p>
            </section>

            <section className="news-list">
              <article className="news-item">
                <img src="https://picsum.photos/600/300/?gravity=east" alt="Noticia img"/>
                <h2>Noticia importante 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel beatae, quia nam quisquam sequi quibusdam adipisci non neque! Blanditiis nisi iste doloribus placeat natus. Adipisci, nostrum nam. Temporibus, eaque?</p>
              </article>
            
              <article className="news-item">
                <img src="https://picsum.photos/600/300/" alt="Noticia img"/>
                <h2>Noticia importante 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel beatae, quia nam quisquam sequi quibusdam adipisci non neque! Blanditiis nisi iste doloribus placeat natus. Adipisci, nostrum nam. Temporibus, eaque?</p>
              </article>
            </section>
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

export default Sucursales;