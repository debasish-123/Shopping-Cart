import React from 'react';

export default function Items(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>

        <button className="addcart" onClick={() => onAdd(product)}>Add To Cart </button>
        
      </div>
    </div>
  );
}