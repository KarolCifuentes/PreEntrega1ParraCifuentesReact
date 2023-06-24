import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // React Bootstrap import bootstrap
import Header from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <ItemListContainer texto="Mensaje"/>
        <h3>Catalogo</h3>
      </div>
    </>
  )
}

export default App
