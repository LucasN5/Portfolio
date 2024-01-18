const NavBar = () => {
  return (
    
      <div className=" header-container flex flex-row justify-around  bg-body-color-blackLight  py-2 border-b-4 border-borderHeader ">
          <div>
              <img className="w-11 h-11" 
              src="./src/assets/img/20231026_213103_0000.png" 
              alt="Logo image" 
              />
          </div>


          <div className="">
              <ul className="flex gap-5 pt-2 cursor-pointer text-Whiter ">
                  <li><a>Início</a></li>
                  <li><a>Sobre mim</a></li>
                  <li><a>Projetos</a></li>
                  <li><a>Habilidades</a></li>
                  <li><a>Certificados</a></li>
                  <li><a>Contato</a></li>
              </ul>
          </div>

          <div>
              <button></button>
          </div>


          <div className="pt-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="w-11 h-6  bg-text-color-purpleDark rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-body-color-blackLight after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
          </div>

         </div>
    
  )
}

export default NavBar
