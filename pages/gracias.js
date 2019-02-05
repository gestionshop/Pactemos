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
            <h1>¡Gracias! Un asesor se comunicara contigo.</h1>
          </div>
        </div>
      </>
    )
  }
}

export default Thanks;