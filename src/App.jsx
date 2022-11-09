import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CrudApp from './componentes/CrudApp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Ejercicio Con react</h1>
    <CrudApp/>
    
    </>
  )
}

export default App
