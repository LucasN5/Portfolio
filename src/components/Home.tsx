import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

const Home = () => {
  return (
    <div className="home h-screen bg-body-color-blackDark">
 
      <div className="h-screen flex flex-row justify-center gap-40 items-center">

          <div className="  flex flex-col items-center gap-1">
            <h1 className="text-5xl text-Whiter">Lucas Nunes</h1>
            <h2 className=" text-text-color-purpleLight text-3xl">Desenvolvedor Front-end</h2>
          
            <ul className='flex flex-row gap-3 pr-28 pt-2'>
              <a><li><FontAwesomeIcon icon={faLinkedinIn }  style={{color: "#D740E4",}} size="xl" className=' ring-2 ring-borderHeader p-1.5 px-2 w-7 h-7 rounded-md '/></li></a>
              <a><li><FontAwesomeIcon icon={faGithub} style={{color: "#D740E4",}}  size="xl" className=' ring-2 ring-borderHeader p-1.5  px-2 w-7 h-7 rounded-md'/></li></a>
              <a><li><FontAwesomeIcon icon={faWhatsapp} style={{color: "#D740E4",}}  size="xl" className=' ring-2 ring-borderHeader p-1.5 px-2 w-7 h-7 rounded-md' /></li></a>
              <a><li><FontAwesomeIcon icon={faFile} style={{color: "#D740E4",}}  size="xl" className=' ring-2 ring-borderHeader p-1.5 px-2 w-7 h-7 rounded-md'/></li></a>
            </ul>
          </div>

          <div>
            <img src="./src/assets/img/pfpPortfolioTeste.png" className="w-72 h-72"/>
          </div>

      </div>

    </div>
  )
}

export default Home