import React from 'react';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Login = (props) => {

    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignUp, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError} = props;


  return (
    <>
    <section className='login'>
        <div className='loginContainer col-md-6'>
            <label>Username</label>
            <input 
            type='text' 
            autoFocus 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}>
            </input>
            <p className='errorMsg'>{emailError}</p>
            <label>Password</label>
            <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <p className='errorMsg'>{passwordError}</p>

            <div className='btnContainer'>
              {hasAccount ? (
                <>
                <button className='login-btn' onClick={handleLogin}>Signin</button>
                <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Signup</span></p>
                </>
              ) : (
                <>
                <button className='login-btn' onClick={handleSignUp}>Sign Up</button>
                <p>Have an account already? <span onClick={() => setHasAccount(!hasAccount)}>Signin</span></p>
                </>
              )}
            </div>
        </div>
    </section>
    </>
  )
}

export default Login;