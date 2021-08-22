import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const params = useParams();

  const [userInput, setUserInput] = useState({
    details: {},
    loading: false,
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

      const productDetails = await fetchProductDetails();
      console.log("details : ", productDetails);
      handleSetData({
        details: productDetails,
        loading: false,
      });
    };

    fetchData();

    // eslint-disable-next-line
  }, []);

  function fetchProductDetails() {
    return axios
      .get(
        `https://vue-http-demo-d1da5.firebaseio.com/kenutz/${params.productId}.json`
      )
      .then((res) => {
        return res.data;
      });
  }

  return (
    <React.Fragment>
      <div className="wrapper">
        {/* <p> {JSON.stringify(userInput.productsList, null, 2)}</p> */}

        <img
          style={{ marginTop: 50 }}
          class="productImage"
          src={userInput.details.productImage}
          alt="Product"
        />
        <h1>{userInput.details.nutKind}</h1>
        <p>{userInput.details.nutDescription}</p>
        <p>${userInput.details.nutPrice}</p>

        <Link to={`/`}>
          <p style={{ marginTop: 50, color: "#16398c", cursor: "pointer" }}>
            Go back home
          </p>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
