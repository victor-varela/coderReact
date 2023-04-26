import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemlistContainer } from './components/ItemListContainer/ItemlistContainer'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'


function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemlistContainer greeting={"HOME"} />} />
        <Route path='/categoria/:cid' element={<ItemlistContainer  />} />
        <Route path='/detail/:pid' element={<ItemDetailContainer />} />
        <Route path='*' element={<Navigate to="/" />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
  )
}

export default App
