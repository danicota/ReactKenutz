import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Cart() {
  let history = useHistory();

  const [userInput, setUserInput] = useState({
    productsList: [],
    loading: false,
  });

  const totalPrice = () => {
    let total = 0;
    for (let i = 0; i < userInput.productsList.length; i++) {
      total += userInput.productsList[i].price;
    }

    return total;
  };

  const handleSetData = (payload) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        ...payload,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      handleSetData({ loading: true });

      const kenutzProducts = await fetchKenutzProducts();

      handleSetData({
        productsList: kenutzProducts,
        loading: false,
      });
    };

    fetchData();

    // eslint-disable-next-line
  }, []);

  function fetchKenutzProducts() {
    return axios
      .get(`https://vue-http-demo-d1da5.firebaseio.com/kenutzCart.json`)
      .then((res) => {
        const products = [];
        for (const id in res.data) {
          products.push({ ...res.data[id], id: id });
        }
        console.log(products);
        return products;
      });
  }

  function deleteProductFromCart(productId) {
    return axios
      .delete(
        `https://vue-http-demo-d1da5.firebaseio.com/kenutzCart/${productId}.json`
      )
      .then((res) => {
        window.location.reload();
      });
  }

  const mappedProds = userInput.productsList.map((prod) => (
    <li>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div>
          <p>{prod.product}</p>
          <p>Price: ${prod.price}</p>
        </div>
        <div>
          <button
            onClick={() => {
              deleteProductFromCart(prod.id);
            }}
            style={{
              background: "#16398c",
              color: "#fff",
              padding: "10px 55px",
              borderRadius: "11px",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <hr />
    </li>
  ));

  return (
    <React.Fragment>
      <div className="wrapper">
        {/* <p> {JSON.stringify(userInput.productsList, null, 2)}</p> */}

        <h1>Cart</h1>
        <ul>{mappedProds}</ul>
        <h2 style={{color: "#16398c"}}>Total: {totalPrice()}</h2>
      </div>
    </React.Fragment>
  );
}

export default Cart;
