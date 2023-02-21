import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Context from "./components/Context";

const items = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    quantity: 0,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    quantity: 0,
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    quantity: 0,
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,

    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    quantity: 0,
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    quantity: 0,
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,

    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    quantity: 0,
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,

    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    quantity: 0,
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,

    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    quantity: 0,
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,

    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    quantity: 0,
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,

    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    quantity: 0,
  },
];
function App() {
  const [Items, setItems] = useState(items);
  const [CartItems, setCartItem] = useState([]);

  const cartArr = CartItems;
  const handleAddMovies = (movie) => {
    const MovieExist = cartArr.find((item) => item.id === movie.id);
    if (!MovieExist) {
      setCartItem([...cartArr, { ...movie, quantity: 1 }]);
    } else {
      setCartItem(
        CartItems.map((item) =>
          item.id === movie.id
            ? { ...MovieExist, quantity: MovieExist.quantity + 1 }
            : item
        )
      );
    }
    // Update Items state
    const updatedItems = Items.map((item) => {
      if (item.id === movie.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    setItems(updatedItems);
  };

  const handleRemoveMovies = (movie) => {
    // Update cart array
    const MovieExist = cartArr.find((item) => item.id === movie.id);
    if (MovieExist.quantity > 1) {
      setCartItem(
        CartItems.map((item) =>
          item.id === movie.id
            ? { ...MovieExist, quantity: MovieExist.quantity - 1 }
            : item
        )
      );
    } else {
      setCartItem(cartArr.filter((item) => item.id !== movie.id));
    }

    // Update Items state
    const updatedItems = Items.map((item) => {
      if (item.id === movie.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });

    setItems(updatedItems);
  };
  return (
    <Context.Provider
      value={{
        CartItems,
        handleAddMovies,
        handleRemoveMovies,
      }}
    >
      <div>
        <Cart />
        <Products Items={Items} />
      </div>
    </Context.Provider>
  );
    }
export default App;

