import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

const Home = () => {
  return (
    <div className="home h-screen">
 
      <div className="">

          <div className="  flex flex-col items-center justify-center">
            <h1 className="text-4xl">Lucas Nunes</h1>
            <h2 className=" text-text-color-purpleLight text-2xl">Desenvolvedor Front-end</h2>
          
            <ul>
              <a><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
              <a><li><FontAwesomeIcon icon={faSquareGithub} /></li></a>
              <a><li><FontAwesomeIcon icon={faSquareWhatsapp} /></li></a>
              <a><li><FontAwesomeIcon icon={faFilePdf} /></li></a>
            </ul>
          </div>

          <div>
            <img/>
          </div>

      </div>

    </div>
  )
}

export default Home