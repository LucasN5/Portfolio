import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Home = () => {
  return (
    <div className="home h-screen ">
 
      <div className="h-screen flex flex-row justify-center gap-40 items-center">

          <div className="  flex flex-col items-center ">
            <h1 className="text-4xl">Lucas Nunes</h1>
            <h2 className=" text-text-color-purpleLight text-2xl">Desenvolvedor Front-end</h2>
          
            <ul className='flex flex-row gap-2 pr-48'>
              <a><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
              <a><li><FontAwesomeIcon icon={faSquareGithub} /></li></a>
              <a><li><FontAwesomeIcon icon={faSquareWhatsapp} /></li></a>
              <a><li></li></a>
            </ul>
          </div>

          <div>
            <img src="./assets/img/pfpPortfolioTeste.png"/>
          </div>

      </div>

    </div>
  )
}

export default Home