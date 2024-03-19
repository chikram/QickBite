import NavBar from "./components/Nav/NavBar";
import { Route, Routes } from 'react-router-dom'
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
function App() {
  return (
    <div className="container-fluid app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />

      </Routes>
    </div>


  );
}

export default App;
