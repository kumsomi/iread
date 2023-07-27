import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./component";
import { Home } from "./page/home";
import { Login } from "./page/auth/login";
import { SignUp } from "./page/auth/signup";
import { ProductListing } from "./page/productListing";
import { Cart } from "./page/Cart";
import { Wishlist } from "./page/wishlist";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
