import React, { Component } from 'react';
import Head from 'next/head';
import Top from '../components/Top';
import Footer from '../components/Footer'


class Thanks extends Component {
  render () {
    return (
      <>
        <Head>
          <title>Cotiza en Compraventa Pactemos</title>
        </Head>
        <div className="cotizar">
          <Top />
          <img className="cover" src="/static/img/cover-cotizar.png" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
          <div className="container">
            <div style={{
                  margin: 30,
                  textAlign: 'center',
                  fontSize: 18,
                }}>
              <h2>¡YA ESTÁ EN PROCESO TU SOLICITUD!</h2>
              <p>Te informamos que para confirmarte la valoración por tu artículo, necesitamos que nos compartas información adicional, por esto, pronto alguien del equipo comercial de PACTEMOS te estará contactando</p>
              {/* <p>Uno de nuestros asesores se pondrá en contacto contigo</p>
              <p>¡En COMPRAVENTAS PACTEMOS estamos para servirte!</p> */}
            </div>
          </div>
        </div>
        <div className="container">
          <Footer />
        </div>
      </>
    )
  }
}

export default Thanks;