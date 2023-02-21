import { useContext } from "react";
import Context from "./Context";
import Product from "./Product";
import "./Products.css";

function Products(Items) {
  const { handleAddMovies } = useContext(Context);
  const ProdcusList = Items.Items.map((item) => (
    <Product
      key={item.id}
      id={item.id}
      price={item.price}
      title={item.title}
      image={item.image}
      quantity={item.quantity}
      handleAdditems={handleAddMovies}
    />
  ));

  return (
    <div>
      <h2>Products</h2>
      <section className="items">{ProdcusList}</section>;
    </div>
  );
}

export default Products;
