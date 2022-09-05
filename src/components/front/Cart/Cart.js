import React from 'react';
import { useNavigate} from 'react-router-dom';

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {

    const total = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

    let shipping = 0.0;
    if(total > 35) {
    shipping = 0.00;
  }
    else if(total > 0) {
    shipping = 6.99;
  }

  const tax = total / 10;
  const totalPrice = total + shipping + tax;

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  }


// using useNavigate instead of useHistory
//   const history = useHistory();
//   const handleProceedCheckout = () => {
//     history.push('/shipment/*');
//   }


  // switch to signup page
  const navigate = useNavigate();

  const handleProceedCheckout = () => {
    navigate('/signup/');
  }

  return (
    <div className='cart-items'>
        <h2 className='cart-items-header'>Items Ordered : {cartItems.length}</h2>

        <div className='clear-cart'>
            {cartItems.length >=1 && (
                <button className='clear-cart-button' onClick={handleCartClearance}>Clear Cart</button>
            )}
        </div>

        {cartItems.length === 0 && (<div className='cart-items-empty'>No Items Are Added In This Cart!</div>)}

        

        <div>
            {cartItems.map((item) => (
                <div key={item.id} className='cart-items-list'>
                    <img className='cart-items-image' src={item.image} alt={item.name}></img>

                    <div className='cart-items-name'>{item.name}</div>
                    
                    <div className='cart-items-function'>
                        <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                        <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
                    </div>

                    <div className='cart-items-price'>{item.quantity} * ${item.price}</div>
                </div>
            ))}
        </div>

        <div className='cart-items-total-price-name'>
            <div>
                <p><small>Shipping Cost: ${shipping}</small></p>
                <p><small>Tax: ${formatNumber(tax)}</small></p>
                <p>Total Price: ${formatNumber(totalPrice)}</p>
                <br></br>
                <button className='checkout-button' onClick={handleProceedCheckout}>Proceed Checkout</button>
            </div>
            
            {/* Total Price
            <div className='cart-items-total-price'>${totalPrice}</div> */}
        </div>
    </div>
  )
}

export default Cart;