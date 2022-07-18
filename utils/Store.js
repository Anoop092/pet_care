import React, { useContext, useReducer } from "react";
import Cookies from "js-cookie";
import reducer from "./reducer";
import axios from "axios";
import { toast } from "react-toastify";

const Store = React.createContext();
const initialState = {
  cart: Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart"))
    : {
        cartItems: [],
        shippingAddress: {},
        payment: "",
      },
};

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCartHandler = async (animal) => {
    const existingItem = state.cart.cartItems.find((x) => x._id === animal._id);
    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/animals/${animal._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Sorry.Product is out of stock");
    }
    dispatch({ type: "ADD_TO_CART", payload: { ...animal, quantity } });
    toast.success("successfully added to cart");
  };
  return (
    <Store.Provider value={{ state, dispatch, addToCartHandler }}>
      {children}
    </Store.Provider>
  );
}
export function useGlobalContext() {
  return useContext(Store);
}
