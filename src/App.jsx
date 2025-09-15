import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <>
      <div className="">
        {showLoginForm && <LoginPopup setShowLoginForm={setShowLoginForm} />}
        <Navbar setShowLoginForm={setShowLoginForm} />
        <main className="mt-[8rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            {/* <Route path="/contact-us" element={<Home />} /> */}
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
