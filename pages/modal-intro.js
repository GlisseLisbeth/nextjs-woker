import Link from "next/link";

export default function ModalIntro() {
  return (
    <div className="hero">
      <div className="main-bg">
        <img className="bg-img" src="./assets/images/background.svg" />
        <img className="header-img" src="./assets/images/header.svg" />
        <img className="footer-img" src="./assets/images/footer.svg" />
      </div>
      <main>
        <div className="container-close">
          <Link href="/">
            <img className="" src="./assets/ico/close.svg" />
          </Link>
          <hr />
        </div>
        <div className="container-body">
          <img className="logo" src="./assets/images/logo.svg" />
        </div>
        <div className="container-header">
          <h1>Respaldo</h1>
          <span>LEGAL INMEDIATO</span>
        </div>
        <div className="container-msg">
          <span>
            El cambio comienza por iniciativa propia, depende de nosotros mismos
            convivir en una sociedad justa, que respete y valore la libertad de
            todo ser vivo.
          </span>
        </div>
        <div className="container-contact">
          <span>¿ALGÚN PROBLEMA</span>
          <span>CONTACTA ABOGADOS AL INSTANTE</span>
          <span>LAS 24 HS. DEL DÍA</span>
        </div>
        <div className="container-web">
          <span>Desde nuestra Web</span>
          <img className="search" src="./assets/ico/search.svg" />
          <img className="device" src="./assets/images/device.svg" />
        </div>
        <div className="container-slider">
          <div className="slider">
            <div className="slides">
              <div name="slide-1" id="slide-1">
                <div className="box-slider">
                  <div className="container-header">
                    <h1>Acceso Rápido</h1>
                    <span>INGRESA FÁCILMENTE CON TUS REDES SOCIALES</span>
                  </div>
                  <img className="logo" src="./assets/images/slide-1.svg" />
                </div>
              </div>
              <div className="box-slider">
                <div name="slide-2" id="slide-2">
                  <div className="container-header">
                    <h1>Fácil de Usar</h1>
                    <span>SELECCIONA LA CATEGORÍA LEGAL QUE DESEA RESOLVER Y VISUALIZAR RESULTADOS</span>
                  </div>
                  <img className="logo" src="./assets/images/slide-2.svg" />
                </div>
              </div>
              <div className="box-slider">
                <div name="slide-3" id="slide-3">
                  <div className="container-header">
                    <h1>Contacta y Coordina</h1>
                    <span>CONOCE PERFILES DE ABOGADOS, ANALIZA SU EXPERIENCIA PROFESIONAL Y CONTÁCTALOS FÁCILMENTE</span>
                  </div>
                  <img className="logo" src="./assets/images/slide-3.svg" />
                </div>
              </div>
            </div>
          </div>  
        </div>
        <footer className="container-footer">
          <div className="copyright">
            <span>PRODUCTO CREADO Y DESARROLLADO EXCLUSIVAMENTE POR </span>
            <span>TOMI - CIBERMARKETING - SE RESERVA TODOS LOS DERECHOS.</span>
          </div>
          <div className="container-tomi">
            
            <div className="contact-tomi">
              <img
                className="logo-tomi"
                src="./assets/images/logo-tomi.svg"
              />
              <h1>CONTÁCTANOS</h1>
              <span>993744958 / HOLA@TOMI.PE</span>
            </div>
            <div className="footer-tomi">
              <div className="container-link">
                <Link href="/modal-intro">
                  <a>Ver Términos y Condiciones</a>
                </Link>
                <hr/>
              </div>
              <div className="container-link">
                <Link href="/modal-intro">
                  <a>Ver Políticas de Privacidad</a>
                </Link>
                <hr/>
              </div>
              <div className="address">
                <span>Av. Camino Real Nro. 395</span>
                <span>San Isidro, Lima 27, Perú</span>
              </div>
              <div className="icon-social">
                <Link href="/modal-intro">
                  <a><img className="social facebook" src="./assets/ico/facebook.svg" /></a>
                </Link>
                <Link href="/modal-intro">
                  <a><img className="social" src="./assets/ico/instagram.svg" /></a>
                </Link>
                <Link href="/modal-intro">
                  <a><img className="social" src="./assets/ico/linkedin.svg" /></a>
              </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <style jsx>{`
        * {
          border-color: transparent;
        }
        .main-bg {
          position: fixed; 
          top: -50%; 
          left: -50%; 
          width: 200%; 
          height: 200%;
          z-index: -1;
        }
        .bg-img {
          position: absolute; 
          top: 0; 
          left: 0; 
          right: 0; 
          bottom: 0; 
          margin: auto; 
          min-width: 50%;
          min-height: 50%;
        }
        .header-img{
          left: 0;
          margin: auto; 
          min-height: 50%;
          min-width: 100%;
          opacity: 0.3;
          position: absolute; 
          right: 0;
          top: 0; 
        }
        .footer-img {
          bottom: 0; 
          left: 0; 
          margin: auto; 
          min-width: 100%;
          min-height: 80%;
          opacity: 0.3;
          position: absolute; 
        }
        .container-header{
          margin: auto;
          width: 100%;
          padding: 30px 0;
          text-align: center;
        }
        .container-footer{
          border-top: 2px solid #FFFF00;
          padding: 20px;
          margin-top: 20px;
        }
        .container-contact {
          display:flex;
          flex-direction: column;
          width: 70%;
          margin: 50px auto;
          text-align: center;
        }
        .container-contact span {
          font-weight: 300;
        }
        .container-contact span:first-child, .container-contact span:last-child {
          font-weight: 500;
        }
        .logo, .search {
          margin: auto;
          width:60%;
        }
        h1{
          color: white;
          font-family: Inkfree;
          font-size: 0.9em;
          font-weight: 600;
        }
        span{
          color: white;
          font-family: Tomy;
          font-size: 0.9em;
          font-weight: 300;
        }
        a{
          color: white;
          font-size: 9px;
          margin: 10px 0 2px;
        }
        .container-button{
          margin: auto;
          position: relative;
        }
        .button-index {
          align-items: center;
          border: 1px solid #FFFF00;
          border-radius: 50px;
          display: flex;
          flex-direction: column;
          height: 100px;
          justify-content: space-around;
          padding: 5px 0;
          width: 55px;
        }
        .button-text {
          color: white;
          font-family: Tomy;
          font-size: 7px;
          font-weight: 100;
          margin: auto 10px;
          text-align: center;
        }
        .footer-tomi .container-link {
          overflow: hidden;
          width: 125px;
          margin: auto;
          border-color: #e2e8f0;
        }
        .footer-tomi .container-link hr {
          width: 100%;
          border-color: #e2e8f0;
        }
        .footer-tomi .container-link a {
          border-color: #e2e8f0;
        }
        .img-intro-line{
          width: 10px;
          height: auto;
        }
        .img-intro-arrow {
          width: 25px;
          height: auto;
        }
        .container-close {
          border-color: transparent;
          margin: 50px 30px;
        }
        .container-close img{
          border-color: transparent;
        }
        .container-msg {
          width: 80%;
          margin: auto;
          text-align: center;
        }
        .container-msg span{
          color: #FFFF00;
          font-family: Tomy;
          font-size: 14px;
          font-weight: 300;
          line-height: 1;
        }
        .container-web {
          text-align: center;
        }
        .container-web span{
          color: #FFFF00;
        }
        .container-web .device {
          margin: 30px auto;
          width: 80%;
        }
        .container-tomi{
          display: flex;
          width: 100%;
          text-align: center;
          border-top: 1px solid white;
          padding: 10px;
        }
        .contact-tomi, footer-tomi {
          width: 50%;
          padding: 10px;
        }
        .copyright {
          color: white;
          font-family: Tomy;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 1px;
          text-align: center;
          padding-bottom: 10px;
        }
        .contact-tomi h1 {
          color: white;
          font-family: 'Tomy';
          font-size: 9px;
          font-weight: 100;
          padding-top: 20px;
          line-height: 0.1;
        }
        .contact-tomi span {
          color: white;
          font-family: 'Tomy';
          font-size: 10px;
          font-weight: 400;
        }
        .social {
          width: 10px;
          height: auto;
        }
        .social.facebook {
          width: 5px;
        }
        .icon-social {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
        .icon-social a {
          padding: 10px 0 10px 10px;
        }
        .address {
          padding-top: 10px;
        }
        .address span {
          display: block;
          color: white;
          font-family: 'Tomy';
          font-size: 9px;
          font-weight: 100;
          line-height: 1.2;
          text-align: right;
        }
      `}</style>
    </div>
  );
}
