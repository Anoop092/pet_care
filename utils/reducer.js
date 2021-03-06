import Cookies from "js-cookie";
export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newItem = action.payload;
      const existingItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existingItem
        ? state.cart.cartItems.map((item) =>
            item._id === existingItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));

      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "DELETE_CART_ITEM": {
      const deleteItem = action.payload;
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== deleteItem._id
      );
      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "USER_LOGIN": {
      return { ...state, userInfo: action.payload };
    }

    default:
      return state;
  }
}
