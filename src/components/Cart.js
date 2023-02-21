import { useContext, useState } from "react";
import Context from "./Context";
import "./Cart.css";
function Cart() {
  const { handleAddMovies } = useContext(Context);
  const { handleRemoveMovies } = useContext(Context);
  const { CartItems } = useContext(Context);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        {CartItems.map((item) => (
          <div>
            <div>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <p>{item.title}</p>
              <p>Price: {item.price}</p>
              <p>
                <button onClick={() => handleAddMovies(item)}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleRemoveMovies(item)}>-</button>
              </p>
            </div>
          </div>
        ))}
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      </div>
    </div>
  );
}
export default Cart;
