import './App.css'
import  NavBar  from './components/NavBar'
import Home from './components/Home'

function App() {
  

  return (
    <div>
      <header className='fixed w-full'>
        <NavBar />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </header>

    <body>
      <main>
        <Home />
        
      </main>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </body>
    </div>
  )
}

export default App
