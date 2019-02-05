import React, { Component } from 'react';
import Head from 'next/head';
import Top from '../components/Top';


class Sucursales extends Component {
  render () {
    return (
      <>
        <Head>
          <title>Sucursales y oficinas de Compraventa Pactemos</title>
        </Head>
        <div>
          <Top />
          <img className="cover" src="/static/img/oficinas.png" alt=""/>
          <div className="container">
            <section className="offices-header">
              <h1>Sucursales de Compraventa Pactemos</h1>
              <p>Compraventas PACTEMOS está presente en la Región Caribe con la misión de ofrecer dinero de manera inmediata, con el profesionalismo y la seguridad que nos caracteriza</p>

              <div className="offices-links">
                <a href="#Cartagena">Cartagena</a>
                <a href="#SantaMarta">Santa Marta</a>
                <a href="#Sabanalarga">Sabanalarga</a>
                <a href="#Baranoa">Baranoa</a>
              </div>
            </section>

            <section id="Cartagena" className="offices-section">
              <h2>Sucursales en Cartagena</h2>

              <div className="offices-row">
                <article className="offices-item">
                  <address>
                    <h4>Bocagrande</h4>
                    <span>Cra 3. #5-187.</span><br/>
                    <span>Teléfono: (57) (5) 679900</span><br/>
                    <span>Whatsapp: (301) 2693491</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d981.0692495631791!2d-75.5581635!3d10.3995605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62fed77c76ded%3A0x15b57ad2b1a0583c!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549332912741" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <h4>Centro</h4>
                    <span>C.C. El Cañonazo Lc 7</span><br/>
                    <span>Teléfono: (57) (5) 6641747</span><br/>
                    <span>Whatsapp: (301) 4591953</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d981.0692495631791!2d-75.5581635!3d10.3995605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62fed77c76ded%3A0x15b57ad2b1a0583c!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549332912741" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <span>Calle del Cabo C.C.Invercrédito Lc 9</span><br/>
                    <span>Teléfono: (57) (5) 6643639</span><br/>
                    <span>Whatsapp: (301) 5641900</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.942896213083!2d-75.54786118520227!3d10.426106292559798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62433423449a1%3A0xb454e36780459ab1!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549333730134" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <span>Calle del Cabo C.C.Invercrédito Lc 5</span><br/>
                    <span>Teléfono: (57) (5) 6602108</span><br/>
                    <span>Whatsapp: (301) 3427401</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3923.9428961193234!2d-75.5478612!3d10.4261063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f9e98238177%3A0xe738cc01ffab19d!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549333954593" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <span>Calle de las Carretas # 34-35</span><br/>
                    <span>Teléfono: (57) (5) 6602165</span><br/>
                    <span>Whatsapp: (301) 3427402</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d980.9932095654385!2d-75.5499182!3d10.42373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac2a1efd5a816337!2sCompraventas+PACTEMOS!5e0!3m2!1ses!2spe!4v1549334238857" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <span>Portal de Los Dulces</span><br/>
                    <span>Teléfono: (57) (5) 6642182</span><br/>
                    <span>Whatsapp: (301) 4690899</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.975917491086!2d-75.55167528520231!3d10.423485592561649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd85ca545176562b9!2sCompraventas+PACTEMOS!5e0!3m2!1ses!2spe!4v1549334285429" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
              </div>
            </section>
            
            <section id="SantaMarta" className="offices-section">
              <h2>Sucursales en Santa Marta</h2>

              <div className="offices-row">
                <article className="offices-item">
                  <address>
                    <h4>Bocagrande</h4>
                    <span>Cra 3. #5-187.</span><br/>
                    <span>Teléfono: (57) (5) 679900</span><br/>
                    <span>Whatsapp: (301) 2693491</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d981.0692495631791!2d-75.5581635!3d10.3995605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62fed77c76ded%3A0x15b57ad2b1a0583c!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549332912741" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <h4>Centro</h4>
                    <span>C.C. El Cañonazo Lc 7</span><br/>
                    <span>Teléfono: (57) (5) 6641747</span><br/>
                    <span>Whatsapp: (301) 4591953</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d981.0692495631791!2d-75.5581635!3d10.3995605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62fed77c76ded%3A0x15b57ad2b1a0583c!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549332912741" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <span>Calle del Cabo C.C.Invercrédito Lc 9</span><br/>
                    <span>Teléfono: (57) (5) 6643639</span><br/>
                    <span>Whatsapp: (301) 5641900</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.942896213083!2d-75.54786118520227!3d10.426106292559798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62433423449a1%3A0xb454e36780459ab1!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549333730134" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <span>Calle del Cabo C.C.Invercrédito Lc 5</span><br/>
                    <span>Teléfono: (57) (5) 6602108</span><br/>
                    <span>Whatsapp: (301) 3427401</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3923.9428961193234!2d-75.5478612!3d10.4261063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f9e98238177%3A0xe738cc01ffab19d!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549333954593" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <span>Calle de las Carretas # 34-35</span><br/>
                    <span>Teléfono: (57) (5) 6602165</span><br/>
                    <span>Whatsapp: (301) 3427402</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d980.9932095654385!2d-75.5499182!3d10.42373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac2a1efd5a816337!2sCompraventas+PACTEMOS!5e0!3m2!1ses!2spe!4v1549334238857" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <span>Portal de Los Dulces</span><br/>
                    <span>Teléfono: (57) (5) 6642182</span><br/>
                    <span>Whatsapp: (301) 4690899</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.975917491086!2d-75.55167528520231!3d10.423485592561649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd85ca545176562b9!2sCompraventas+PACTEMOS!5e0!3m2!1ses!2spe!4v1549334285429" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
              </div>
            </section>
            <section id="Sabanalarga" className="offices-section">
              <h2>Sucursales en Sabanalarga</h2>

              <div className="offices-row">
                <article className="offices-item">
                  <address>
                    <h4>Bocagrande</h4>
                    <span>Cra 3. #5-187.</span><br/>
                    <span>Teléfono: (57) (5) 679900</span><br/>
                    <span>Whatsapp: (301) 2693491</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d981.0692495631791!2d-75.5581635!3d10.3995605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62fed77c76ded%3A0x15b57ad2b1a0583c!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549332912741" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <h4>Centro</h4>
                    <span>C.C. El Cañonazo Lc 7</span><br/>
                    <span>Teléfono: (57) (5) 6641747</span><br/>
                    <span>Whatsapp: (301) 4591953</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d981.0692495631791!2d-75.5581635!3d10.3995605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62fed77c76ded%3A0x15b57ad2b1a0583c!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549332912741" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <span>Calle del Cabo C.C.Invercrédito Lc 9</span><br/>
                    <span>Teléfono: (57) (5) 6643639</span><br/>
                    <span>Whatsapp: (301) 5641900</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.942896213083!2d-75.54786118520227!3d10.426106292559798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62433423449a1%3A0xb454e36780459ab1!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549333730134" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <span>Calle del Cabo C.C.Invercrédito Lc 5</span><br/>
                    <span>Teléfono: (57) (5) 6602108</span><br/>
                    <span>Whatsapp: (301) 3427401</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3923.9428961193234!2d-75.5478612!3d10.4261063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f9e98238177%3A0xe738cc01ffab19d!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549333954593" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
              </div>
            </section>

            <section id="Baranoa" className="offices-section">
              <h2>Sucursales en Baranoa</h2>

              <div className="offices-row">
                <article className="offices-item">
                  <address>
                    <h4>Bocagrande</h4>
                    <span>Cra 3. #5-187.</span><br/>
                    <span>Teléfono: (57) (5) 679900</span><br/>
                    <span>Whatsapp: (301) 2693491</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d981.0692495631791!2d-75.5581635!3d10.3995605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62fed77c76ded%3A0x15b57ad2b1a0583c!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549332912741" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
                
                <article className="offices-item">
                  <address>
                    <h4>Centro</h4>
                    <span>C.C. El Cañonazo Lc 7</span><br/>
                    <span>Teléfono: (57) (5) 6641747</span><br/>
                    <span>Whatsapp: (301) 4591953</span>
                  </address>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d981.0692495631791!2d-75.5581635!3d10.3995605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62fed77c76ded%3A0x15b57ad2b1a0583c!2sCompraventas+PACTEMOS!5e0!3m2!1sen!2spe!4v1549332912741" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </article>
              </div>
            </section>
          </div>
        </div>
      </>
    )
  }
}

export default Sucursales;