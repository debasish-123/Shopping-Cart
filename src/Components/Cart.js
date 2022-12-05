import React from 'react';

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const gst = 18.00;
  const totalPrice = itemsPrice + taxPrice + shippingPrice + gst;
  return (
    <aside className="block col-1">
      <h2>CART ITEMS</h2>
      <div>
        {cartItems.length === 0 && <b><div>Cart is empty!!</div></b>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">


            <button  className="remove" onClick={() => onRemove(item)}>
                -
              </button>{' '}
              <button className="add" onClick={() => onAdd(item)} >
                +
              </button>
     
            
              &ensp;

              <select className="dropdown-menu">
  <option value="Small">S</option>
  <option value="Medium">M</option>
  <option value="Large">L</option>
  <option value="X-Large">XL</option>
  <option value="XX-Large">XXL</option>
</select>

            </div>
            
            <div className="col-2 text-right">
              Qty:
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <strong>TOTAL</strong>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Delivery Charges</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">GST</div>
              <div className="col-1 text-right">${gst.toFixed(2)}</div>
            </div>
          <br/>
            <div className="row">
              <div className="col-2"><b>Sub-Total</b>
              
              </div>
              <div className="col-1 text-right">
                <strong>$ {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button className="check" onClick={() => alert('Order Placed Successfully!!')}>
                CHECKOUT
              </button>
            </div>

            <h4>WE ACCEPT:</h4>
            <div className="payments">
            <a href="https://paytm.com/">
               <button className="paytm">Paytm</button> 
               </a>&ensp;
                
                <a href="https://www.npci.org.in/what-we-do/upi/product-overview">
                  <button className="upi">UPI</button>
                  
                </a> &ensp;
              
                <a href="https://www.mastercard.co.in/en-in.html">
                  <button className="mastercard">MasterCard</button>
                
                </a> &ensp;
                <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user&hl=en_IN&gl=US&pli=1">
                  <button className="googlepay">GooglePay</button>
                  
                </a>
                </div>
                <div className="footer">
                 <p><center>Got a discount code? Add in the next step.</center></p>
                </div>

          </>
        )}
      </div>
    </aside>
  );
}