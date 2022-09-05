import React from 'react'

const Products = ({productItems, handleAddProduct}) => {
  return (

    <div className='products'>
      {productItems.map((productItem) => (
        <div className='card'>
          <div>
            <img className='product-image' src={productItem.image} alt={productItem.name}></img>
          </div>

          <div>
            <h3 className='product-name'>{productItem.name}</h3>
          </div>

          <div>
            <p className='product-description'>{productItem.description}</p>
          </div>

          <div className='product-price'>${productItem.price}</div>

          <div>
            <button className='product-add-button' onClick={() => handleAddProduct(productItem)}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Products;