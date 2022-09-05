import React from 'react';
import Header from './components/Header/Header';
import Review from './components/front/Review/Review';
import AboutUs from './components/front/About/AboutUs';
import Locations from './components/front/Location/Locations';
import Contact from './components/front/Contact/Contact';

const NewHome = () => {
  return (
    <>
    <Header />
    <Review />
    <AboutUs />
    <Locations />
    <Contact />
    </>
  )
}

export default NewHome