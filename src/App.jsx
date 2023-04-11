import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemlistContainer } from './components/ItemListContainer/ItemlistContainer'


function App() {
 
 return(
<>
  <NavBar />
  <ItemlistContainer greeting={"Bienvenido"}/>
</>
 )
}

export default App
