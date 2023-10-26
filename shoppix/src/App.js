import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import ShopContextProvider from './context/Shop-context';
import About from './pages/about/About';
import Main from './pages/main/Main';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/shop' element={<Shop/>}/>
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
