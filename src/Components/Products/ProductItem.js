import React from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const mappedInputs = props.nutSize.map((size) => (
    <li>
      <label>
        <input type="radio" name="size" value={size} /> {size} lb bag
      </label>
    </li>
  ));

  const stars = () => {
    const starsElements = [];
    for (var i = 0; i < props.nutRating; i++) {
      starsElements.push(<i class="fas fa-star"></i>);
    }
    return starsElements;
  };

  return (
    <article class="product">
      <img class="productImage" src={props.productImage} alt="Product" />
      <h3 style={{ margin: 0 }}>{props.nutKind}</h3>
      <div value="39">
        {/* <del>${props.oldPrice}</del>  */}
        <div>${props.nutPrice}</div>
      </div>
      {/* <p>{props.nutDescription}</p> */}
      <div style={{ margin: 0 }}>
        <dt>Rating</dt>
        <div style={{ marginTop: "10px" }}> {stars()} </div>
      </div>

      <form>
        <fieldset>
          <legend>Sizes</legend>
          <ol className="product-sizes">{mappedInputs}</ol>
        </fieldset>
      </form>
      <footer>
        <button
          onClick={() => {
            props.addToCart(props.nutKind, props.nutPrice);
            
          }}
          type="button"
        >
          <i class="far fa-shopping-cart"></i>
          Add to Cart
        </button>
        <button
          className={props.favorite === "true" ? "red-text" : null}
          type="button"
          onClick={() => {
            props.toggleFavorite(props.product);
          }}
        >
          <i class="fas fa-heart"></i>
        </button>
        <Link to={`/product/${props.product_id}`}>
          <p
            style={{
              textAlign: "center",
              marginTop: 40,
              color: "#16398c",
              cursor: "pointer",
            }}
          >
            Read more{" "}
          </p>
        </Link>
      </footer>
    </article>
  );
};

export default ProductItem;
