import image1 from "../../assets/svg/hero/Group-1057.svg";
import image2 from "../../assets/svg/hero/Graphic.svg";
import image3 from "../../assets/svg/hero/Mask group.svg";
import image4 from "../../assets/svg/hero/Rectangle-6759.svg";
import SectionLabel from "./ui/label";

function Hero() {
  return (
    <>
      <div className="container  max-w-[1200px] px-5 lg:px-full mx-auto pt-10 pb-14 lg:pt-16 lg:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-[53%_43%]  justify-between items-center ">
          {/* grid 1 image content  */}
          <div className="relative w-full hidden sm:block">
            <div className="absolute inset-y-0 right-0">
              <img src={image4} alt="" />
            </div>
            <div className="relative flex flex-col gap-8">
              <div className="image1 mx-auto">
                <img src={image1} alt="Logo" className="" />
              </div>
              <div className="flex flex-row gap-8">
                <div className="">
                  <img src={image2} alt="Logo" className="" />
                </div>
                <div className="">
                  <img src={image3} alt="Logo" className="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* grid 2 text content */}
            <div className="flex flex-col gap-8 lg:gap-16">
              <div className="flex flex-col gap-6 lg:gap-8">
                <SectionLabel label="best choice" />
                <div className="flex flex-col gap-4">
                  <h1 className="normal-case font-sans font-bold text-4xl lg:text-5xl leading-10 lg:leading-[60px] text-Neutral-600">
                    Future strategic finance for <br />
                    <span className="normal-case text-Primary-600">
                      Entrepreneurs
                    </span>
                  </h1>
                  <div className="max-w-[460px]">
                    <p className="normal-case font-sans text-lg lg:text-xl leading-8 text-Neutral-400">
                      Scale with checking and savings accounts, custom tools,
                      and access to our investor network.
                    </p>
                  </div>
                </div>
                <div className=" flex flex-row justify-between w-full border-2 rounded-full py-1 pr-1 pl-8 border-Neutral-200">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Your work email"
                    className="w-full flex-1 normal-case font-sans text-base text-Neutral-400 focus:outline-none "
                  />
                  <div className="inline-block flex-none rounded-full bg-Primary-600 hover:bg-Primary-400">
                    <button
                      type="submit"
                      className=" capitalize font-sans font-normal text-base text-white py-3 px-8 lg:py-4"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="gap-2 text-center">
                  <h2 className="font-sans font-bold text-4xl lg:text-5xl text-Primary-600">
                    10%
                  </h2>
                  <p className="font-sans text-sm lg:text-base text-Neutral-300">
                    Benefical
                    <br />
                    Cashback
                  </p>
                </div>
                <div className="gap-2 text-center">
                  <h2 className="font-sans font-bold text-4xl lg:text-5xl text-Primary-600">
                    7M
                  </h2>
                  <p className="font-sans text-sm lg:text-base text-Neutral-300">
                    Satisfied
                    <br />
                    Customer
                  </p>
                </div>
                <div className="gap-2 text-center">
                  <h2 className="font-sans font-bold text-4xl lg:text-5xl text-Primary-600">
                    40+
                  </h2>
                  <p className="font-sans text:sm lg:text-base text-Neutral-300">
                    Country
                    <br />
                    Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
