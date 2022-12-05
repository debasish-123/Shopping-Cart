import React from 'react';
import Items from './Items';

export default function Body(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>MY BAG</h2>
    
      <div>
        <p><b>*Items are reserved for 60 minutes</b></p>
      </div>
      <div className="row">
       
        {products.map((product) => (
          <Items key={product.id} product={product} onAdd={onAdd}></Items>
        ))}
  
  
    
      </div>
      
    </main>
   
  );
}