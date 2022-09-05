import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate} from 'react-router-dom';


const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log('Form submitted', data)
};

  console.log(watch("example")); // watch input value by passing the name of it


  const [userDetails, setUserDetails] = useState({
    fullName : "",
    email: "",
    phone: "",
    address: "",
    state: "",
    city : "",
    zip : "",
  });

  let name, value;
  const postUserDetails = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserDetails({...userDetails, [name]:value});
  }

  // Connect with firebase
  const submitDetails = async (event) => {
    event.preventDefault();

    const {fullName, email, phone, address, state, city, zip} = userDetails;


    if(fullName && email && phone && address && state && city && zip) {
    const res = await fetch('https://foodparadise-a4993-default-rtdb.firebaseio.com/userDetails.json',
    {
      method : "POST",
            headers : {
            "Content-Type" : "application/json,"
    },
    body:JSON.stringify({
      fullName, 
      phone, 
      email, 
      address, 
      state,
      city,
      zip
  })
  }
  );

  if (res) {
    setUserDetails({
      fullName : "",
      email: "",
      phone: "",
      address: "",
      state: "",
      city : "",
      zip : "",
    })
    alert('Details Stored');
    handleNext();
  } else {
    alert('Please fill your details correctly!');
  }
  
} else {
  alert('Please fill your details!');
}
  
}

const navigate = useNavigate();
const handleNext = () => {
  navigate('/payment/');
}


  return (
    <form method='POST' className='col-12 col-lg-3 mx-auto ship-form' onSubmit={handleSubmit(onSubmit)}>
      <input name='fullName' {...register("fullName", { required: true })} placeholder='Fullname' value={userDetails.fullName} onChange={postUserDetails}/>
      {errors.fullName && <span className='error'>Name is required</span>}

      <input name='email' {...register("email", { required: true })} placeholder='Email' value={userDetails.email} onChange={postUserDetails}/>
      {errors.email && <span className='error'>Email is required</span>}

      <input name='phone' {...register("phone", { required: true })} placeholder='Phone' value={userDetails.phone} onChange={postUserDetails}/>
      {errors.phone && <span className='error'>Phone number is required</span>}

      <input name='address' {...register("address", { required: true })} placeholder='Address' value={userDetails.address} onChange={postUserDetails}/>
      {errors.address && <span className='error'>Address is required</span>}

      <input name='state' className='flex' {...register("state", { required: true })} placeholder='State' value={userDetails.state} onChange={postUserDetails}/>
      {errors.state && <span className='error'>State is required</span>}

      <input name='city' className='flex' {...register("city", { required: true })} placeholder='City' value={userDetails.city} onChange={postUserDetails}/>
      {errors.city && <span className='error'>City is required</span>}

      <input name='zip' className='flex' {...register("zip", { required: true })} placeholder='Zip code' value={userDetails.zip} onChange={postUserDetails}/>
      {errors.zip && <span className='error'>Zip Code is required</span>}
      
      <input type="submit" onClick={submitDetails}/>
      <br></br>

    </form>


  );
};

export default Shipment;