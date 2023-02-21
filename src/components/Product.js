import { useContext } from "react";
import Context from "./Context";
import "./Product.css";

function Product(pro) {
  const { handleAddMovies } = useContext(Context);
  const { handleRemoveMovies } = useContext(Context);
  return (
    <div className="column">
      <img className="imgPro" src={pro.image} />
      <h4>{pro.title}</h4>
      <h6>{pro.price}$</h6>
      <div>
        <div>
          <button onClick={() => handleAddMovies(pro)}>+</button>
          {pro.quantity}
          <button onClick={() => handleRemoveMovies(pro)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
