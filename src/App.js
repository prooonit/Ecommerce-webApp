import React from "react";
import { BrowserRouter ,Routes,Route, useNavigate,createSearchParams} from "react-router-dom";
import NavBar from "./Nav/nav";
import Products from "./Pages/products";
import SingleProduct from "./Pages/product";
import Notfound from "./Pages/not-found";
import Cart from "./Pages/cart";
import { useCart } from "./context/cart";

function App() {
const navigate= useNavigate();
const onSearch=(searchquery)=>{
  navigate(`/?${createSearchParams({foo: searchquery})}`);
  
}
const {cartItemCount}=useCart();

  return (
   
   <div>
   
   <NavBar onSearch={onSearch} cartItemCount={cartItemCount()}/>
     <Routes>
      <Route element={<Products/>} path="/"/>
      <Route element={<SingleProduct/>} path="/product/:productId?"/>
      <Route element={<Notfound/>} path="/*"/>
      <Route element={<Cart/>} path="/cart"/>
     </Routes>
  
     </div>
  );
}

export default App;
