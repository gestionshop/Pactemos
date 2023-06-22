import React, { Component } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Top from '../components/Top';
import axios from 'axios';
import Footer from '../components/Footer'

import { serviceSendToSalesforce } from '../services/salesforce'

const Dropzone = dynamic(import('react-dropzone'), {
  ssr: false,
});

const data = [
  {
    name: 'Joyería',
    options: [
      {
        name: 'Oro',
        options: [
          {
            name: '18k',
            value: 170000,
          },
          {
            name: '14k',
            value: 48000,
          },
          {
            name: '10k',
            value: 27000,
          },
        ],
      },
      {
        name: 'Plata',
        options: [
          {
            name: 'Ley 925',
            value: 800,
          },
        ],
      },
    ],
  },
  {
    name: 'Artículos',
    options: [
      {
        name: 'Electrodomésticos',
        // options: [
        //   {
        //     name: 'Televisor',
        //     value: 0,
        //   },
        //   {
        //     name: 'Nevera',
        //     value: 0,
        //   },
        //   {
        //     name: 'Estufa',
        //     value: 0,
        //   },
        //   {
        //     name: 'Lavadora',
        //     value: 0,
        //   },
        //   {
        //     name: 'Equipo de sonido',
        //     value: 0,
        //   },
        // ],
      },
      {
        name: 'Herramientas',
        // options: [
        //   {
        //     name: 'Tipo de herramientas',
        //     value: 0,
        //   },
        // ],
      },
      {
        name: 'Tecnología',
        // options: [
        //   {
        //     name: 'Portatil',
        //     value: 0,
        //   },
        //   {
        //     name: 'Tablet',
        //     value: 0,
        //   },
        // ],
      },
    ],
  },
  {
    name: 'Otros',
  },
  {
    name: 'Vender CDT',
  },
]

