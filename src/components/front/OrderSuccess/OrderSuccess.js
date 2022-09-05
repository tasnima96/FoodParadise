import React, {useState, useEffect} from "react";
import fire from '../../../fire';

const OrderSuccess = () => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
}


  const handleLogout = () => {
    fire.auth().signOut();
};


// To check if user exists

const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
        if(user) {
            clearInputs();
            setUser(user);
        } else {
            setUser('');
        }
    });
};


useEffect(() => {
    authListener();
}, []);

  return (
    <>
      <div className="card mx-auto text-center" style={{width: '42rem', height: '24rem'}}>
        <div className="card-body">
        <i className="fa-solid fa-circle-check icon-style"></i>
        <br></br>
          <h3 className="card-title">Payment Successful!</h3>
          <br></br>
          <p className="card-text">
            Thank you for choosing us. You will recieve your order within 20-25 minutes. Hope you will enjoy every bite of it!!
          </p>
          <br></br>
          <a href="/"><button type="button" class="btn btn-outline-primary">Back to Home</button></a>
          <a href="/signup/"><button type="button" class="btn btn-outline-primary" onClick={handleLogout}>Logout</button></a>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
