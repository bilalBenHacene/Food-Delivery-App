import React from "react";
import {
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";

const PlaceOrder = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-md border ">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800  mb-4">
            Delivery Information
          </h1>

          {/* <!-- Shipping Address --> */}
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700  mb-2">
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-gray-700  mb-1 text-sm sm:text-base"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="w-full rounded-lg border py-2 px-3   "
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-gray-700  mb-1 text-sm sm:text-base"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="w-full rounded-lg border py-2 px-3   "
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="address"
                className="block text-gray-700  mb-1 text-sm sm:text-base"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full rounded-lg border py-2 px-3   "
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="city"
                className="block text-gray-700  mb-1 text-sm sm:text-base"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full rounded-lg border py-2 px-3   "
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="state"
                  className="block text-gray-700  mb-1 text-sm sm:text-base"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full rounded-lg border py-2 px-3   "
                />
              </div>
              <div>
                <label
                  htmlFor="zip"
                  className="block text-gray-700  mb-1 text-sm sm:text-base"
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  className="w-full rounded-lg border py-2 px-3   "
                />
              </div>
            </div>
          </div>

          {/* <!-- Payment InhtmlFormation --> */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700  mb-2">
              Payment Information
            </h2>
            <div className="mt-4">
              <label
                htmlFor="card_number"
                className="block text-gray-700  mb-1 text-sm sm:text-base"
              >
                Card Number
              </label>
              <input
                type="text"
                id="card_number"
                className="w-full rounded-lg border py-2 px-3   "
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="exp_date"
                  className="block text-gray-700  mb-1 text-sm sm:text-base"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="exp_date"
                  className="w-full rounded-lg border py-2 px-3   "
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-gray-700  mb-1 text-sm sm:text-base"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full rounded-lg border py-2 px-3   "
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center sm:justify-end">
            <button className="bg-red-600 transition-colors text-white px-4 py-2 rounded-lg hover:bg-red-700 ">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
