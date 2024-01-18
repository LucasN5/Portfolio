import './App.css'
import  NavBar  from './components/NavBar'
import Home from './components/Home'

function App() {
  

  return (
    <div>
      <header className='fixed w-full'>
        <NavBar />
      </header>


      <main>
        <Home />
        
      </main>
    </div>
  )
}

export default App
