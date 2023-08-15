import { useEffect, useReducer, useState } from "react";

import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { cartReducer } from "./reducers/cartReducers";
import NavBar from "./components/NavBar";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  const [results, setResults] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();

    console.log(data);

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <NavBar />
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList
            results={results}
            state={state}
            dispatch={dispatch}
          />
        )}
      </div>

      <div style={{ display: "flex" }}>
        <ProductList state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
