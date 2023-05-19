import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemlistContainer } from "./components/ItemListContainer/ItemlistContainer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/CartContainer/Cart";
import {  CartContextProvider } from "./context/CartContext";
import { Footer } from "./components/Footer/Footer";
import CheckOut from "./components/CheckOut/CheckOut";


function App() {
  return (
    <CartContextProvider >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemlistContainer greeting={"HOME"} />} />
          <Route path="/categoria/:cid" element={<ItemlistContainer />} />
          <Route path="/detail/:pid" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartContextProvider>
  );
}

export default App;
