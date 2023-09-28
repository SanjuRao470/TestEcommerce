import {Routes,Route } from 'react-router-dom'
import  LayoutPage  from '../src/components/layout/LayoutPage';
import Home from "./pages/home/Home";
import ProductDetail from "./pages/productdetail/ProductDetail";
import ProductList from "./pages/productlist/ProductList";
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<Home/>} />
        <Route path='productdetail' element={<ProductDetail/>} />
          <Route path='login' element={<Login/>} /> 
            <Route path='signup' element={<Signup/>} /> 
            <Route path='productlist' element={<ProductList/>} /> 
        {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
