import { useState } from "react";
import logo from "../assets/image/Logo.png";
import dropdown from "../assets/svg/navbar/Icon.svg";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 bg-white z-50 px-5">
        <div className="container flex justify-between items-center mx-auto py-8 ">
          <div className="flex flex-row gap-28">
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <div className="hidden xl:flex items-center gap-14">
              <div className="relative cursor-pointer">
                <div
                  className="flex flex-row gap-2 items-center"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  <a className="font-sans font-medium text-base text-Neutral-600 transition-all cursor-pointer">
                    Features
                  </a>
                  <img src={dropdown} alt="" />
                </div>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md overflow-visible z-[100]">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-Neutral-600 hover:bg-gray-100"
                    >
                      Feature 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-Neutral-600 hover:bg-gray-100"
                    >
                      Feature 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-Neutral-600 hover:bg-gray-100"
                    >
                      Feature 3
                    </a>
                  </div>
                )}
              </div>
              <a className="font-sans font-medium text-base text-Neutral-600 transition-all cursor-pointer">
                Pricing
              </a>
              <a className="font-sans font-medium text-base text-Neutral-600 transition-all cursor-pointer">
                About Us
              </a>
              <a className="font-sans font-medium text-base text-Neutral-600 transition-all cursor-pointer text-primary-500">
                Blog
              </a>
            </div>
          </div>
          <div className="hidden xl:flex items-center justify-center gap-2">
            <div className="bg-white rounded-full">
              <button className="font-sans font-medium text-base text-Primary-600 px-8 py-3">
                Sign In
              </button>
            </div>
            <div className="bg-Primary-600 rounded-full">
              <button className="font-sans font-medium text-base text-white px-8 py-3">
                Free Trial
              </button>
            </div>
          </div>

          <div className="xl:hidden">
            <i
              className="bx bx-menu text-5xl cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            ></i>
            <div
              className={`absolute xl:hidden top-24 left-0 w-full py-5 bg-Primary-100 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
                showMenu ? "translate-x-[0%]" : "translate-x-[-150%]"
              }`}
              style={{ transition: "transform 0.3s ease, opacity" }}
            >
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
                Features
              </li>
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
                Pricing
              </li>
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
                About Us
              </li>
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
                Blog
              </li>
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="bg-white rounded-full">
                  <button className="font-sans font-medium text-base text-Primary-600 px-8 py-3">
                    Sign In
                  </button>
                </div>
                <div className="bg-Primary-600 rounded-full">
                  <button className="font-sans font-medium text-base text-white px-8 py-3">
                    Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;


