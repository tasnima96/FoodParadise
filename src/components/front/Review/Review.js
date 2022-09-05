import React, { useState } from 'react';
import reviewapi from '../../../API/reviewApi';

const Review = () => {

    const [reviewList, setReview] = useState(reviewapi);

  return (
    <>
    <section>
        <div className='review-container container'>
            <h1 className='main-heading text-center'>We Value Your Opinion</h1>
            <div className='row'>
                {reviewList.map((currentElement, index) => {
                    const {id, logo, name, description} = currentElement;
                    return (
                        <>
                            <div className='col-12 col-lg-4 text-center review-container-subdiv' key={index}>
                                <i class={`fontawesome-style ${logo}`}></i>
                                <h2 className='sub-heading'>{name}</h2>
                                <p className='main-hero-para w-100'>{description}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    </section>
    </>
  )
}

export default Review