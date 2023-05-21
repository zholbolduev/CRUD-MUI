import axios from "axios";
import { createContext, useReducer } from "react";
import { API } from "../helpers/consts";

export const productContext = createContext();

const INIT_STATE = { products: [], oneProduct: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const getProduct = async () => {
    let { data } = await axios(`${API}/${window.location.search}`);
    let action = {
      type: "GET_PRODUCTS",
      payload: data,
    };
    dispatch(action);
  };

  const getOneProduct = async (id) => {
    let { data } = await axios(`${API}/${id}`);
    let action = {
      type: "GET_ONE_PRODUCT",
      payload: data,
    };

    dispatch(action);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProduct();
  };

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${API}/${newProduct.id}`, newProduct);
    getProduct();
  };

  const values = {
    addProduct,
    getProduct,
    getOneProduct,
    deleteProduct,
    saveEditedProduct,

    products: state.products,
    oneProduct: state.oneProduct,
  };

  return (
    <>
      <productContext.Provider value={values}>
        {children}
      </productContext.Provider>
    </>
  );
};

export default ProductContextProvider;
