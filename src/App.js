

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductDetail from "./pages/productdetail/ProductDetail";

// import footer from "./components/footer/footer"
import Home from "./pages/home/Home";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='productdetail' element={<ProductDetail/>} />
          


      </Routes>
      </BrowserRouter>
     
      {/* <footer/> */}
     <Home/>
    </div>
  );
}

export default App;
