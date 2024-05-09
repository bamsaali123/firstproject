
import logo from './logo.svg';
import './App.css';
import Navbar from'./Copmonent/Navbar';
import Slider from './Copmonent/Slider';
import Productlist from './Copmonent/Productlist';
import { Routes,Route } from 'react-router-dom';
import About from './Copmonent/About';
import ProductDetails from './Copmonent/ProductDetails';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"element={<>
        <Slider/>
        <Productlist/>
        </>} />

        <Route path="about" element= {<About />}/>
        <Route path="product/:productId" element= {<ProductDetails />}/>
      </Routes>
        
      
    </div>
  );
}

export default App;
