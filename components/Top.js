import React, { Component } from 'react';

class Top extends Component {
  state = {
    visible: false,
  }
  showMenu = () => {
    this.setState({ visible: !this.state.visible })
  }
  render () {
    return (
      <header className="Top">
        <div className="container">
          <div className="Top_row">
            <img className="Top_logo" src="/static/img/logo.png" alt="Compra Venta Pactemos"/>

            <img onClick={ this.showMenu } className="Top_menu_icon" src="/static/img/menu.svg" alt=""/>

            {
              this.state.visible
              &&
              <nav className="Top_list">
                <a className="Top_item" href="/">Inicio</a>
                <a className="Top_item" href="/sucursales">Sucursales</a>
                <a className="Top_item" href="/cotizar">Cotizar en linea</a>
              </nav>
            }
            <nav className="Top_list_desktop">
                <a className="Top_item" href="/">Inicio</a>
                <a className="Top_item" href="/sucursales">Sucursales</a>
                <a className="Top_item" href="/cotizar">Cotizar en linea</a>
              </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default Top;