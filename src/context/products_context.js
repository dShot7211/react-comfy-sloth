import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  // 4
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  // 9
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  //1 ===========
  const [state, dispatch] = useReducer(reducer, initialState);

  //2 ===========
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  // 3============
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN }); // 5 products_loading:
    try {
      const resp = await axios.get(url);
      const products = resp.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products }); // 6 send data to products reducer.js
      //  add the products to the products initial state, set loding to false, add  featured_products data too all in this dispatch
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR }); // 7
    }
  };
  useEffect(() => {
    fetchProducts(url);
  }, []);
  //8 =============
  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const resp = await axios.get(url);
      const singleProduct = resp.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
