"use client";
import React, { useState } from "react";
import Qlogo from "../../public/Qsmall.png";
import Image from "next/image";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaChevronDown, FaRegUserCircle } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";

type WrapperProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: WrapperProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="w-full bg-white px-2 md:px-20 shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-between flex-grow">
              <div className="flex-shrink-0 cursor-pointer">
                <Image src={Qlogo} alt="logo" className="h-10 w-auto" />
              </div>
              <div className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                <IoStorefrontOutline className="text-xl" />
                <span className="font-semibold text-sm">Stores</span>
                <FaChevronDown
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`text-xl ${
                    isMenuOpen
                      ? "transform rotate-[90deg]"
                      : "transform rotate-[0deg]"
                  }`}
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-80 mx-4">
                  <form
                    className="relative"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full px-4 py-2 font-semibold text-sm rounded-3xl text-[#161616] bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <RiSearch2Line className="text-2xl" />
                    </div>
                  </form>
                </div>
                <div className="flex items-center space-x-4 text-2xl">
                  <div>
                    <FaRegUserCircle />
                  </div>
                  <div>
                    <GrFavorite />
                  </div>
                  <div>
                    <LuShoppingCart />
                  </div>
                  <div className="flex-shrink-0 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 font-semibold text-sm">
                    Sign up
                  </div>
                  <div className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300 font-semibold text-sm">
                    Login
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center lg:hidden">
              <div>
                <RiSearch2Line />
              </div>
              <div>
                <FaRegUserCircle />
              </div>
              <div>
                <GrFavorite />
              </div>
              <div>
                <LuShoppingCart />
              </div>
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                <IoMdMenu />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 top-0 z-[2] flex flex-col pt-2 px-5 bg-white w-[100vw] h-[100vh]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex justify-between mb-6 items-center">
                <p className="bricolage font-bold text-black text-4xl">Menu</p>
                <div
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-gray-900"
                >
                  <IoMdMenu />
                </div>
              </div>

              <div>DIOR</div>
              <div>GUCCI</div>
              <div>LOUIS VUTTON</div>
              <div>VERSACE</div>
              <div>CARTIER</div>
              <div>HERMES</div>
            </div>
            <div className="absolute bottom-5 flex w-[90vw] space-x-2 px-2">
              <div className="basis-1/2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                Sign up
              </div>
              <div className="basis-1/2 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
                Login
              </div>
            </div>
          </div>
        )}

        {/* Dexktop Dropdown */}
        {isMenuOpen && (
          <div className="hidden lg:absolute lg:flex flex-col left-40 top-14 z-[2] pt-2 px-5 bg-transparent w-auto h-auto">
            <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 md:space-y-0 sm:px-3">
              <div>DIOR</div>
              <div>GUCCI</div>
              <div>LOUIS VUTTON</div>
              <div>VERSACE</div>
              <div>CARTIER</div>
              <div>HERMES</div>
            </div>
          </div>
        )}
      </nav>
      <div>{children}</div>
      <footer className="md:px-20 px-4">
        <div className="grid sm:grid-cols-4 grid-cols-2 justify-between">
          <div>
            <h2 className="font-bold text-base mb-4">Company</h2>
            <ul className="text-base space-y-1.5">
              <li className="font-normal">About us</li>
              <li className="font-normal">Testimonials</li>
              <li className="font-normal">Career</li>
              <li className="font-normal">Terms and conditions</li>
              <li className="font-normal">Best Seller</li>
              <li className="font-normal">New Arrivals</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-base mb-4">Products</h2>
            <ul className="text-base space-y-1.5">
              <li className="font-normal">Necklaces</li>
              <li className="font-normal">Bracelets</li>
              <li className="font-normal">Earrings</li>
              <li className="font-normal">Others</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-base mb-4">Help</h2>
            <ul className="text-base space-y-1.5">
              <li className="font-normal">Shipping and returns</li>
              <li className="font-normal">Size guides</li>
              <li className="font-normal">Material and care</li>
              <li className="font-normal">How to pay</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-base mb-4">Help</h2>
            <ul className="text-base space-y-1.5">
              <li className="font-normal">Customer care</li>
              <li className="font-normal">Refund policy</li>
              <li className="font-normal">FAQ</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
