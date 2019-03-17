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
              <p>Uno de nuestros asesores se comunicará contigo para confirmar el valor que podrás recibir por tu artículo</p>
            </div>
          </div>
      </>
    )
  }
}

export default Thanks;