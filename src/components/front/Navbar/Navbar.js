import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({cartItems}) => {

  const [show, setShow] = useState(false);

  return (
  <>
  <section className='navbar-bg'>
  <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <h1 className="navbar-brand">Food Paradise</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/location">Locations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
          <i className='fas fa-shopping-cart'><span className='cart-length'>
                {cartItems.length === 0 ? 0 : cartItems.length}
              </span></i>
          </Link>
        </li>
      </ul>

      <form className="d-flex">
        <Link className='nav-link' to='/signup'><button className="btn btn-style" type="submit">Sign Up/Sign In</button></Link>
      </form>
    </div>
  </div>
</nav>
</section>
  </>
  )
}

export default Navbar;