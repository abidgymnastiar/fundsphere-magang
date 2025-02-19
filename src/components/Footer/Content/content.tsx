import logo from "../../../assets/svg/footer/Logo.svg";
import sosmet from "../../../assets/svg/footer/Facebook.svg";
import sosmet1 from "../../../assets/svg/footer/Twitter.svg";
import sosmet2 from "../../../assets/svg/footer/in.svg";

function content() {
  return (
    <>
      <div className="">
        <div className="container  max-w-[1200px] mx-auto px-5 lg:px-none">
          <div className="flex flex-col gap-16 lg:gap-0">
            <div className="block lg:hidden">
              <div className="flex flex-col gap-4 max-w-[229px]">
                <img src={logo} alt="" />
                <p className="font-sans font-normal text-lg text-Neutral-400">
                  Sudirman St., 12B, Malang +1 215-2231-5523 hello@fundsphere.id
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-16">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row flex-wrap gap-12 md:gap-32">
                  <div className="flex flex-col gap-3">
                    <p className="font-sans font-medium text-base text-white">
                      Platform
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="#"
                        className="font-sans font-medium text-sm text-Neutral-400"
                      >
                        Why Fundsphere?
                      </a>
                      <a
                        href="#"
                        className="font-sans font-medium text-sm text-Neutral-400"
                      >
                        Pricing
                      </a>
                      <a
                        href="#"
                        className="font-sans font-medium text-sm text-Neutral-400"
                      >
                        FAQ
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="font-sans font-medium text-base text-white">
                      Features
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="#"
                        className="font-sans font-medium text-sm text-Neutral-400"
                      >
                        Payments
                      </a>
                      <a
                        href="#"
                        className="font-sans font-medium text-sm text-Neutral-400"
                      >
                        API
                      </a>
                      <a
                        href="#"
                        className="font-sans font-medium text-sm text-Neutral-400"
                      >
                        Ecommerce
                      </a>
                      <a
                        href="#"
                        className="font-sans font-medium text-sm text-Neutral-400"
                      >
                        Business
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="font-sans font-medium text-base text-white">
                      Company
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="#"
                        className="font-sans font-medium text-sm text-Neutral-400"
                      >
                        About Us
                      </a>
                      <a
                        href="#"
                        className="font-sans font-medium text-sm text-Neutral-400"
                      >
                        Career
                      </a>
                      <a
                        href="#"
                        className="font-sans font-medium text-sm text-Neutral-400"
                      >
                        Blog
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="flex flex-col gap-4 max-w-[229px]">
                    <img src={logo} alt="" />
                    <p className="font-sans font-normal text-lg text-Neutral-400">
                      Sudirman St., 12B, Malang +1 215-2231-5523
                      hello@fundsphere.id
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <hr className="border-t border-gray-300 my-4" />
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
                  <p className="text-Primary-600 text-sm">
                    © Fundsphere Copyright 2024. All Rights Reserved.
                  </p>
                  <div className="flex flex-row gap-4">
                    <img src={sosmet} alt="" />
                    <img src={sosmet1} alt="" />
                    <img src={sosmet2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default content;
