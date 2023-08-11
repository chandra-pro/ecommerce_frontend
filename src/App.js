import { useEffect, useReducer, useState } from "react";

import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { cartReducer } from "./reducers/cartReducers";

function App() {
  const [products, setproducts] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();

    console.log(data);

    // if (data && data.products) {
    //   setproducts(data.products);
    // }

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <ProductList state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
