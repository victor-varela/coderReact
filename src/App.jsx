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
import CartContainer from "./components/CartContainer/CartContainer";
import {  CartContextProvider } from "./context/CartContext";
import Footer  from "./components/Footer/Footer";


function App() {
  const routes=[
      {id:"1", path:"/", element:<ItemlistContainer greeting={"HOME"}/>},
      {id:"2", path:"/categoria/:cid", element:<ItemlistContainer/>},
      {id:"3", path:"/detail/:pid", element:<ItemDetailContainer/>},
      {id:"4", path:"*", element:<Navigate/>},
      {id:"5", path:"/cart", element:<CartContainer/>}
  ]
  return (
    <CartContextProvider >
      <Router>
        <NavBar />
        <Routes>
          {routes.map(route=><Route key={route.id} path={route.path} element={route.element}/>)}
        </Routes>
        <Footer />
      </Router>
    </CartContextProvider>
  );
}

export default App;
