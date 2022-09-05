import React from 'react'

const AboutUs = () => {
  return (
    <>
    <section className='common-section about-us'>
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-12 col-lg-5 text-center about-us-left-img'>
                    <img src='./images/aboutus.jpg' alt='about'></img>
                </div>

                <div className='col-12 col-lg-7 about-us-block'>
                    <h1 className='main-heading'>About Us</h1>
                    <p>"At Food Paradise, we believe there is a better way to find the perfect recipe. A more convient way where individuals can quickly access and find instructions to make unique dishes. We're obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It's one of the least understood and least transparent aspect, and we see that as an opportunity to provide convience. We're excited to simplify Food Paradise for everyone in our community.""</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutUs;