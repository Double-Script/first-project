import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Project/Navbar';
import Footer from './Component/Project/Footer';
import Carousel from './Component/Project/Carousel';
import Content from './Component/Project/Content';
import Content2 from './Component/Project/Content2';
import Loginpage from './Component/Project/Loginpage';
import Home from './Component/Project/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Crud from './Component/Project/Crud';
import Admin from './Component/Project/Admin';
import AddProduct from './Component/Project/AddProduct';
import AddProduct2 from './Component/Project/AddProduct2';
import AllProduct from './Component/Project/AllProduct';
import Content3 from './Component/Project/Content3';
import Products from './Component/Project/Products';
// import { Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>



      <BrowserRouter>
        <Navbar />
        {/* <Crud /> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Loginpage/>} />
          <Route path='/Admin' element={<Admin/>} />
          <Route path='/AddProduct' element={<AddProduct/>} />
          <Route path='/AddProduct2/:id' element={<AddProduct2/>} />
          <Route path='/AllProduct' element={<AllProduct/>} />
          <Route path='/Content' element={<Content/>} />
          <Route path='/Content2' element={<Content2/>} />
          <Route path='/Content3' element={<Content3/>} />
          <Route path='/products' element={<Products/>} />


          

        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  );
}

export default App;
