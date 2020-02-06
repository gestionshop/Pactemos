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

    const url = 'http://localhost:3001/api/pactemos/domicilio'
    // const url = 'https://gestionshop.co/api/pactemos/domicilio'
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
                  <label className="label">¿ Cuánto necesita ?</label>
                  <input
                    className="input"
                    type="text"
                    onChange={ this.onChangeInput }
                    name="many" />
                </div>
                <div className="form-row">
                    <label className="label">Selecciona la ciudad *</label>
                    <select
                      name="city"
                      className="input"
                      onChange={ this.onChangeCiudad }
                      required
                      placeholder = "Seleccione tu cuidad"
                    >
                      <option></option>
                      <option value="Cartagena">Cartagena</option>
                      <option value="Sabanalarga">Sabanalarga</option>
                      <option value="Baranoa">Baranoa</option>
                      <option value="SantaMarta">Santa Marta</option>
                    </select>
                  </div>
                { 
                  this.state.category
                  &&
                  this.state.category.value === 'Cartagena'
                  &&
                  <div className="form-row">
                      <label className="label">Sucursal en Cartagena *</label>
                      <select
                        name="compraventa"
                        className="input"
                        onChange={ this.onChangeSelect }
                        required
                        placeholder = "Sucursal mas cercana"
                      >
                        <option></option>
                        <option value="Molino">Centro, Calle del Cabo. C.C Invercrédito. Local 9</option>
                        <option value="Heroica">Centro, C.C. El Cañonazo Lc 7 </option>
                        <option value="India">Centro, Calle del Cabo. C.C Invercrédito. Local 5</option>
                        <option value="Pegasos">Centro, Calle de las Carretas</option>
                        <option value="Guaca">Centro. Portal De Los Dulces</option>
                        <option value="Bazurto">Bazurto, C.C Almacentro. Local 4</option>
                        <option value="Pozon">Pozón, Carrera 88 #56-1</option>
                        <option value="Boquilla">Boquilla, Calle Principal</option>
                        <option value="Turbaco">Turbaco, Calle Real #17-91</option>
                      </select>
                    </div>
                }
                {  
                  this.state.category
                  &&
                  this.state.category.value === 'Sabanalarga'
                  &&
                  <div className="form-row">
                    <label className="label">Sucursal en Sabanalarga *</label>
                    <select
                      name="compraventa"
                      className="input"
                      onChange={ this.onChangeSelect }
                      required
                      placeholder = "Sucursal mas cercana"
                    >
                      <option></option>
                      <option value="Exito">Calle 20 Nº 18 - 56</option>
                      <option value="Carolina">Cra 19 Nº 20 - 14</option>
                    </select>
                  </div>
                }
                { 
                 this.state.category
                 &&
                 this.state.category.value === 'Baranoa'
                 &&
                 <div className="form-row">
                    <label className="label">Sucursal en Baranoa *</label>
                    <select
                      name="compraventa"
                      className="input"
                      onChange={ this.onChangeSelect }
                      required
                      placeholder = "Sucursal mas cercana"
                    >
                      <option value="Baranoa">Carrera 19 #18-18 Local 2</option>
                    </select>
                  </div>
                }
                { 
                 this.state.category
                 &&
                 this.state.category.value === 'SantaMarta'
                 &&
                  <div className="form-row">
                      <label className="label">Sucursal en Santa Marta *</label>
                      <select
                        name="compraventa"
                        className="input"
                        onChange={ this.onChangeSelect }
                        required
                        placeholder = "Sucursal mas cercana"
                      >
                        <option></option>
                        <option value="Exito">Centro, Cra 5, Edificio Galaxia. Local 102</option>
                        <option value="Ciclon">Centro, Cra 5 # 21 - 16</option>
                        <option value="Gaira">Gaira, Cra 10 # 9- 35</option>
                        <option value="Concepcion">Concepción 2 Mz Y Casa 19. 2da Etapa </option>
                        <option value="Livartador">Av. el Rio con Av. del libertador 30 -146</option>
                        <option value="Ferrocarril">Avenida Del Ferrocarril #5-08</option>
                        <option value="Mercado">Mercado, Calle 12 #8-80</option>
                      </select>
                    </div>
                }
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