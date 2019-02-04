import React, { Component } from 'react';

const Top = () => (
  <header className="Top">
    <div className="container">
      <div className="Top_row">
        <img className="Top_logo" src="/static/img/logo.png" alt="Compra Venta Pactemos"/>

        <nav className="Top_list">
          <a className="Top_item" href="/">Inicio</a>
          <a className="Top_item" href="/sucursales">Sucursales</a>
          <a className="Top_item" href="/servicios">Servicios</a>
          <a className="Top_item" href="/noticias">Noticias</a>
          <a className="Top_item" href="/cotizar">Cotizar en linea</a>
        </nav>
      </div>
    </div>
  </header>
)


export default Top;