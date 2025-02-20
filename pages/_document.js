import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
          />
          <link rel="stylesheet" href="/static/css/core.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Rubik:300,500"
            rel="stylesheet"
          />
          <link rel="icon" href="/static/img/icon.ico" />
          <link rel="stylesheet" href="/static/css/whatsapp.css" />

          {/* <!-- Google Tag Manager --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WRKG84J');`,
            }}
          />
          {/* <!-- End Google Tag Manager --> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Chat Inicio */}
          {/* <script dangerouslySetInnerHTML={{__html: `type="text/javascript"
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/5c8d1ca4c37db86fcfce3505/default';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })()`}}/> */}
          {/* Chat Final */}

          {/* chat de whatsapp */}
          {/* <script src="https://kit.fontawesome.com/eb496ab1a0.js" crossOrigin="anonymous"></script>
              <a href="https://api.whatsapp.com/send?phone=573012693491&text=%F0%9F%91%8B%20%20Hola!!%20Estuve%20revisando%20la%20web%20de%20*COMPRAVENTAS%20PACTEMOS*%20y%20necesito%20asesor%C3%ADa" className='btn-wsp' target={'_blank'}>
               <i className='fa fa-whatsapp icono'></i>
              </a> */}
          <a
            href="https://api.whatsapp.com/send?phone=573012693491&text=%F0%9F%91%8B%20%20Hola!!%20Estuve%20revisando%20la%20web%20de%20*COMPRAVENTAS%20PACTEMOS*%20y%20necesito%20asesor%C3%ADa"
            className="btn-wsp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <svg width="30" height="30" viewBox="0 0 25 25" fill="currentColor">
              <path d="M20.4 3.5C18.2 1.3 15.2 0 12 0C5.4 0 0 5.4 0 12c0 2.1 0.5 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.6-8.4zM12 22c-1.8 0-3.5-0.5-5.1-1.4l-0.4-0.2-3.7 1 1-3.6-0.2-0.4C2.5 15.5 2 13.8 2 12 2 6.5 6.5 2 12 2c2.6 0 5 1 6.8 2.8 1.8 1.8 2.8 4.2 2.8 6.8-0.1 5.5-4.5 10-9.6 10zm5.3-7.5c-0.3-0.1-1.7-0.8-2-0.9-0.3-0.1-0.5-0.1-0.7 0.1-0.2 0.2-0.8 0.9-0.9 1.1-0.2 0.2-0.3 0.2-0.6 0.1-1.7-0.8-2.8-1.5-3.9-3.4-0.3-0.5 0.3-0.5 0.9-1.6 0.1-0.2 0-0.4 0-0.5s-0.7-1.7-1-2.3C8.9 6.6 8.6 6.7 8.4 6.7c-0.2 0-0.4 0-0.6 0s-0.5 0.1-0.8 0.3c-0.3 0.2-1 1-1 2.5s1.1 2.9 1.2 3.1c0.2 0.2 2.1 3.2 5.1 4.5 1.9 0.8 2.7 0.9 3.6 0.7 0.6-0.1 1.7-0.7 2-1.4 0.3-0.7 0.3-1.3 0.2-1.4-0.1-0.2-0.3-0.3-0.6-0.4z" />
            </svg>
          </a>
          {/* Hola!! Estuve revisando la web de COMPRAVENTAS PACTEMOS y necesito asesoría. */}
          {/* https://api.whatsapp.com/send?phone=573009048675&text=%F0%9F%91%8B%20%20Hola!!%20Estuve%20revisando%20la%20web%20de%20*COMPRAVENTAS%20PACTEMOS*%20y%20necesito%20asesor%C3%ADa */}
          {/* https://wa.link/lonao6 */}

          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRKG84J"
               height="0" width="0" style="display:none;visibility:hidden">
              </iframe>`,
            }}
          />
          {/* <!-- End Google Tag Manager (noscript) --> */}

          <script
            dangerouslySetInnerHTML={{
              __html: `async src="https://www.googletagmanager.com/gtag/js?id=AW-881748292"`,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());

              gtag('config', 'AW-881748292');
              `,
            }}
          />

          {/*
              <script dangerouslySetInnerHTML={{__html: `async src="https://www.googletagmanager.com/gtag/js?id=UA-136342870-1"`}}/>

              <script dangerouslySetInnerHTML={{__html:`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'UA-136342870-1');
                `}}
              />
            */}
        </body>
      </html>
    );
  }
}
