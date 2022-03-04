import React, { Component } from 'react';
import axios from 'axios';
import Thanks from '../pages/gracias'

import { serviceSendToSalesforce } from '../services/salesforce'

class Top extends Component {
  state = {
    visible: false,
    visibleModal: false,
    submited: false,
    typeData: 'domicilio',
    names: ''
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

    const names = (
      name === 'name'
        ? `${value} ${ this.state.lasname || '' }`.trim()
      : name === 'lastname'
        ? `${ this.state.name || '' } ${value}`.trim()
      : this.state.names
    )

    this.setState({
      [name]: value,
      names
    })
  }
  onChangeSelect = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value,
    })
  }
  onChangeCiudad = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      category: {
        name,
        value,
      }
    })
  }

  submit = (e) => {
    e.preventDefault()

    // const url = 'http://localhost:3001/api/pactemos/domicilio'
    const url = 'https://gestionshop.co/api/pactemos/domicilio'
    axios.post(url, this.state)
    .then(() => this.sendToSalesforce())
    .then(res => {
      this.setState({ submited: true })
      window.location.replace('/gracias')
    })
    .catch(error => {
      alert('Ocurrio un error y no se pudo enviar la información')
      console.log('res error', error)
    })
  }

  sendToSalesforce = () => {
    const values = {
      oid: '00D4x000006qQ0N',
      retURL: 'https://compraventaspactemos.com/cotizar/',
      first_name: this.state.name,
      last_name: this.state.lastname,
      email: this.state.email,
      mobile: this.state.mobile,
      '00N4x00000Knv0j': this.state.category.value,
      '00N4x00000Q5kDM': 'Dinero inmediato',
      '00N4x00000Knv1D': this.state.compraventa,
      '00N4x00000KnvIO': this.state.many,
      'lead_source': this.state.source,
      xSucursal: 'PCT 100'
    }

    return serviceSendToSalesforce(values)
  }

  render () {
    return (
      <header className="Top">
        <div className="container">
          <div className="Top_row">
          <a href="/">
            <img className="Top_logo" src="/static/img/logo.png" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas" />
          </a>
            <img onClick={ this.showMenu } className="Top_menu_icon" src="/static/img/menu.svg" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>

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
                    <label className="label">Selecciona tu ciudad *</label>
                    <select
                      name="city"
                      className="input"
                      onChange={ this.onChangeCiudad }
                      required
                      placeholder = "Seleccione tu cuidad"
                    >
                      <option></option>
                      <option value="Cartagena De Indias">Cartagena De Indias</option>
                      <option value="Turbaco">Turbaco</option>
                      <option value="Arjona">Arjona</option>
                      <option value="Santa Marta">Santa Marta</option>
                      <option value="Sabanalarga">Sabanalarga</option>
                      <option value="Baranoa">Baranoa</option>
                    </select>
                </div>
                {
                  this.state.category
                  &&
                  this.state.category.value === 'Cartagena De Indias'
                  &&
                  <div className="form-row">
                    <label className="label">Tu sucursal más cercana *</label>
                      <select
                        name="compraventa"
                        className="input"
                        onChange={ this.onChangeSelect }
                        required
                      >
                        <option></option>
                        <option value="PCT 02">Centro, Calle del Cabo. C.C Invercrédito. Local 5</option>
                        <option value="PCT 01">Centro, Calle del Cabo. C.C Invercrédito. Local 9</option>
                        <option value="PCT 04">Centro. Portal De Los Dulces, Calle Portocarrero</option>
                        <option value="PCT 16">Centro, Av Daniel Lemaitre al lado del Hotel San Felipe</option>
                        <option value="PCT 07">Bocagrande. Cra 3 # 5- 187</option>
                        <option value="PCT 12">San jose de los Campanos. Cra 101B. # 38A-83</option>
                        <option value="PCT 13">Boquilla, Calle Principal. CRA 9 # 59-17</option>
                        <option value="PCT 14">Bazurto, C.C Almacentro. Local 4</option>
                        <option value="PCT 19">Pozón, Carrera 88 #56-1. A una cuadra de la entrada</option>
                        <option value="PCT 20">Plazuela, Frente al multicentro La Plazuela, Dg. 31 # 71-59</option>
                        <option value="PCT 201">Crespo, Calle 70 # 2-67 al lado de Megatiendas</option>
                        <option value="PCT 103">Superefectivo Terminal</option>
                        <option value="PCT 104">Superefectivo Socorro</option>
                      </select>
                </div>
                }
                {
                  this.state.category
                  &&
                  this.state.category.value === 'Turbaco'
                  &&
                  <div className="form-row">
                    <label className="label">Tu sucursal más cercana *</label>
                    <select
                      name="compraventa"
                      className="input"
                      onChange={ this.onChangeSelect }
                      required
                    >
                      <option></option>
                      <option value="PCT 15">Turbaco, Calle Real. #17-91</option>
                    </select>
                  </div>
                }
                {
                  this.state.category
                  &&
                  this.state.category.value === 'Arjona'
                  &&
                  <div className="form-row">
                    <label className="label">Tu sucursal más cercana *</label>
                    <select
                      name="compraventa"
                      className="input"
                      onChange={ this.onChangeSelect }
                      required
                    >
                      <option></option>
                      <option value="PCT 17">Arjona, Calle del Coco con Mercado, Esquina.</option>
                    </select>
                  </div>
                }
                {
                  this.state.category
                  &&
                  this.state.category.value === 'Sabanalarga'
                  &&
                  <div className="form-row">
                    <label className="label">Tu sucursal más cercanaa *</label>
                    <select
                      name="compraventa"
                      className="input"
                      onChange={ this.onChangeSelect }
                      required
                    >
                      <option></option>
                      <option value="PCT 05">Cra 19 Nº 20 - 14</option>
                      <option value="PCT 06">Calle 20 Nº 18 - 56</option>
                    </select>
                  </div>
                }
                {
                 this.state.category
                 &&
                 this.state.category.value === 'Baranoa'
                 &&
                 <div className="form-row">
                    <label className="label">Tu sucursal más cercana *</label>
                    <select
                      name="compraventa"
                      className="input"
                      onChange={ this.onChangeSelect }
                      required
                    >
                      <option></option>
                      <option value="PCT 08">Carrera 19 #18-18 Local 2</option>
                    </select>
                  </div>
                }
                {
                 this.state.category
                 &&
                 this.state.category.value === 'Santa Marta'
                 &&
                  <div className="form-row">
                      <label className="label">Tu sucursal más cercana *</label>
                      <select
                        name="compraventa"
                        className="input"
                        onChange={ this.onChangeSelect }
                        required
                      >
                        <option></option>
                        <option value="PCT 09">Centro, Cra 5, Edificio Galaxia. Local 102</option>
                        <option value="PCT 10">Centro, Cra 5 # 21 - 16</option>
                        <option value="PCT 11">Gaira, Cra 10 # 9- 35</option>
                        <option value="PCT 202">Avenida El Libertador #27 - 231</option>
                        <option value="PCT 18">Concepción 2 Mz Y Casa 19. 2da Etapa </option>
                        <option value="PCT 06">Av. el Rio con Av. del libertador 30 -146</option>
                        <option value="PCT 102">Avenida Del Ferrocarril #5-08</option>
                        <option value="PCT 105">Vía a Minca, Cra 66 N. 39 - 81, Yucal</option>
                        <option value="PCT 101">Mercado, Calle 12 #8-80</option>
                        <option value="PCT 107">Av. Santa rita, Calle 22 con 18. Esquina</option>
                        <option value="PCT 108">Bonga, Cra 17 con 7</option>
                      </select>
                    </div>
                }
                <div className="form-row">
                  <label className="label">Nombres *</label>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    onChange={ this.onChangeInput }
                    required />
                </div>
                <div className="form-row">
                  <label className="label">Apellidos *</label>
                  <input
                    className="input"
                    type="text"
                    name="lastname"
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
                  <label className="label">Correo *</label>
                  <input
                    className="input"
                    type="text"
                    required
                    onChange={ this.onChangeInput }
                    name="email" />
                </div>
                <div className="form-row">
                  <label className="label">¿ Cuánto necesita ?</label>
                  <input
                    className="input"
                    type="text"
                    onChange={ this.onChangeInput }
                    name="many" />
                </div>
                <div className="form-row">
                  <label className="label">¿ Cómo nos contactó ? *</label>
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

                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="politica-tratamiento-datos"
                      required
                    />
                    &nbsp;Acepto
                    <a href="/politica">
                      &nbsp;politica de tratamiento de datos
                    </a>
                  </label>
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