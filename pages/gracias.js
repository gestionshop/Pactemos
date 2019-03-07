import React, { Component } from 'react';
import Head from 'next/head';
import Top from '../components/Top';

class Thanks extends Component {
  render () {
    return (
      <>
        <Head>
          <title>Gracias por tus datos</title>
        </Head>
        <div>
          <Top />
          <div className="container">
            <h1>¡YA ESTÁ EN PROCESO TU SOLICITUD!</h1>
            <h3>Uno de nuestros asesores se comunicará contigo para confirmar el valor que podrás recibir por tu artículo</h3>
          </div>
        </div>
      </>
    )
  }
}

export default Thanks;