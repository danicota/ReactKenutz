import React, { useState } from "react";

import ProductItem from "./Components/Products/ProductItem";
import WeightList from "./Components/WeightList";
import NutsTypes from "./Components/NutsTypes";
import RatingFilter from "./Components/RatingFilter";
import Footer from "./Components/Footer";
import SortFilter from "./Components/SortFilter";
import Navbar from "./Components/Navbar";
import SearchComponent from "./Components/SearchComponent";

import "./style.css";
import "./reset.css";

function App() {
  const [filtersList, setFilters] = useState([]);
  // eslint-disable-next-line
  const [productsList, modifyProductsList] = useState([
    {
      nutKind: "Hazelnuts",
      productImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZVbaTCxbyRNjIx2bRGkp7b0dZoGNVA6wyw&usqp=CAU`,
      oldPrice: 10.0,
      nutPrice: 21.0,
      nutDescription: "Come get your hazelnuts, they are on sale!!",
      nutRating: 5,
      nutSize: [1, 2, 3],
    },
    {
      nutKind: "Almonds",
      productImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEvn95yqC8n6hO9XXyLtTbF2vGqGPGqF_vQ&usqp=CAU`,
      oldPrice: 20.0,
      nutPrice: 9.0,
      nutDescription: "10% sale oon almonds!",
      nutRating: 3,
      nutSize: [1, 2, 3],
    },
    {
      nutKind: "Cashews",
      productImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBRGMmCG6SnmtSnGuJ1y3JWdT1ikOqk5Sww&usqp=CAU`,
      oldPrice: 30.0,
      nutPrice: 28.0,
      nutDescription: "Trade your cash for some delicious cashews.",
      nutRating: 4,
      nutSize: [1, 4, 5],
    },
    {
      nutKind: "Pecan",
      productImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-belgQEOGOuMZryW0GfFHYYOmMYEW5ZTPA&usqp=CAU`,
      oldPrice: 40.0,
      nutPrice: 14.0,
      nutDescription: "Pack or peck of pecans.",
      nutRating: 2,
      nutSize: [4, 5],
    },
    {
      nutKind: "Zalnuts",
      productImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSCy2ulRkCKYlhuLikTXEtFbgFWTx0uHrJw&usqp=CAU`,
      oldPrice: 50.0,
      nutPrice: 25.0,
      nutDescription: "Anyway heres walnutwall",
      nutRating: 5,
      nutSize: [1, 4],
    },
    {
      nutKind: "Brazil Nuts",
      productImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPnNPWYpxSote2TotBaCaZH4444k7xyFQeA&usqp=CAU`,
      oldPrice: 60.0,
      nutPrice: 36.0,
      nutDescription: "Exotic nuts at a discount",
      nutRating: 4,
      nutSize: [2, 3],
    },
  ]);
  const [filteredProductsList, modifyFilteredProductsList] = useState([
    {
      nutKind: "Hazelnuts",
      productImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZVbaTCxbyRNjIx2bRGkp7b0dZoGNVA6wyw&usqp=CAU`,
      oldPrice: 10.0,
      nutPrice: 21.0,
      nutDescription: "Come get your hazelnuts, they are on sale!!",
      nutRating: 5,
      nutSize: [1, 2, 3],
    },
    {
      nutKind: "Almonds",
      productImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEvn95yqC8n6hO9XXyLtTbF2vGqGPGqF_vQ&usqp=CAU`,
      oldPrice: 20.0,
      nutPrice: 9.0,
      nutDescription: "10% sale oon almonds!",
      nutRating: 3,
      nutSize: [1, 2, 3],
    },
    {
      nutKind: "Cashews",
      productImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBRGMmCG6SnmtSnGuJ1y3JWdT1ikOqk5Sww&usqp=CAU`,
      oldPrice: 30.0,
      nutPrice: 28.0,
      nutDescription: "Trade your cash for some delicious cashews.",
      nutRating: 4,
      nutSize: [1, 4, 5],
    },
    {
      nutKind: "Pecan",
      productImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-belgQEOGOuMZryW0GfFHYYOmMYEW5ZTPA&usqp=CAU`,
      oldPrice: 40.0,
      nutPrice: 14.0,
      nutDescription: "Pack or peck of pecans.",
      nutRating: 2,
      nutSize: [4, 5],
    },
    {
      nutKind: "Zalnuts",
      productImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSCy2ulRkCKYlhuLikTXEtFbgFWTx0uHrJw&usqp=CAU`,
      oldPrice: 50.0,
      nutPrice: 25.0,
      nutDescription: "Anyway heres walnutwall",
      nutRating: 5,
      nutSize: [1, 4],
    },
    {
      nutKind: "Brazil Nuts",
      productImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPnNPWYpxSote2TotBaCaZH4444k7xyFQeA&usqp=CAU`,
      oldPrice: 60.0,
      nutPrice: 36.0,
      nutDescription: "Exotic nuts at a discount",
      nutRating: 4,
      nutSize: [2, 3],
    },
  ]);
  const sorTestAlphaAscen = () => {
    modifyFilteredProductsList([
      ...filteredProductsList.sort((i, j) => {
        if (j.nutKind > i.nutKind) {
          return -1;
        }
        if (j.nutKind < i.nutKind) {
          return 1;
        }
        return 1;
      }),
    ]);
  };
  const sorTestAlphaDesc = () => {
    modifyFilteredProductsList([
      ...filteredProductsList.sort((i, j) => {
        if (j.nutKind < i.nutKind) {
          return -1;
        }
        if (j.nutKind > i.nutKind) {
          return 1;
        }
        return 1;
      }),
    ]);
  };
  const sorTesPriceAscen = () => {
    modifyFilteredProductsList([
      ...filteredProductsList.sort((i, j) => {
        if (j.nutPrice > i.nutPrice) {
          return -1;
        }
        if (j.nutPrice < i.nutPrice) {
          return 1;
        }
        return 1;
      }),
    ]);
  };
  const sorTesPriceDesc = () => {
    modifyFilteredProductsList([
      ...filteredProductsList.sort((i, j) => {
        if (j.nutPrice < i.nutPrice) {
          return -1;
        }
        if (j.nutPrice > i.nutPrice) {
          return 1;
        }
        return 1;
      }),
    ]);
  };
  const sortHandler = (value) => {
    if (value === "name-high") {
      sorTestAlphaDesc();
    }
    if (value === "name-low") {
      sorTestAlphaAscen();
    }
    if (value === "price-high") {
      sorTesPriceDesc();
    }
    if (value === "price-low") {
      sorTesPriceAscen();
    }
  };
  const sorTestReset = () => {
    modifyFilteredProductsList(productsList);
  };
  const filterHandler = (value) => {
    const filters = [...filtersList];

    if (filters.includes(value)) {
      const indexfind = filters.indexOf(value);
      filters.splice(indexfind, 1);
    } else {
      filters.push(value);
    }

    setFilters([...filters]);
    const filteredProds = filterCategories(filters);
    modifyFilteredProductsList(filteredProds);
  };
  const filterCategories = (filters) => {
    return productsList.filter((prod) => {
      let flag = false;

      if (filters.length === 0) {
        flag = true;
      }

      filters.forEach((element) => {
        if (prod.nutSize.includes(+element)) {
          flag = true;
        }
      });

      return flag;
    });
  };
  const mappedProds = filteredProductsList.map((prod) => (
    <ProductItem
      productImage={prod.productImage}
      nutKind={prod.nutKind}
      oldPrice={prod.oldPrice}
      nutPrice={prod.nutPrice}
      nutDescription={prod.nutDescription}
      nutRating={prod.nutRating}
      nutSize={prod.nutSize}
    />
  ));
  const paginationFilter = (page) => {
    console.log(productsList);
    sorTestReset();
    const prodList = [...productsList];
    console.log(page);
    modifyFilteredProductsList(prodList.slice(page * 2, page * 2 + 2));
  };
  const paginationHandler = (value) => {
    paginationFilter(value);
  };
  const mappedPagination = () => {
    const pages = [];
    let numberOfPages = productsList.length / 2;
    for (let index = 0; index < numberOfPages; index++) {
      pages.push(
        <li
          style={{ marginLeft: "10px", display: "inline" }}
          onClick={() => paginationHandler(index)}
        >
          {index + 1}
        </li>
      );
    }
    return pages;
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
      />

      <body>
        <header class="page-header">
          <img
            style={{ maxWidth: "100px", marginTop: "40px" }}
            class="logo-img"
            src="https://raw.githubusercontent.com/danicota/ecomm-store-project/ec8a2e517475a1ac264cf06680c8387e3e8f7437/img/Asset%201.svg"
            alt="kenutz"
          />

          <Navbar />

          <SearchComponent />
        </header>

        <div class="wrapper">
          <main class="products">
            <form class="filters">
              <div class="filter-options">
                <NutsTypes />
                <WeightList
                  filterHandler={filterHandler}
                  filtersList={filtersList}
                />
                <RatingFilter />
              </div>
              <SortFilter sortHandler={sortHandler} />
            </form>

            <div class="grid-container" style={{ marginLeft: "10px" }}>
              {mappedProds}
            </div>
            <p style={{ textAlign: "center" }}>
              {filteredProductsList.length} products found
            </p>

            <div style={{ textAlign: "center" }}>
              <ul>{mappedPagination()}</ul>
            </div>

            <p
              style={{ textAlign: "center", fontSize: "10px" }}
              onClick={sorTestReset}
            >
              See all products
            </p>
          </main>
        </div>

        <div class="wrapper">
          <Footer />
        </div>
      </body>
    </div>
  );
}

export default App;
