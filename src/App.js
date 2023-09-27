

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductDetail from "./pages/productdetail/ProductDetail";

// import footer from "./components/footer/footer"
import Home from "./pages/home/Home";
import Checkout from './pages/checkout/Checkout';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/productdetail' element={<ProductDetail/>} />
        <Route path='/checkout' element={<Checkout/>} />
          


      </Routes>
      </BrowserRouter>
     
      {/* <footer/> */}
     <Home/>
    </div>
  );
}

export default App;
