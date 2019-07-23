import React, { Component } from 'react';
import axios from 'axios';
import Thanks from '../pages/gracias'

class Top extends Component {
  state = {
    visible: false,
    visibleModal: false,
    submited: false,
    typeData: 'domicilio',
  }
  showMenu = () => {
    this.setState({ visible: !this.state.visible })
  }
  showModal = (e) => {
    e.preventDefault()
    this.setState({ visibleModal: true })
  }
  closeModal = () => {
    this.setState({ visibleModal: false })
  }
  onChangeInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value,
    })
  }
  onChangeSelect = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value,
    })
  }
  submit = (e) => {
    e.preventDefault()

    // const url = 'http://localhost:3001/api/pactemos/domicilio'
    const url = 'https://gestionshop.co/api/pactemos/domicilio'
    axios.post(url, this.state).then(res => {
      this.setState({ submited: true })
      console.log('ENVIADOO')
      window.location.replace('/gracias')
    }).catch(error => {
      alert('Ocurrio un error y no se pudo enviar la información')
      console.log('res error', error)
    })
  }
  render () {
    return (
      <header className="Top">
        <div className="container">
          <div className="Top_row">
          <a href="/">
            <img className="Top_logo" src="/static/img/logo.png" alt="Compra Venta Pactemos" />
          </a>
            <img onClick={ this.showMenu } className="Top_menu_icon" src="/static/img/menu.svg" alt=""/>

            {
              this.state.visible
              &&
              <nav className="Top_list">
                <a className="Top_item" href="/">Inicio</a>
                <a className="Top_item" href="/sucursales">Sucursales</a>
                <a className="Top_item" href="/noticias">Noticias</a>
                <a className="Top_item" href="#" onClick={ this.showModal }>Servicio a Domicilio</a>
                <a className="Top_item" href="/cotizar">Cotizar en linea</a>
              </nav>
            }
            <nav className="Top_list_desktop">
                <a className="Top_item" href="/">Inicio</a>
                <a className="Top_item" href="/sucursales">Sucursales</a>
                <a className="Top_item" href="/noticias">Noticias</a>
                <a className="Top_item" href="#" onClick={ this.showModal }>Servicio a Domicilio</a>
                <a className="Top_item Top_item_button" href="/cotizar">Cotizar en linea</a>
              </nav>
          </div>
        </div>
        {
          this.state.visibleModal
          &&
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span onClick={ this.closeModal } className="close">&times;</span>
              <form name="cotizacion" method="POST" onSubmit={ this.submit }>
                <h3 style={{ marginBottom: 30 }}>Completa tus datos personales</h3>
                <div className="form-row">
                  <label className="label">Nombres y Apellidos *</label>
                  <input
                    className="input"
                    type="text"
                    name="names"
                    onChange={ this.onChangeInput }
                    required />
                </div>
                <div className="form-row">
                  <label className="label">Celular *</label>
                  <input
                    className="input"
                    type="text"
                    name="mobile"
                    onChange={ this.onChangeInput }
                    required />
                </div>
                <div className="form-row">
                  <label className="label">Correo</label>
                  <input
                    className="input"
                    type="text"
                    onChange={ this.onChangeInput }
                    name="email" />
                </div>
                <div className="form-row">
                  <label className="label">¿Cuánto necesita?</label>
                  <input
                    className="input"
                    type="text"
                    onChange={ this.onChangeInput }
                    name="many" />
                </div>
                <div className="form-row">
                  <label className="label">¿Cómo nos contactó? *</label>
                  <select
                    name="source"
                    className="input"
                    onChange={ this.onChangeSelect }
                    required
                  >
                    <option></option>
                    <option value="Radio">Radio</option>
                    <option value="Volantes">Volantes</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Google">Google</option>
                    <option value="Amigos">Amigos</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <button type="submit" className="form-btn">Enviar datos</button>
              </form>
            </div>
          </div>
        }
      </header>
    )
  }
}

export default Top;