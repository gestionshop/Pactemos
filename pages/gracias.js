import React, { Component } from 'react';
// import Head from 'next/head';
// import Top from '../components/Top';

class Thanks extends Component {
  render () {
    return (
      <>
          <div className="container">
            <div style={{
                  margin: 30,
                  textAlign: 'center',
                  fontSize: 18,
                }}>
              <h2>¡YA ESTÁ EN PROCESO TU SOLICITUD!</h2>
              <p>En minutos recibirás la llamada de uno de nuestros asesores</p>
            </div>
          </div>
      </>
    )
  }
}

export default Thanks;