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
        </Head>
        <body>
          <Main />
          <NextScript />

            <script dangerouslySetInnerHTML={{__html: `type="text/javascript"
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/5c8d1ca4c37db86fcfce3505/default';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })()`}}/>
              
        </body>
      </html>
    )
  }
}
