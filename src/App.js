import './App.css';
import { Routes, Route, useNavigate, createSearchParams } from 'react-router-dom';
import { useCart } from "./component/ContextApi/Cart";

import Navbar from "./component/Navbar/Nav/Navbar.jsx";

import Home from './component/Home/Sections/Home.jsx'
import Product from './component/Home/Product/products.jsx';
import About from "./component/Navbar/AboutUs/AboutUs.jsx";
import Login from './component/Navbar/Login/Login.jsx';
import Signup from './component/Navbar/Signup/Signup.jsx';
import CartPage from './component/Navbar/CartPg/CartPage.jsx';
import PageNotFound from "./component/Navbar/PageNotFound/PageNotFound.jsx";
import SingleProduct from './component/Home/SingleProduct/SingleProduct.jsx';

import Footer from './component/footer/MainFooter/Footer.jsx';
import Carrer from './component/footer/Carerrs $ Contact/Carrer.jsx';
import Contact from './component/footer/Carerrs $ Contact/ContactUs.jsx';
import Privacy from './component/footer/Policy/Privacy.jsx';
import ReturnPolicy from './component/footer/Policy/ReturnPolicy.jsx';
import Terms from './component/footer/Policy/TermUse.jsx';
import Payment from './component/footer/Help/Payments.jsx';
import Shipping from './component/footer/Help/Shipping.jsx';

function App() {
  const navigate = useNavigate();
  const onSearch = (searchQuery) => {
    navigate(`/product/?${createSearchParams({ q: searchQuery })}`)
  }

  const { cartItemCount } = useCart();
  return (
    <>
      <Navbar onSearch={onSearch} cartItemCount={cartItemCount()} />

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/CartPage" element={<CartPage />}></Route>
        <Route path="/SingleProduct/:productId" element={<SingleProduct />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
        <Route path="/Carrer" element={<Carrer />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Privacy" element={<Privacy />}></Route>
        <Route path="ReturnPolicy" element={<ReturnPolicy />}></Route>
        <Route path="/Terms" element={<Terms />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>
        <Route path="/Shipping" element={<Shipping />}></Route>

      </Routes>
      <Footer />

    </>
  );
}

export default App;

