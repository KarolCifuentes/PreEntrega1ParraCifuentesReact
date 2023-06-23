import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // React Bootstrap import bootstrap
// import Header from './components/Navbar'// Clase 5
// import Navbar from './components/Navbar/Navbar'
import Header from './components/header/header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <h1>Hola prueba</h1>
      </div>
    </>


    // <div>
    //   {/* <Header logo="Ds"/> */}
    //   <Navbar/>
    // </div>

    // <>
    //   {/* <NavbarContainer>
    //     <h2>Logo de E-commerces</h2>
    //   </NavbarContainer> */}
    //   <Navbar />
    // </>



  )
}

export default App
