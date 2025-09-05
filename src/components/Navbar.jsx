import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="flex justify-between items-center px-4 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <p className="text-[#171717] text-[32px] font-bold">SHOPPER</p>
      </div>

      {/* Menu */}
      <ul className="flex items-center gap-8 text-gray-600 font-medium">
        <li
          onClick={() => setMenu("shop")}
          className={`cursor-pointer ${
            menu === "shop" ? "text-red-500 border-b-2 border-red-500" : ""
          }`}
        >
          <Link to="/">Shop</Link>
        </li>

        <li
          onClick={() => setMenu("mens")}
          className={`cursor-pointer ${
            menu === "mens" ? "text-red-500 border-b-2 border-red-500" : ""
          }`}
        >
          <Link to="/mens">Men</Link>
        </li>
        <li
          onClick={() => setMenu("womens")}
          className={`cursor-pointer ${
            menu === "womens" ? "text-red-500 border-b-2 border-red-500" : ""
          }`}
        >
          <Link to="/womens">Women</Link>
        </li>
        <li
          onClick={() => setMenu("kids")}
          className={`cursor-pointer ${
            menu === "kids" ? "text-red-500 border-b-2 border-red-500" : ""
          }`}
        >
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      {/* Right side: Login + Cart */}
      <div className="flex items-center gap-6 px-20">
        <Link to="/login">
          <button className="px-7 py-2 border border-gray-400 rounded-lg hover:bg-black hover:text-white transition">
            Login
          </button>
        </Link>

        <div className="relative">
          <Link to="/cart">
            <img src={cart_icon} alt="cart" className="w-8 h-8" />
          </Link>
          {/* Red count badge */}
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {/* Replace 3 with a prop or state value if available */}3
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
