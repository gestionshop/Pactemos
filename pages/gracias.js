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
          <img className="cover" src="/static/img/cover-cotizar.png" alt=""/>
          <div className="container">
            <div style={{
                  margin: 30,
                  textAlign: 'center',
                  fontSize: 18,
                }}>
              <h2>¡YA ESTÁ EN PROCESO TU SOLICITUD!</h2>
              <p>En minutos recibirás la llamada de uno de nuestros asesores</p>
              <p>¡En COMPRAVENTAS PACTEMOS estamos para servirte!</p>
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