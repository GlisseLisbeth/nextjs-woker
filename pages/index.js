import Link from 'next/link'

export default function Index() {
  return (
    <div className="hero">
      <div className="main-bg">
        <img className='bg-img' src='./assets/images/background.svg' />
        <img className='header-img' src='./assets/images/header.svg' />
        <img className='footer-img' src='./assets/images/footer.svg' />
      </div>
      <main>
        <div className="container-header">
          <h1>Respaldo</h1>
          <span>LEGAL INMEDIATO</span>
        </div>
        <div className="container-body">
          <img className='logo' src='./assets/images/logo.svg' />
        </div>
        <footer className="container-footer">
          <div className="contact">
            <span>CONTACTA ABOGADOS AL INSTANTE</span>
            <div className="container-link">
              <Link href="/modal-intro">
                <a>¡Hey, conócenos!</a>
              </Link>
              <hr/>
            </div>
          </div>
          <div className="container-button">
            <div className="button-index">
            <img className='button-on img-intro-line' src='./assets/ico/on.svg' />
            <span className="button-text">Desliza para iniciar</span>
            <img className='button-off img-intro-arrow' src='./assets/ico/arrow.svg' />
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
          margin: auto;
          width: 100%;
          padding: 65px 0;
          text-align: center;
        }
        .container-footer{
          bottom: 0;
          color: white;
          display: flex;
          position: absolute;
          width: 100%;
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
        .container-link {
          border-color: #e2e8f0;
          cursor: pointer;
          overflow: hidden;
          width: 77px;
        }
        .container-link hr {
          width: 100%;
          border: 1px solid #e2e8f0;
        }
        .img-intro-line{
          width: 10px;
          height: auto;
        }
        .img-intro-arrow {
          width: 25px;
          height: auto;
        }
      `}</style>
    </div>
  )
}