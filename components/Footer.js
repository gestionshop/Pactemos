const Footer = () => (
  <div>
    <div className="Footer-info">
      <div>
        <a href="/">
          <img className="Top_logo" src="/static/img/logo.png" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas" /> 
        </a>
      </div>
      <div>
        <h4 className="Footer-info-title">Contactos</h4>
        <p><strong>Email:</strong> asesorvirtual.pactemos@gmail.com</p>
        {/* <p><strong>Celular:</strong> 301 2693491 - 301 5371656 </p> */}
        <p><strong>Whatsapp:</strong> <a href="https://wa.me/573012693491" target="_blank">(301) 2693491</a></p>
        {/* <p><strong>Whatsapp:</strong> <a href="https://wa.me/573009048675" target="_blank">(300) 9048675</a></p> */}
      </div>
      <div>
        <h4 className="Footer-info-title">Vinculos</h4>

        <p><a href="/sucursales">Sucursales</a></p>
        <p><a href="/noticias">Noticias</a></p>
        <p><a href="/cotizar">Cotizar en linea</a></p>
        <p><a href="/politica" target="_blank">Politica de tratamiento de datos</a></p>
        <p><a href="https://kawak.com.co/pactemos/pqrs/pqrs_index.php" target="_blank">Atención al cliente - PQRS</a></p>
      </div>
    </div>
    <footer className="Footer">
      <span>Pactemos &#169; 2021 - Derechos Reservados</span>
      <div>
        <a className="Footer-link" href="https://www.facebook.com/compraventaspactemosdineroinmediato" target="_blank">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg> */}
        <img src="/static/img/facebook.svg" width="24" height="24" viewBox="0 0 24 24" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas" />
        </a>
        <a className="Footer-link" href="https://www.youtube.com/channel/UCzHdCeX3296DrThfxTdsxtQ" target="_blank">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z"/></svg> */}
        <img src="/static/img/youtube.svg" width="24" height="24" viewBox="0 0 24 24" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas" />
        </a>
        <a className="Footer-link" href="https://www.instagram.com/compraventaspactemos/" target="_blank">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg> */}
        <img src="/static/img/instagram.svg" width="24" height="24" viewBox="0 0 24 24" alt="compraventas pactemos, casas de empeño, compraventas en cartagena, compraventas en santa marta, comprayventas" />
      </a>
      </div>
    </footer>
  </div>
)

export default Footer



