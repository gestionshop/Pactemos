import React, { Component } from 'react';
import Head from 'next/head';
import Top from '../components/Top';
import Footer from '../components/Footer';


class Sucursales extends Component {
  render () {
    return (
      <>
        <Head>
          <title>¿Casas de empeño o Compraventas?</title>
          <meta name="description" content="Todo lo que necesitas saber para negociar en una casa de empeño o compraventa."/>
        </Head>
        <div>
          <Top />
          <div className="container">
            <section className="offices-header">
              <h1>Noticias</h1>
              <p>Revisa nuestras últimas novedades de nuestra empresa</p>
            </section>

            <section className="news-list">
              <article className="news-item">
                <img src="/static/img/blog.jpg" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas"/>
                <div>
                  <h2>10 Preguntas frecuentes de los clientes antes negociar con una casa de empeños o compraventa.</h2>
                  <p>
                    1. ¿Qué diferencia hay entre una casa de empeño y una compraventa? Es lo mismo? <br/>
                    2. ¿Qué es un contrato con pacto de retroventa (Un empeño)?<br/>
                    3. ¿Qué se puede empeñar?<br/>
                    4. ¿Qué requisitos solicitan las casas de empeño?<br/>
                    5. ¿Por cuánto empeñan el gramo de oro?<br/>
                    6. ¿Qué garantía tengo al empeñar mis joyas de oro?<br/>
                    7. ¿Cuánto me dan por empeñar otros artículos?<br/>
                    8. ¿Qué necesito para empeñar un electrodoméstico?<br/>
                    9. ¿Cuánto tiempo tengo para retirar mi artículo?<br/>
                    10. ¿Cómo prorrogó el tiempo?<br/>
                  </p>
                  <h2>1. ¿Qué diferencia hay entre una casa de empeño y una compraventa? ¿Es lo mismo?</h2>
                  <p>
                    La línea que divide estos dos términos es mínima pero es importante aclarar que hay una
                    diferencia. En las casas de empeño se obtiene un préstamo de dinero a cambio de una
                    garantía en este caso una joya o artículo. Sin embargo en la compraventa, usted realiza un
                    contrato de venta con pacto de retroventa. Cabe aclarar que en las siguientes preguntas
                    utilizaremos el término “empeñar” por ser más común para todos pero debe ser claro que en
                    compraventas Pactemos, realizarás un contrato de venta con pacto de retroventa.
                  </p>
                  <h2>2. ¿Qué es un contrato de venta con pacto de retroventa?</h2>
                  <p>
                    En este tipo de contrato, el cliente vende su artículo pero se establece su derecho de
                    recomprarlo. Para esto, se pacta un plazo y un precio de retroventa, en caso de
                    vencimiento del plazo sin ejercer el derecho de retroventa, la compraventa puede
                    disponer del artículo para venderlo a otro cliente.
                  </p>
                  <h2>3. ¿Qué se puede empeñar?</h2>
                  <p>
                    En Compraventas Pactemos recibimos gran variedad de artículos, los cuales deben
                    encontrarse en buen estado.
                  </p>
                  <h2>4. ¿Que requisitos solicitan las casas de empeño?</h2>
                  <p>
                    Para realizar un “empeño” solo necesitarás el artículo y tu documento de identidad.
                  </p>
                  <h2>5. ¿Por cuanto empeñan el gramo de oro?</h2>
                  <p>
                    Muchos clientes preguntan ¿Cuánto me dan por un anillo de oro? O ¿en cuánto empeñan esta
                    cadena de oro? Lo cierto es que para poder realizar la valoración es necesario conocer las
                    características de la joya tales como: peso, tipo de oro (nacional, italiano, 14k, 18k etc) además
                    se debe tener en cuenta el estado de las joyas, ya que en algunos casos la joya puede estar partida o con enmendaduras.
                  </p>
                  <h2>6. ¿Qué garantía tengo al empeñar mis joyas de oro?</h2>
                  <p>
                    La mejor garantía que puedes tener, es que las joyas son aseguradas por una
                    reconocida empresa de custodia de valores hasta que decidas regresar por ellas. Es un
                    servicio adicional sin ningún costo que proporciona seguridad y tranquilidad.
                  </p>
                  <h2>7. ¿Cuánto me dan por empeñar?</h2>
                  <p>
                    De igual forma que con las joyas de oro, es importante conocer las características de los
                    artículos que necesitas “empeñar”, para esto contamos con un cotizador en línea (insertar
                    link https://compraventaspactemos.com/cotizar/) en el que podrás ingresar los datos del
                    artículo y te contactaremos para confirmar cuánto puedes recibir.
                  </p>
                  <h2>8. ¿Qué necesito para empeñar un electrodoméstico?</h2>
                  <p>
                    Si tu interés es “empeñar un televisor”, una herramienta o un portátil, solo debes acercarte a
                    una de nuestras sucursales (https://compraventaspactemos.com/sucursales/) con tu artículo
                    y tu documento de identificación, recuerda que puedes solicitar la valoración previa a través
                    de cotizador virtual.
                  </p>
                  <h2>9. ¿Cuánto tiempo tengo para retirar mi artículo?</h2>
                  <p>
                    En Compraventas PACTEMOS el tiempo es tuyo, tu prórrogas el tiempo hasta cuando lo
                    decidas, la única condición es que debes hacerlo mensualmente.
                  </p>
                  <h2>10. ¿Como prorrogo el tiempo?</h2>
                  <p>
                    Para ampliar el tiempo de tu contrato solo debes pagar el precio de la prorroga
                    mensualmente. La prorroga es el pago mensual que debes hacer para mantener tu contrato
                    activo. Esto dependerá del valor del “contrato que realices” por ejemplo: sí el contrato es por
                    valor de $100.000 deberás cancelar $10.000 para prorrogar el tiempo.
                  </p>

                </div>
              </article>

              {/* <article className="news-item">
                <img src="https://picsum.photos/600/300/?gravity=east" alt="Noticia img"/>
                <div>
                  <h2>Noticia importante</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel beatae, quia nam quisquam sequi quibusdam adipisci non neque! Blanditiis nisi iste doloribus placeat natus. Adipisci, nostrum nam. Temporibus, eaque?</p>
                </div>
              </article> */}
            </section>
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

export default Sucursales;