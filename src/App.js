import React, { useState, useEffect } from 'react';
import data from './components/back/Data/Data';
import Navbar from './components/front/Navbar/Navbar';
import Paths from './components/front/Path/Paths';
// import {Routes, Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/front/Footer/Footer';


const App = () => {

  const {productItems} = data; 

  // To get data from local storage
  

  const getLocalItems = () => {
  let items = localStorage.getItem('items');
  console.log(items);

  if (items) {
      return JSON.parse(localStorage.getItem('items'));
  } else {
      return [];
  }
}

const [cartItems, setCartItems] = useState(getLocalItems());

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...productExist, quantity: productExist.quantity + 1}: item));
    } 
    else{
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  };


  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else {
      setCartItems(cartItems.map((item) => item.id === product.id 
      ? {...productExist, quantity: productExist.quantity -1} : item));
    }
  };


  // add data to local storage

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cartItems))
}, [cartItems]); 


  const handleCartClearance = () => {
    setCartItems([]);
  }


  return (
    <div>
      <Router>
        <Navbar cartItems={cartItems}/>
        <Paths 
        productItems={productItems} 
        cartItems={cartItems} 
        handleAddProduct={handleAddProduct} 
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance} />
        <Footer />
      </Router>
    </div>
  )
}

export default App