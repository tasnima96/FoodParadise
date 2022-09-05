import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import Home from '../../../Home';
import AboutUs from '../About/AboutUs';
import Contact from '../Contact/Contact';
import Locations from '../Location/Locations';
import Error from '../Error/Error';
import Signup from '../Signup/Signup';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import PrivacyPolicy from '../Footer/PrivacyPolicy';
import TermsCondition from '../Footer/TermsCondition';
import OurHistory from '../Footer/OurHistory';
import Feedback from '../Footer/Feedback';
import TeamLeaders from '../Footer/TeamLeaders';
import Cookies from '../Footer/Cookies';
import OrderSuccess from '../OrderSuccess/OrderSuccess';


const Paths = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {

  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/menu/*' element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}></Route>
            <Route path='/about/*' element={<AboutUs />}></Route>
            <Route path='/contact/*' element={<Contact />}></Route>
            <Route path='/location/*' element={<Locations />}></Route>
            <Route path='/cart/*' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}></Route>
            <Route path='/signup/*' element={<Signup />}></Route>
            <Route path='/payment/*' element={<ProcessPayment />}></Route>
            <Route path='/policy/*' element={<PrivacyPolicy />}></Route>
            <Route path='/terms/*' element={<TermsCondition />}></Route>
            <Route path='/history/*' element={<OurHistory />}></Route>
            <Route path='/feedback/*' element={<Feedback />}></Route>
            <Route path='/leaders/*' element={<TeamLeaders />}></Route>
            <Route path='/cookies/*' element={<Cookies />}></Route>
            <Route path='/ordersuccess/*' element={<OrderSuccess />}></Route>
            <Route path= '*' element={<Error />}></Route>
        </Routes>
    </div>
  )
}

export default Paths;