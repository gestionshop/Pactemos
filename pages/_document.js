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
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="fb-root"></div>
          <div className="fb-customerchat"
            attribution="setup_tool"
            page_id="182612678488770"
            logged_in_greeting="¡Hola! ¿Cómo te puedo ayudar?"
            logged_out_greeting="¡Hola! ¿Cómo te puedo ayudar?">
          </div>
          <script dangerouslySetInnerHTML={{__html: `window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v3.2'
              });
            };

            (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));`}} />
        </body>
      </html>
    )
  }
}
