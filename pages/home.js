import Link from 'next/link'

export default function Home() {
  return (
    <div className="hero">
      <div className="main-bg">
        <img className='bg-img' src='./assets/images/background.svg' />
        <img className='header-img' src='./assets/images/header_home.svg' />
      </div>
      <main>
        <div className="container-header">
          <img className='logo' src='./assets/ico/logo-ico.svg' />
          <div className="container-available">
            <span>145</span>
            <img src='./assets/ico/available.svg' />
            <span>Abogados <p>disponibles</p></span>
          </div>
        </div>
        <div className="container-contact">
          <span>Selecciona una categoría legal</span>
          <span>para visualizar los resultados</span>
        </div>
        <footer className="container-footer">
          <div className="container-slider">
            <div className="slider">
              <div className="slides">
                <div name="slide-1" id="slide-1">
                  <div className="box-slider">
                    <img className="bg-slide" src="./assets/images/category.svg" />
                  </div>
                </div>
                <div className="box-slider">
                  <div name="slide-2" id="slide-2">
                    <img className="bg-slide" src="./assets/images/category.svg" />
                  </div>
                </div>
                <div className="box-slider">
                  <div name="slide-3" id="slide-3">
                    <img className="bg-slide" src="./assets/images/category.svg" />
                  </div>
                </div>
              </div>
            </div>  
          </div>       
        </footer>
      </main>
      <style jsx>{`
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
          min-height: 60%;
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
          min-height: 65%;
          opacity: 0.3;
          position: absolute; 
        }
        .container-header{
          display: flex;
          justify-content: space-around;
          padding: 20px;
        }
        .container-header img, .container-header span:first-child {
          display: inline;
        }
        .container-header span:last-child {
          display: block;
        }
        .container-body {
          display: flex;
          justify-content: space-around;
        }
        .container-contact {
          text-align: center;
          padding-top: 50px;
        }
        .container-contact span{
          display: block;
        }
        .container-footer{
          bottom: 0;
          color: white;
          display: flex;
          position: absolute;
          width: 100%;
          flex-direction: column;
          padding: 50px;
        }
        .container-available {
          font-size: 12px;
          text-align: right; 
          width: 50%;
        }
        .container-available img{
          padding-left: 5px;
        }
        .container-available span {
          color: #FFFF00;
        }
        .contact {
          display: flex;
          flex-direction: column;
          width: 30%;
          margin: 50px auto;
        }
        .contact span {
          color: white;
          font-family: Tomy;
          font-size: 0.7em;
          font-weight: 400;
        }
        .logo {
          margin: auto;
          width:40%;
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
          padding-top: 20px;
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
        .container-link {
          border-color: #e2e8f0;
          cursor: pointer;
          overflow: hidden;
          width: 100%;
          padding-top: 20px;
        }
        .container-link img {
          margin: auto;
        }
        .img-intro-line{
          width: 10px;
          height: auto;
        }
        .img-intro-arrow {
          width: 25px;
          height: auto;
        }
        .login {
          text-align: center;
        }
        .login span {
          font-weight: 500;
          padding: 5px;
        }
        .bg-slide {
          margin: auto;
          width:90%;
        }
        .slides > div {
          width: 80%;
        }
      `}</style>
    </div>
  )
}