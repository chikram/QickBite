import NavBar from "./components/Nav/NavBar";
import { Route, Routes } from 'react-router-dom'
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Login from "./components/LoginModal/Login";
function App() {
  const [showLogin, setShowLogin] = useState(false);


  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="container-fluid app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />

        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;
