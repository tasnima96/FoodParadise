import React, { useState } from 'react'

const Contact = () => {

    const [userData, setUserData] = useState({
        firstName : "",
        lastName : "",
        phone : "",
        email : "",
        address : "",
        message : "",
    });


    let name, value;
    const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserData({...userData, [name]:value});
    };


    // connect with firebase

    const submitData = async(e) => {
        e.preventDefault();

        const {firstName, lastName, phone, email, address, message} = userData;

        if (firstName && lastName && phone && email && address && message) {
        const res = await fetch('https://foodparadise-a4993-default-rtdb.firebaseio.com/userDataRecords.json',
        {
            method : "POST",
            headers : {
            "Content-Type" : "application/json,"
        },
        body:JSON.stringify({
            firstName,
            lastName, 
            phone, 
            email, 
            address, 
            message
        })
        }
        );

        if (res) {
            setUserData({
                firstName : "",
                lastName : "",
                phone : "",
                email : "",
                address : "",
                message : "",
            })

            alert("Data Stored");
        } else{
            alert("Please fill the data");
        }
    } else{
        alert("Please fill the data");
    }
}

  return (
    <>
    <section className='contact-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className='row'>
                        <div className='leftside-contact col-12 col-lg-5'>
                            <h1 className='main-heading fw-bold'>Feel Free To Contact With Us</h1>
                            <p className='main-hero-para'>We'll be happy to hear from you. If you have any suggesstions about our business, please do not hesitate to share with us!</p>
                            <figure>
                                <img src='./images/contact.jpg' alt='contactImg' className='img-fluid'></img>
                            </figure>
                        </div>

                        <div className='rightside-contact col-12 col-lg-7'>
                            <form method='POST'>
                                <div className='row'>
                                    <div className='col-12 col-lg-6 contact-input-feild'>
                                        <input type="text" name="firstName" id="" className='form-control' placeholder="First Name" value={userData.firstName} onChange={postUserData}></input>
                                    </div>

                                    <div className='col-12 col-lg-6 contact-input-feild'>
                                        <input type="text" name="lastName" id="" className='form-control' placeholder="Last Name" value={userData.lastName} onChange={postUserData}></input>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 col-lg-6 contact-input-feild'>
                                        <input type="text" name="phone" id="" className='form-control' placeholder="Phone Number" value={userData.phone} onChange={postUserData}></input>
                                    </div>

                                    <div className='col-12 col-lg-6 contact-input-feild'>
                                        <input type="text" name="email" id="" className='form-control' placeholder="Your Email" value={userData.email} onChange={postUserData}></input>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 contact-input-feild'>
                                        <input type="text" name="address" id="" className='form-control' placeholder="Add Address" value={userData.address} onChange={postUserData}></input>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 contact-input-feild'>
                                        <input type="text" name="message" id="" className='form-control' placeholder="Enter Your Message" value={userData.message} onChange={postUserData}></input>
                                    </div>
                                </div>

                                <div class="form-check form-checkbox-style">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
                                    <label class="form-check-label" className='main-hero-para'>
                                        I agree that the Food Paradise may contact me at the given email address or phone number. 
                                    </label>
                                </div>

                                <button type='submit' className='btn btn-style w-100' onClick={submitData}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact;