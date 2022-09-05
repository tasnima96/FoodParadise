import React from "react";

const Checkout = () => {
  return (
    <>
    <div className="checkout-container">
        <form action="">
        <div className="row">

            <div className="col">
                <h3 className="title">Billing Address</h3>

                <div className="input-box">
                    <span> <i class="fa fa-user"></i> Full Name </span>
                    <input type='text' placeholder='John K. Doe'></input>
                </div>

                <div className="input-box">
                    <span> <i class="fa fa-envelope"></i> Email </span>
                    <input type='email' placeholder='john@example.com'></input>
                </div>

                <div className="input-box">
                    <span> <i class="fa fa-address-card"></i> Address </span>
                    <input type='text' placeholder='542 W. 15th Street'></input>
                </div>

                <div className="input-box">
                    <span> <i class="fa fa-institution"></i> City</span>
                    <input type='text' placeholder='Santa Clara'></input>
                </div>

                <div className="flex">
                    <div className="input-box">
                        <span>State </span>
                        <input type='text' placeholder='CA'></input>
                    </div>

                    <div className="input-box">
                    <span>Zip Code </span>
                    <input type='number' placeholder='10001'></input>
                </div>
                </div>
            </div>


            <div className="col">
                <h3 className="title">Payment</h3>
                <span>Accepted Cards </span>
                <div className="icon-container input-box"> 
                <i class="fa-brands fa-cc-visa" style={{color:'navy'}}></i>
                <i class="fa-brands fa-cc-amex" style={{color:'blue'}}></i>
                <i class="fa-brands fa-cc-mastercard" style={{color:'red'}}></i>
                <i class="fa-brands fa-cc-discover" style={{color:'orange'}}></i>
                </div>

                <div className="input-box">
                    <span>Name on Card </span>
                    <input type='text' placeholder='John Kelvin Doe'></input>
                </div>

                <div className="input-box">
                    <span>Card Number </span>
                    <input type='number' placeholder='1111-2222-3333-4444'></input>
                </div>

                <div className="input-box">
                    <span>Exp Month </span>
                    <input type='text' placeholder='September'></input>
                </div>

                {/* <div className="input-box">
                    <label for="adr"><i class="fa fa-address-card"></i>City : </label>
                    <input type='text' placeholder='542 W. 15th Street'></input>
                </div> */}

                <div className="flex">
                    <div className="input-box">
                        <span>Exp Year </span>
                        <input type='number' placeholder='2023'></input>
                    </div>

                    <div className="input-box">
                        <span>CVV </span>
                        <input type='number' placeholder='355'></input>
                </div>
                </div>
            </div>

        </div>

        <label>
          <input type="checkbox" name="sameadr" /> Shipping address same as billing
        </label>
        <input type='submit' value='Proceed to Checkout' className='submit-btn'></input>
        </form>
    </div>
    </>
  );
};

export default Checkout;
