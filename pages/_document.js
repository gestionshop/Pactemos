import Document, { Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
          <link rel="stylesheet" href="/static/css/core.css" />
          <link href="https://fonts.googleapis.com/css?family=Rubik:300,500" rel="stylesheet" />
          <link rel="icon" href="/static/img/icon.ico" />
          <link rel="stylesheet" href="/static/css/whatsapp.css" />

          {/* <!-- Google Tag Manager --> */}
          <script dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WRKG84J');`}}/>
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
              <script src="https://kit.fontawesome.com/eb496ab1a0.js" crossorigin="anonymous"></script>
              <a href="https://wa.link/7pt4m3"
                className='btn-wsp'
                target={'_blank'}>
               <i className='fa fa-whatsapp icono'></i>
              </a>
              {/* Hola!! Estuve revisando la web de COMPRAVENTAS PACTEMOS y necesito asesoría. */}
              {/* https://api.whatsapp.com/send?phone=573012693491&text=%F0%9F%91%8B%20%20Hola!!%20Estuve%20revisando%20la%20web%20de%20*COMPRAVENTAS%20PACTEMOS*%20y%20necesito%20asesor%C3%ADa */}
              {/* https://wa.link/7pt4m3 */}

            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript dangerouslySetInnerHTML={{__html:`
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRKG84J"
               height="0" width="0" style="display:none;visibility:hidden">
              </iframe>`
            }}/>
            {/* <!-- End Google Tag Manager (noscript) --> */}

            <script dangerouslySetInnerHTML={{__html: `async src="https://www.googletagmanager.com/gtag/js?id=AW-881748292"`}}/>

            <script dangerouslySetInnerHTML={{__html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());

              gtag('config', 'AW-881748292');
              `}}
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
    )
  }
}
