import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import "../App.css";

const ProductList = ({ state, dispatch }) => {
  const { products, cart } = state;

  const [page, setPage] = useState(1);

  const selectPageHandler = selectedPage => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      <div
        className="App"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          width: "80%",
        }}
      >
        {products.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignContent: "center",
              alignContent: "center",
            }}
          >
            {products.slice(page * 10 - 10, page * 10).map(prod => {
              return (
                <SingleProduct cart={cart} prod={prod} dispatch={dispatch} />
              );
            })}
          </div>
        )}
        {/* {products.map(prod => (
        <SingleProduct cart={cart} prod={prod} dispatch={dispatch} />
      ))} */}

        {products.length > 0 && (
          <div className="pagination">
            <span
              onClick={() => selectPageHandler(page - 1)}
              className={page > 1 ? "" : "pagination__disable"}
            >
              ◀
            </span>

            {[...Array(products.length / 10)].map((_, i) => {
              return (
                <span
                  key={i}
                  className={page === i + 1 ? "pagination__selected" : ""}
                  onClick={() => selectPageHandler(i + 1)}
                >
                  {i + 1}
                </span>
              );
            })}

            <span
              onClick={() => selectPageHandler(page + 1)}
              className={
                page < products.length / 10 ? "" : "pagination__disable"
              }
            >
              ▶
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
