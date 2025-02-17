import { useState } from "react";
import logo from "../assets/image/Logo.png";
import dropdown from "../assets/svg/navbar/Icon.svg";
import SectionStaticNav from "./home/ui/button_nav/static";
import SectionSolidNav from "./home/ui/button_nav/solid";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(""); // State untuk menu aktif

  // Fungsi untuk menangani klik menu dan mengaktifkan menu yang diklik
  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    if (menu !== "Features") {
      setDropdownOpen(false); // Menutup dropdown jika menu lain yang dipilih
    }
  };

  return (
    <>
      <div className="sticky bg-white z-50 px-5">
        <div className="container flex justify-between items-center mx-auto">
          <div className="flex flex-row gap-28 py-5">
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
            <div className="hidden xl:flex items-center gap-14">
              {/* Menu Features dengan Dropdown */}
              <div className="relative cursor-pointer">
                <div
                  className="flex flex-row gap-2 items-center"
                  onClick={() => {
                    setDropdownOpen(!isDropdownOpen);
                    handleMenuClick("Features");
                  }}
                >
                  <a
                    className={`font-sans font-medium text-base text-Neutral-600 transition-all cursor-pointer ${
                      activeMenu === "Features" ? "text-Primary-600" : ""
                    }`}
                  >
                    Features
                  </a>
                  <img
                    src={dropdown}
                    alt="Dropdown Icon"
                    className={`transition-all ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`} // Ikon berputar saat dropdown terbuka
                    style={{
                      filter:
                        activeMenu === "Features" // Ganti warna ikon jika Features aktif
                          ? "invert(28%) sepia(77%) saturate(559%) hue-rotate(172deg) brightness(96%) contrast(94%)"
                          : "",
                    }}
                  />
                </div>

                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md overflow-visible z-[100]">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-Neutral-600 hover:bg-Primary-300"
                    >
                      Feature 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-Neutral-600 hover:bg-Primary-300"
                    >
                      Feature 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-Neutral-600 hover:bg-Primary-300"
                    >
                      Feature 3
                    </a>
                  </div>
                )}
              </div>

              {/* Menu lain */}
              <a
                onClick={() => handleMenuClick("Pricing")}
                className={`font-sans font-medium text-base transition-all cursor-pointer ${
                  activeMenu === "Pricing"
                    ? "text-Primary-600"
                    : "text-Neutral-600"
                }`}
              >
                Pricing
              </a>
              <a
                onClick={() => handleMenuClick("About Us")}
                className={`font-sans font-medium text-base transition-all cursor-pointer ${
                  activeMenu === "About Us"
                    ? "text-Primary-600"
                    : "text-Neutral-600"
                }`}
              >
                About Us
              </a>
              <a
                onClick={() => handleMenuClick("Blog")}
                className={`font-sans font-medium text-base transition-all cursor-pointer ${
                  activeMenu === "Blog"
                    ? "text-Primary-600"
                    : "text-Neutral-600"
                }`}
              >
                Blog
              </a>
            </div>
          </div>

          <div className="hidden xl:flex items-center justify-center gap-2">
            <SectionStaticNav text="Sign In" />
            <SectionSolidNav text="Free Trial" />
          </div>

          {/* Hamburger Menu */}
          <div className="xl:hidden">
            <i
              className="bx bx-menu text-5xl cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            ></i>
            <div
              className={`absolute xl:hidden top-20 left-0 w-full py-5 bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
                showMenu ? "translate-x-[0%]" : "translate-x-[-150%]"
              }`}
              style={{ transition: "transform 0.3s ease, opacity" }}
            >
              <li
                className="list-none w-full text-center p-4 hover:bg-Primary-600 hover:text-white transition-all cursor-pointer"
                onClick={() => handleMenuClick("Features")}
              >
                Features
              </li>
              <li
                className="list-none w-full text-center p-4 hover:bg-Primary-600 hover:text-white transition-all cursor-pointer"
                onClick={() => handleMenuClick("Pricing")}
              >
                Pricing
              </li>
              <li
                className="list-none w-full text-center p-4 hover:bg-Primary-600 hover:text-white transition-all cursor-pointer"
                onClick={() => handleMenuClick("About Us")}
              >
                About Us
              </li>
              <li
                className="list-none w-full text-center p-4 hover:bg-Primary-600 hover:text-white transition-all cursor-pointer"
                onClick={() => handleMenuClick("Blog")}
              >
                Blog
              </li>
              <div className="flex flex-row items-center justify-center gap-2">
                <SectionStaticNav text="Sign In" />
                <SectionSolidNav text="Free Trial" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
