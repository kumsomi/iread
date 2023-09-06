import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./component";
import { Home } from "./page/home";
import { Login } from "./page/auth/login";
import { SignUp } from "./page/auth/signup";
import { Cart } from "./page/Cart";
import { Wishlist } from "./page/wishlist";
import { Products } from "./page/products";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