class Cotizar extends Component {
  state = {
    type: null,
    subtype: null,
    category: null,
    localizacion: null,
    weight: undefined,
    value: undefined,
    visible: false,
    submited: false,
    files: [],
    names: ''
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  closeModal = () => {
    this.setState({
      visible: false,
    })
  }

  selectType = (type) => {
    this.setState({
      type,
      subtype: null,
      category: null,
      weight: undefined,
      value: undefined,
    })
  }

  selectSubType = (subtype) => {
    this.setState({
      subtype,
      category: null,
      weight: undefined,
      value: undefined,
    })
  }

  selectCategory = (category) => {
    this.setState({
      category: null,
    }, () => {
      this.setState({
        category,
        weight: undefined,
        value: undefined,
      })
    })
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

    if (this.state.type.name === 'Joyería' && name === 'weight') {
      this.setState({
        [name]: value,
        value: value*this.state.category.value,
      })
    } else {
      this.setState({
        [name]: value,
        names
      })
    }
  }

  onChangeSelect = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value,
    })
  }

  onChangeTipoHerramienta = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      category: {
        name,
        value,
      }
    })
  }

  onChangeElectrodomesticos = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      category: {
        name,
        value,
      }
    })
  }

  onChangeTecnologia = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      category: {
        name,
        value,
      }
    })
  }

  onChangeCiudad = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      localizacion: {
        name,
        value,
      }
    })
  }

  submit = (e) => {
    e.preventDefault()
    const url = 'https://gestionshop.co/api/pactemos/cotizacion'
    // const url = 'http://localhost:3001/api/pactemos/cotizacion'

    let formData = new FormData()
    for( var i = 0; i < this.state.files.length; i++ ){
      let file = this.state.files[i]
      formData.append('files[' + i + ']', file)
    }
    formData.append('data', JSON.stringify(this.state))

    axios.post(url,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(() => this.sendToSalesforce())
    .then(res => {
      this.setState({ visible: false, submited: true })
      window.location.replace('/gracias')
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
      '00N4x00000Knv0j': this.state.localizacion.value,
      '00N4x00000Q5kDM': 'Dinero inmediato',
      '00N4x00000Knv1D': this.state.compraventa,
      '00N4x00000KnvIO': this.state.many,
      'lead_source': this.state.source,
      xSucursal: 'PCT 100'
    }

    return serviceSendToSalesforce(values)
  }

  onDrop = (newFiles) => {
    let { files } = this.state
    files = files.concat(newFiles)
    this.setState({ files })
  }

  deleteFiles = (e) => {
    e.preventDefault()
    this.setState({ files: [] })
  }

  render () {
    return (
      <>
        <Head>
          <title>Cotizador-Obtén la Valoración de tu joya o artículo.</title>
          <meta name="description" content="Nos empeñamos en darte mas dinero. Ingresa al cotizador en línea para obtener el valor estimado que puedes recibir por tus joyas de oro y artículos."/>
        </Head>
        <div className="cotizar">
          <Top />
          <img className="cover" src="/static/img/cover-cotizar.png" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
          <div className="container">
            <section className="offices-header">
              <h1>Cotizador en línea</h1>
              <p>Rellene los campos y recuerde que la información personal la utilizaremos para confirmarle cuánto dinero le damos por su artículo</p>

              <div className="cotizar-select">
                {
                  data.map(item => <div
                    onClick={ () => this.selectType(item) }
                    className={`cotizar-select-item ${ this.state.type && item.name === this.state.type.name ? 'active' : '' }`}>
                    <span>{ item.name }</span>
                  </div>)
                }
              </div>

              {
                this.state.type
                &&
                (this.state.type.name === 'Joyería' || this.state.type.name === 'Artículos')
                &&
                <div className="cotizar-select">
                  {
                    this.state.type.options.map(item => <div
                      onClick={ () => this.selectSubType(item) }
                      className={`cotizar-select-item ${ this.state.subtype && item.name === this.state.subtype.name ? 'active' : '' }`}>
                      <span>{ item.name }</span>
                    </div>)
                  }
                </div>
              }

              {
                this.state.subtype
                &&
                this.state.subtype.options
                &&
                <div className="cotizar-select">
                  {
                    this.state.subtype.options.map(item => <div
                      onClick={ () => this.selectCategory(item) }
                      className={`cotizar-select-item ${ this.state.category && item.name === this.state.category.name ? 'active' : '' }`}>
                      <span>{ item.name }</span>
                    </div>)
                  }
                </div>
              }

              {
                this.state.subtype
                &&
                this.state.subtype.name === 'Herramientas'
                &&
                <div className="cotizar-select">
                  <div className="form-row">
                    {/* <label className="label">Tipo de herramienta</label> */}
                    <select
                      name="tipo_herramienta"
                      className="input"
                      onChange={ this.onChangeTipoHerramienta }
                      required
                    >
                      <option>Seleccionar una herramienta</option>
                      <option value="Taladro">Taladro</option>
                      <option value="Pulidora">Pulidora</option>
                      <option value="Caladora">Caladora</option>
                      <option value="Trozadora">Tronzadora</option>
                      <option value="Ingledora">Ingletadora</option>
                      <option value="Sierra Circular">Sierra Circular</option>
                      <option value="Lijadora">Lijadora</option>
                      <option value="Ruteadora">Ruteadora</option>
                      <option value="Pistola de Impacto">Pistola de Impacto</option>
                      <option value="Cortadora">Cortadora</option>
                      <option value="Otro">Otros</option>
                    </select>
                  </div>
                </div>
              }

              {
                this.state.subtype
                &&
                this.state.subtype.name === 'Electrodomésticos'
                &&
                <div className="cotizar-select">
                  <div className="form-row">
                    {/* <label className="label">Tipo de Electrodomésticos</label> */}
                    <select
                      name="tipo_electrodomesticos"
                      className="input"
                      onChange={ this.onChangeElectrodomesticos }
                      required
                    >
                      <option>Selecciona un electrodoméstico</option>
                      <option value="Televisor">Televisor</option>
                      <option value="Nevera">Nevera</option>
                      <option value="Estufa">Estufa</option>
                      <option value="Equipo de Sonido">Equipo de Sonido</option>
                      <option value="Otro">Otros</option>
                    </select>
                  </div>
                </div>
              }

              {
                this.state.subtype
                &&
                this.state.subtype.name === 'Tecnología'
                &&
                <div className="cotizar-select">
                  <div className="form-row">
                    {/* <label className="label">Tipo de Electrodomésticos</label> */}
                    <select
                      name="tipo_tecnologia"
                      className="input"
                      onChange={ this.onChangeTecnologia }
                      required
                    >
                      <option>Seleccione un artículo</option>
                      <option value="Portatil">Portatil</option>
                      <option value="Tablet">Tablet</option>
                      <option value="Celular">Celular</option>
                      <option value="Otro">Otros</option>
                    </select>
                  </div>
                </div>
              }

              {
                this.state.type
                &&
                this.state.type.name === 'Joyería'
                &&
                this.state.category
                &&
                <>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">Peso aproximado</label>
                      <input
                        className="input"
                        type="text"
                        placeholder="En gramos"
                        name="weight"
                        onChange={ this.onChangeInput }
                      />
                    </div>
                  </div>
                  <Dropzone onDrop={this.onDrop} multiple={false}>
                    {({getRootProps, getInputProps, isDragActive}) => (
                      <section style={{
                        margin: '30px 0 10px 0',
                      }}>
                        <p style={{
                          textAlign: 'left',
                          fontSize: 14,
                        }}><strong>Agregar imagen</strong> (opcional)</p>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <div style={{
                            padding: 30,
                            color: '#aaa',
                            textAlign: 'center',
                            border: '1px dashed #ccc',
                          }}>
                            {
                              isDragActive
                              ?
                              <span>Soltar archivo</span>
                              :
                              <span>Arrastra la imagen o clic para elegir</span>
                            }
                          </div>
                        </div>
                        {
                          this.state.files
                          &&
                          this.state.files.length > 0
                          &&
                          <div style={{
                            marginTop: 10,
                            padding: '10px 20px',
                            textAlign: 'left',
                            fontSize: 14,
                            backgroundColor: '#f3f0ee',
                            borderRadius: 4,
                          }}>
                            <h4>Archivo seleccionado</h4>
                            {
                              this.state.files.map(item => <li>{ item.name }</li>)
                            }

                            <a href="#" onClick={ this.deleteFiles } style={{
                              display: 'block',
                              marginTop: 10,
                              fontSize: 13,
                              color: '#555',
                            }}>Borrar archivos seleccionados</a>
                          </div>
                        }
                      </section>
                    )}
                  </Dropzone>
                </>
              }
{/* {console.log('this.state.type',this.state.type , this.state.category) } */}
              {
                this.state.type
                &&
                this.state.type.name === 'Artículos'
                &&
                this.state.category
                &&
                <>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">Marca *</label>
                      <input
                        className="input"
                        type="text"
                        placeholder=""
                        name="brand"
                        onChange={ this.onChangeInput }
                      />
                    </div>
                  </div>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">Modelo</label>
                      <input
                        className="input"
                        type="text"
                        placeholder=""
                        name="model"
                        onChange={ this.onChangeInput }
                      />
                    </div>
                  </div>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className='label etiqueta-izquierda'>{this.state.category.value === 'Celular' && this.state.category.name === 'tipo_tecnologia' ? 'Tiempo de uso en meses. (1, 2, 6) - Debe ser menor a 6 meses para poder recibirlo.' : this.state.category.value !== 'Celular' && this.state.category.name === 'tipo_tecnologia' ? 'Tiempo de uso en meses. (1, 2, 6) - Debe ser menor a 12 meses para poder recibirlo.' : 'Tiempo de uso (Ej. 2 año y/o 3 meses)'}</label>
                      {/* <label className="label">Tiempo de uso (Ej. 2 año y/o 3 meses) *</label> */}
                      <input
                        className="input"
                        type="text"
                        placeholder=""
                        name="time"
                        onChange={ this.onChangeInput }
                      />
                    </div>
                  </div>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">¿Tiene cargador? *</label>

                      <label className="radio">
                        <input
                          type="radio"
                          placeholder=""
                          name="charger"
                          value="Si"
                          onChange={ this.onChangeInput }
                        /> Si
                      </label>
                      <label className="radio">
                        <input
                          type="radio"
                          placeholder=""
                          name="charger"
                          value="No"
                          onChange={ this.onChangeInput }
                        /> No
                      </label>
                    </div>
                  </div>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">{`¿Tiene factura? ${this.state.category.name === 'tipo_tecnologia' ? '(Indispensable)' :''} *`}</label>

                      <label className="radio">
                        <input
                          type="radio"
                          placeholder=""
                          name="invoice"
                          value="Si"
                          onChange={ this.onChangeInput }
                        /> Si
                      </label>
                      <label className="radio">
                        <input
                          type="radio"
                          placeholder=""
                          name="invoice"
                          value="No"
                          onChange={ this.onChangeInput }
                        /> No
                      </label>
                    </div>
                  </div>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">Comentarios</label>
                      <textarea
                        style={{ height: 60 }}
                        className="input"
                        type="text"
                        placeholder=""
                        name="comment"
                        onChange={ this.onChangeInput }
                      />
                    </div>
                  </div>
                  <Dropzone onDrop={this.onDrop} multiple={false}>
                    {({getRootProps, getInputProps, isDragActive}) => (
                      <section style={{
                        margin: '30px 0 10px 0',
                      }}>
                        <p style={{
                          textAlign: 'left',
                          fontSize: 14,
                        }}><strong>Agregar imagen</strong> (opcional)</p>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <div style={{
                            padding: 30,
                            color: '#aaa',
                            textAlign: 'center',
                            border: '1px dashed #ccc',
                          }}>
                            {
                              isDragActive
                              ?
                              <span>Soltar archivo</span>
                              :
                              <span>Arrastra la imagen o clic para elegir</span>
                            }
                          </div>
                        </div>
                        {
                          this.state.files
                          &&
                          this.state.files.length > 0
                          &&
                          <div style={{
                            marginTop: 10,
                            padding: '10px 20px',
                            textAlign: 'left',
                            fontSize: 14,
                            backgroundColor: '#f3f0ee',
                            borderRadius: 4,
                          }}>
                            <h4>Archivo seleccionado</h4>
                            {
                              this.state.files.map(item => <li>{ item.name }</li>)
                            }

                            <a href="#" onClick={ this.deleteFiles } style={{
                              display: 'block',
                              marginTop: 10,
                              fontSize: 13,
                              color: '#555',
                            }}>Borrar archivos seleccionados</a>
                          </div>
                        }
                      </section>
                    )}
                  </Dropzone>
                </>
              }

              {
                this.state.type
                &&
                this.state.type.name === 'Otros'
                &&
                <>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">Tipo de articulo</label>
                      <input
                        className="input"
                        type="text"
                        placeholder=""
                        name="articleType"
                        onChange={ this.onChangeInput }
                      />
                    </div>
                  </div>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">Marca</label>
                      <input
                        className="input"
                        type="text"
                        placeholder=""
                        name="brand"
                        onChange={ this.onChangeInput }
                      />
                    </div>
                  </div>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">Tiempo de uso</label>
                      <input
                        className="input"
                        type="text"
                        placeholder=""
                        name="time"
                        onChange={ this.onChangeInput }
                      />
                    </div>
                  </div>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">Comentarios</label>
                      <textarea
                        style={{ height: 60 }}
                        className="input"
                        type="text"
                        placeholder=""
                        name="comment"
                        onChange={ this.onChangeInput }
                      />
                    </div>
                  </div>
                  <Dropzone onDrop={this.onDrop} multiple={false}>
                    {({getRootProps, getInputProps, isDragActive}) => (
                      <section style={{
                        margin: '30px 0 10px 0',
                      }}>
                        <p style={{
                          textAlign: 'left',
                          fontSize: 14,
                        }}><strong>Agregar imagen</strong> (opcional)</p>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <div style={{
                            padding: 30,
                            color: '#aaa',
                            textAlign: 'center',
                            border: '1px dashed #ccc',
                          }}>
                            {
                              isDragActive
                              ?
                              <span>Soltar archivo</span>
                              :
                              <span>Arrastra la imagen o clic para elegir</span>
                            }
                          </div>
                        </div>
                        {
                          this.state.files
                          &&
                          this.state.files.length > 0
                          &&
                          <div style={{
                            marginTop: 10,
                            padding: '10px 20px',
                            textAlign: 'left',
                            fontSize: 14,
                            backgroundColor: '#f3f0ee',
                            borderRadius: 4,
                          }}>
                            <h4>Archivo seleccionado</h4>
                            {
                              this.state.files.map(item => <li>{ item.name }</li>)
                            }

                            <a href="#" onClick={ this.deleteFiles } style={{
                              display: 'block',
                              marginTop: 10,
                              fontSize: 13,
                              color: '#555',
                            }}>Borrar archivos seleccionados</a>
                          </div>
                        }
                      </section>
                    )}
                  </Dropzone>
                </>
              }

              {
                this.state.type
                &&
                this.state.type.name === 'Vender CDT'
                &&
                <>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">Valor CDT</label>
                      <input
                        className="input"
                        type="text"
                        placeholder=""
                        name="valueCDT"
                        onChange={ this.onChangeInput }
                      />
                    </div>
                  </div>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">Fecha de apertura</label>
                      <input
                        className="input"
                        type="date"
                        placeholder=""
                        name="openCDT"
                        onChange={ this.onChangeInput }
                      />
                    </div>
                  </div>
                  <div className="cotizar-select">
                    <div className="form-input">
                      <label className="label">Fecha de vencimiento</label>
                      <input
                        className="input"
                        type="date"
                        placeholder=""
                        name="closeCDT"
                        onChange={ this.onChangeInput }
                      />
                    </div>
                  </div>
                </>
              }

              {
                this.state.type
                &&
                this.state.type.name === 'Joyería'
                &&
                this.state.weight
                &&
                <div className="cotizar-result">
                  <h4>¿Cuánto me dan por mi joya?</h4>
                  {/* <span>Te damos hasta $ { funtions.FormatMil(this.state.value) } pesos</span> */}

                  <a href="#" onClick={ this.showModal } className="cotizar-btn">¡ Descúbrelo !</a>

                  <p style={{
                    marginTop: 10,
                    fontSize: 13,
                  }}>
                    * Aplican condiciones
                  </p>
                </div>
              }

              {
                this.state.type
                &&
                this.state.type.name === 'Artículos'
                &&
                this.state.brand
                &&
                this.state.time
                &&
                this.state.charger
                &&
                this.state.invoice
                &&
                <div className="cotizar-result">
                  <h4>¿Cuánto me dan por mi artículo?</h4>

                  <a href="#" onClick={ this.showModal } className="cotizar-btn">¡ Descúbrelo !</a>

                  <p style={{
                    marginTop: 10,
                    fontSize: 13,
                  }}>
                    * Aplican condiciones
                  </p>

                </div>
              }

              {
                this.state.type
                &&
                this.state.type.name === 'Vender CDT'
                &&
                this.state.valueCDT
                &&
                this.state.openCDT
                &&
                this.state.closeCDT
                &&
                <div className="cotizar-result">
                  <h4>¿Cuánto me dan por mi CDT?</h4>

                  <a href="#" onClick={ this.showModal } className="cotizar-btn">¡ Descúbrelo !</a>

                  <p style={{
                    marginTop: 10,
                    fontSize: 13,
                  }}>
                    *Aplican condiciones
                  </p>

                </div>
              }

              {
                this.state.type
                &&
                this.state.type.name === 'Otros'
                &&
                this.state.articleType
                &&
                this.state.brand
                &&
                this.state.time
                &&
                this.state.comment
                &&
                <div className="cotizar-result">
                  <h4>¿Cuánto me dan por mi artículo?</h4>

                  <a href="#" onClick={ this.showModal } className="cotizar-btn">¡ Descúbrelo !</a>

                  <p style={{
                    marginTop: 10,
                    fontSize: 13,
                  }}>
                    *Aplican condiciones
                  </p>

                </div>
              }

              {
                this.state.visible
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
                      placeholder = "Seleccione tu ciudad"
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
                  this.state.localizacion
                  &&
                  this.state.localizacion.value === 'Cartagena De Indias'
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
                        <option value="PCT 07">Bocagrande. Cra 3 # 5-187</option>
                        <option value="PCT 12">San jose de los Campanos. Cra 101B. # 38A-83</option>
                        <option value="PCT 13">Boquilla, Calle Principal. CRA 9 # 59-17</option>
                        <option value="PCT 14">Bazurto, C.C Almacentro. Local 4</option>
                        <option value="PCT 21">Avenida Pedro de Heredia, Frente a la Castellana</option>
                        <option value="PCT 19">Pozón, Carrera 88 # 56-1. A una cuadra de la entrada</option>
                        <option value="PCT 20">Plazuela, Frente al multicentro La Plazuela, Dg. 31 # 71-59</option>
                        <option value="PCT 201">Crespo, Calle 70 # 2-67 al lado de Megatiendas</option>
                        <option value="PCT 103">Superefectivo Terminal</option>
                        <option value="PCT 104">Superefectivo Socorro</option>
                      </select>
                </div>
                }
                {
                  this.state.localizacion
                  &&
                  this.state.localizacion.value === 'Turbaco'
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
                  this.state.localizacion
                  &&
                  this.state.localizacion.value === 'Arjona'
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
                  this.state.localizacion
                  &&
                  this.state.localizacion.value === 'Sabanalarga'
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
                      <option value="PCT 05">Cra 19 Nº 20 - 14</option>
                      <option value="PCT 06">Calle 20 Nº 18 - 56</option>
                    </select>
                  </div>
                }
                {
                 this.state.localizacion
                 &&
                 this.state.localizacion.value === 'Baranoa'
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
                 this.state.localizacion
                 &&
                 this.state.localizacion.value === 'Santa Marta'
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
                        <option value="PCT 107">Av. Santa rita, Calle 22 con 18. Esquina</option>
                        <option value="PCT 108">Bonga, Cra 17 con 7</option>
                        <option value="PCT 109">Rodadero, Cra 4 # 18-62, al lado de Rapimercar</option>
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
                          pattern="[0-9]{10}"// falta subir y facturar
                          title="Ingrese un número de celular válido de 10 dígitos"
                          onChange={ this.onChangeInput }
                          required />
                          <span>Debe ingresar un número correcto para que el equipo comercial pueda confirmarle la valoración</span>
                      </div>
                      <div className="form-row">
                        <label className="label">Correo *</label>
                        <input
                          className="input"
                          type="email"// falta subir y facturar
                          required
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
                          placeholder = "Seleccione una opcion"
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
            </section>
          </div>

        </div>
        <div className="container">
          <Footer />
        </div>
      </>
    )
  }
}

export default Cotizar;