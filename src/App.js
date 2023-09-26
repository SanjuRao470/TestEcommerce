
import Home from "./pages/Home";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductDetail from "./pages/productdetail/ProductDetail";


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='productdetail' element={<ProductDetail/>} />
          


      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
