import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  //1  with getting the values from my state we give it a diff/easy name / alies here
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  //2 ===========
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  // 3========= we use wrapper and show the featured products
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.slice(0, 3).map((eachProduct) => {
          // *********see this why we didnt use a prop for passing eachProduct and why we just spread it and pass it

          /* we can send objs in the prop the other way too see the file SingleProduct.js in the Add to cart component*/

          return <Product key={eachProduct.id} {...eachProduct} />; // 4 we pass the data to display each featuredproduct
        })}
      </div>
      <Link to="/products" className="btn">
        all producres
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
