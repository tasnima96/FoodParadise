import React, { useState } from "react";
import locationapi from "../../../API/locationApi";

const Locations = () => {
  const [locationData, setLocation] = useState(locationapi);

  return (
    <>
      <section className="location-main-container">
        <div className="container location-container">
          <h1 className="main-heading text-center fw-bold">Our Locations</h1>
          <div className="row">
            {locationData.map((currentElement, index) => {
              const {
                id,
                addressLogo,
                address,
                emailLogo,
                email,
                phoneLogo,
                phone,
              } = currentElement;
              return (
                <>
                  <div
                    className="col-12 col-lg-4 review-container-subdiv"
                    key={index}
                  >
                    <i className={`${addressLogo}`}>
                      <h5>Address: {address}</h5>
                    </i>
                    <i className={`${emailLogo}`}>
                      <h5>Email: {email}</h5>
                    </i>
                    <i className={`${phoneLogo}`}>
                      <h5>Phone: {phone}</h5>
                    </i>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
