import { BrowserRouter,Routes,Route } from 'react-router-dom'
import  LayoutPage  from '../src/components/layout/LayoutPage';
import Home from "./pages/home/Home";
import Checkout from './pages/checkout/Checkout';
import ProductDetail from "./pages/productdetail/ProductDetail";
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/productdetail' element={<ProductDetail/>} />
        {/* <Route path='/checkout' element={<Checkout/>} /> */}
          


      <Route path="/" element={<LayoutPage />}>
        <Route index element={<Home/>} />
        <Route path='productdetail' element={<ProductDetail/>} />
          <Route path='login' element={<Login/>} /> 
            <Route path='signup' element={<Signup/>} /> 
            <Route path='checkout' element={<Checkout/>} /> 
        {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
