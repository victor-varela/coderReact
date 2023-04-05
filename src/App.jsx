import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemlistContainer } from './components/ItemlistContainer'

function App() {
 
 return(
<>
  <NavBar />
  <ItemlistContainer greeting={"Empieza a Comprar"}/>


</>



 )
}

export default App
