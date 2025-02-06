import { useState } from "react";
import logo from "../assets/image/Logo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className=" flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <a href="#">
          <img src={logo} alt="" />
        </a>

        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            Features
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            Pricing
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            About Us
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer text-primary-500">
            Blog
          </li>
        </ul>

        <div className="relative hidden md:flex items-center justify-center gap-3">
          <i className="bx bx-search absolute left-3 text-gray-500"></i>
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
          ></input>
        </div>

        <div className="xl:hidden ">
          <i
            className="bx bx-menu text-5xl cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          ></i>

          <div
            className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
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
          </div>
        </div>
      </header>
    </>
  );
}
export default Navbar;
