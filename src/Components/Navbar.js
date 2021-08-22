import axios from "axios";
import React, { useState, useEffect } from "react";
import "../style.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [userInput, setUserInput] = useState({
    kenutzCart: [],
  });

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

      const kenutzCart = await fetchKenutzCart();

      handleSetData({
        kenutzCart: [...kenutzCart],
      });
    };

    fetchData();

    // eslint-disable-next-line
  }, []);

  function fetchKenutzCart() {
    return axios
      .get(`https://vue-http-demo-d1da5.firebaseio.com/kenutzCart.json`)
      .then((res) => {
        const products = [];
        for (const id in res.data) {
          products.push({ ...res.data[id], id: id });
        }
        return products;
      });
  }

  return (
    <nav aria-label="Primary" class="navigation">
      <ul class="menu">
        <Link to={`/`}>
          <li className="menu-link">Home</li>
        </Link>
        <Link to={`/favorites`}>
          <li className="menu-link">Favorites</li>
        </Link>
        <Link to={`/cart`}>
          <li className="menu-link">
            Cart{" "}
            <span
              style={{
                background: "darkorange",
                color: "#fff",
                borderRadius: "50px",
                height: "10px",
                width: "10px",
                padding: "1px 13px",
                marginLeft: "10px",
              }}
            >
              {JSON.stringify(userInput.kenutzCart.length)}
            </span>
          </li>
        </Link>
        <Link to={`/contact`}>
          <li className="menu-link">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
