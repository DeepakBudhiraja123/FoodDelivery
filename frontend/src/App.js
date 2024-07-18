import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Login from './components/Login/Login';
import Verify from './Pages/Verify/Verify';
import Myorders from './Pages/Myorders/Myorders';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <>
    {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}

    <div className='app'>
      <NavBar setShowLogin={setShowLogin} />
      <Routes>
        <Route exact path = "/" element = {<Home/>} />
        <Route path = "/cart" element={<Cart/>} />
        <Route path = "/order" element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
