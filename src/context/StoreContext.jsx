import React, { useState } from "react";
import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useEffect } from "react";

export const StoreContext = createContext(null);
const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [subtotal, setSubtotal] = useState(0);

  const addToCart = (itemID) => {
    if (!cartItems[itemID]) {
      setCartItems((prev) => ({
        ...prev,
        [itemID]: { price: food_list[itemID - 1].price, Qty: 1 },
      }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemID]: { ...prev[itemID], Qty: prev[itemID].Qty + 1 },
      }));
    }
  };
  const removeFromCart = (itemID) => {
    if (cartItems[itemID]) {
      setCartItems((prev) => ({
        ...prev,
        [itemID]: { ...prev[itemID], Qty: prev[itemID].Qty - 1 },
      }));
    }
    if (cartItems[itemID].Qty === 1) {
      deleteItemFromCart(itemID);
    }
  };
  const deleteItemFromCart = (itemID) => {
    const filtered = Object.fromEntries(
      Object.entries(cartItems).filter(([key, value]) => key !== itemID)
    );
    setCartItems(filtered);
  };
  useEffect(() => {
    const total = Object.values(cartItems).reduce(
      (sum, item) => sum + item.price * item.Qty,
      0
    );
    setSubtotal(total);
  }, [cartItems]);
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    deleteItemFromCart,
    subtotal,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
