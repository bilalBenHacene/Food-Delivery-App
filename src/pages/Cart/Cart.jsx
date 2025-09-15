import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import {
  FaArrowLeft,
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaChevronDown,
  FaEdit,
  FaLock,
  FaMinus,
  FaPlus,
  FaShieldAlt,
  FaShoppingCart,
  FaTrash,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    addToCart,
    deleteItemFromCart,
    subtotal,
    setCartItems,
  } = useContext(StoreContext);
  const [shipping, setShipping] = useState(0);

  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [promoCode, setPromoCode] = useState(null);
  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto p-4 max-w-6xl">
        {/* <!-- Header with cart count --> */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Shopping Cart
          </h1>
          <div className="bg-red-600 text-white px-3 py-1 rounded-full flex items-center">
            <FaShoppingCart className="mr-3" />{" "}
            <span>{Object.entries(cartItems).length}</span>
            <span className="hidden sm:inline ml-1">items</span>
          </div>
        </div>

        <div className="space-y-6">
          {/* <!-- Mobile View (< sm breakpoint) --> */}
          <div className="mobile-view sm:hidden">
            <section className="">
              {food_list.map((item, index) => {
                if (cartItems[item._id])
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-4 mb-4"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-start space-x-3">
                          <img
                            src={food_list[index].image}
                            alt="Product"
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div>
                            <h2 className="font-semibold text-lg">
                              {item.name}
                            </h2>
                            <p className="text-sm text-gray-600">
                              {item.category}
                            </p>
                          </div>
                        </div>
                        <button className="text-red-500 hover:text-red-700">
                          <FaTrash />
                        </button>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between font-medium">
                          <span>Price:</span>
                          <span>{`$${item.price.toFixed(2)}`}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Quantity:</span>
                          <div className="flex items-center border rounded">
                            <button className="px-2 py-1 text-gray-500">
                              <FaMinus
                                onClick={() => removeFromCart(item._id)}
                                className=" text-xs"
                              />
                            </button>
                            <span className="w-12 text-center border-x">
                              {cartItems[item._id].Qty}
                            </span>
                            <button
                              onClick={() => addToCart(item._id)}
                              className="px-2 py-1 text-gray-500"
                            >
                              <FaPlus className="text-xs" />
                            </button>
                          </div>
                        </div>

                        <div className="flex justify-between font-bold">
                          <span>Total:</span>
                          <span>{`$${(
                            item.price * cartItems[item._id].Qty
                          ).toFixed(2)}`}</span>
                        </div>

                        <div className="pt-2 border-t mt-2">
                          <span className="text-red-600 text-sm flex items-center">
                            {/* <span></span> */}
                            {item.description}
                            {/* <FaChevronDown className=" ml-1 " /> */}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
              })}
            </section>
          </div>

          {/* <!-- Tablet/Desktop View (≥ sm breakpoint) --> */}
          <div className="hidden sm:block">
            <div className="responsive-table">
              <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="py-3 px-4 text-left">Item</th>
                    {/* <th className="py-3 px-4 text-left">Description</th> */}
                    <th className="py-3 px-4 text-right">Price</th>
                    <th className="py-3 px-4 text-center">Quantity</th>
                    <th className="py-3 px-4 text-right">Total</th>
                    <th className="py-3 px-4 text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {food_list.map((item, index) => {
                    if (cartItems[item._id])
                      return (
                        <tr
                          key={item._id}
                          className="border-t border-gray-200 hover:bg-gray-50 transition"
                        >
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <img
                                src={food_list[index].image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div>
                                <h3 className="font-medium whitespace-nowrap text-sm">
                                  {item.name}
                                </h3>
                                <p className="text-xs text-gray-500">
                                  {item.category}
                                </p>
                              </div>
                            </div>
                          </td>
                          {/* <td className="py-4 px-4 text-sm text-gray-600 ">
                            <p className="w-[90%] truncate">
                              {item.description}
                            </p>
                          </td> */}
                          <td className="py-4 px-4 text-right">
                            <span className="font-medium">{`$${item.price}`}</span>
                          </td>
                          <td className="py-4 px-4 text-center ">
                            <div className="flex items-center justify-center h-8 ">
                              <button
                                onClick={() => removeFromCart(item._id)}
                                className="px-5 h-full text-gray-500 border rounded-l flex items-center justify-center"
                              >
                                <FaMinus className=" text-xs " />
                              </button>
                              <span className="flex-1 text-center border-y h-full flex items-center justify-center">
                                {cartItems[item._id].Qty}
                              </span>
                              <button
                                onClick={() => addToCart(item._id)}
                                className="px-5 text-gray-500 border rounded-r h-full flex items-center justify-center"
                              >
                                <FaPlus className=" text-xs " />
                              </button>
                            </div>
                          </td>

                          <td className="py-4 px-4 text-right">
                            <span className="font-bold">{`$${
                              item.price * cartItems[item._id].Qty
                            }`}</span>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <button
                              className="text-red-500 hover:text-red-700 p-1"
                              onClick={() => deleteItemFromCart(item._id)}
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* <!-- Order Summary --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              {/* <!-- Shipping Options --> */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">Shipping Options</h2>
                <div className="space-y-3">
                  <label
                    className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50 "
                    onClick={() => setShipping(5)}
                  >
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="standard"
                      x-model="shippingMethod"
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Standard Shipping</div>
                      <div className="text-sm text-gray-600">
                        Delivery in 5-7 business days
                      </div>
                    </div>
                    <div className="ml-auto font-medium">$5.00</div>
                  </label>

                  <label
                    className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50"
                    onClick={() => setShipping(15)}
                  >
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="express"
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Express Shipping</div>
                      <div className="text-sm text-gray-600">
                        Delivery in 1-3 business days
                      </div>
                    </div>
                    <div className="ml-auto font-medium">$15.00</div>
                  </label>

                  <label
                    className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50"
                    onClick={() => setShipping(25)}
                  >
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="overnight"
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Overnight Shipping</div>
                      <div className="text-sm text-gray-600">
                        Next day delivery
                      </div>
                    </div>
                    <div className="ml-auto font-medium">$25.00</div>
                  </label>
                </div>
              </div>

              {/* <!-- Promo Code --> */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">Promo Code</h2>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="flex-grow border rounded-l p-2  focus:border-red-500"
                  />
                  <button className="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700 transition">
                    Apply
                  </button>
                </div>
                <div className="mt-2 text-sm text-red-600">
                  <span x-text="promoMessage">
                    {promoCode
                      ? promoCode
                      : "If you have a promo code ,enter it here."}
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Order Total --> */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{`$${subtotal.toFixed(
                      2
                    )}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {`$${subtotal > 0 ? shipping.toFixed(2) : "0.00"}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-medium">
                      {`$${discount.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span className="font-medium">{`$${tax.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>{`$${
                        subtotal > 0
                          ? (subtotal + tax + shipping - discount).toFixed(2)
                          : "0.00"
                      }`}</span>
                    </div>
                  </div>
                </div>
                <button
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition flex items-center justify-center"
                  onClick={() => navigate("/order")}
                >
                  <FaLock className="mr-2" /> Proceed to Checkout
                </button>
                <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
                  <FaShieldAlt className="mr-2" />
                  Secure Checkout
                </div>
                <div className="flex justify-center space-x-2 mt-4">
                  <FaCcVisa className="fab fa-cc-visa text-2xl text-blue-900 cursor-pointer" />
                  <FaCcMastercard className="fab text-2xl text-blue-600 cursor-pointer" />
                  <FaCcAmex className="fab f text-2xl text-blue-500 cursor-pointer" />
                  <FaCcPaypal className="fab  text-2xl text-blue-700 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Continue Shopping --> */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to="/"
              className="flex items-center text-blue-600 hover:text-blue-800 "
            >
              <FaArrowLeft className="mr-2" />
              Continue Shopping
            </Link>
            <button
              className="text-blue-600 hover:text-blue-800 flex justify-between items-center"
              onClick={() => setCartItems({})}
            >
              <FaTrash className="mr-2" /> Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
