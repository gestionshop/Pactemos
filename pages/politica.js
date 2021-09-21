
const style = {
  container: {
    'padding-top': '32px',
    'padding-bottom': '32px'
  },
  containerParrafo: {
    'margin-bottom': '16px'
  }
}

const Politica = () => {
  return (
    <div className="container" style={style.container}>
      <div>
        <h1>
          Política de tratamiento de protección de datos Personales
        </h1>
      </div>

      <div style={style.containerParrafo}>
        Para SEVEN COMPANY SAS, razón social de la marca PACTEMOS, su privacidad es muy importante. La satisfacción de nuestros clientes es nuestro principal propósito y por eso, nos aseguramos de que su experiencia con nosotros, sea segura y excepcional.

        <br />
        <br />

        Por tal motivo y conforme a la ley 1581 de 2012, el decreto reglamentario 1377 de 2013, la circular externa 002 de 2015 expedida por la superintendencia de industria y comercio, les presentamos el aviso de privacidad que establece los términos y condiciones en virtud de los cuales SEVEN COMPANY SAS con Nit 900581067-1 y con domicilio principal en la ciudad de Cartagena, realizará el tratamiento de sus datos personales
      </div>

      <h2>Recolección de información</h2>

      <div style={style.containerParrafo}>
        Cuando visita nuestro sitio o utiliza nuestros servicios, puede decidir proporcionarnos su información personal. En caso de hacerlo debe saber que recibimos y almacenamos su información personal y que también podemos recopilar información automáticamente de usted como: Información recopilada a través de cookies, información del dispositivo y del navegador, interacción con páginas, entre otros.

        <br />
        <br />

        Este tipo de información puede ser utilizada para fines de marketing que además permitan brindarle una comunicación personalizada, esto incluye proporcionar contenido y publicidad personalizada que puede estar en nuestro sitio, otros sitios web, aplicaciones o dispositivos móviles, u otros canales (ya sea en línea o fuera de línea).

        <br />
        <br />

        Además será de gran ayuda para comprender los datos demográficos, preferencias, intereses y comportamiento de nuestros clientes y de esta forma poder mejorar su experiencia.

        <br />
        <br />

        Cuando usted decide enviar una solicitud de cotización en línea, usted proporciona:

        <ul>
          <li>Su nombre completo</li>
          <li>Su número de teléfono</li>
          <li>Su correo electrónico</li>
        </ul>

        Estos datos podrán ser utilizados para confirmarle la valoración y realizar seguimiento de su solicitud.

        <br />

        Al marcar “Acepto política de tratamiento de datos” estará declarando conocer y aceptar plenamente esta política. En caso de no aceptarla, no podrá enviar la solicitud.

      </div>

      <h2>¿Cómo acceder y actualizar su información?</h2>

      <div style={style.containerParrafo}>
        Para rectificar y revocar cierta información personal puede comunicarse con nosotros como se indica a continuación.
        Correo electrónico: mercadeo@pactemos.co
      </div>

      <h2>¿Cómo radicar una PQRS?</h2>

      <div style={style.containerParrafo}>
        Para la radicación de peticiones, quejas, reclamos y/o sugerencias puede:
        Enviar un correo a sugerenciasyquejas@pactemos.co
        O ingresar al link http://www.pactemos.co/kawak/pqrs/pqrs_index.php
        Las PQRS serán respondidas entre 3 y 5 días hábiles.
      </div>

      <h2>Vigencia y actualización de la política</h2>

      <div style={style.containerParrafo}>
        La presente política rige a partir del 10 de mayo de 2021.
        SEVEN COMPANY SAS se reserva el derecho de modificar estos términos con el fin de adecuarla a los nuevos requisitos legales.
      </div>
    </div>
  )
}

export default Politica
