import image1 from "../../assets/svg/Group-1057.svg";

function Hero() {
  return (
    <>
      <div className="container  max-w-[1200px] mx-auto ">
        <div className="grid grid-cols-[644px_482px] justify-between items-center ">
          <div className="relative w-full">
            <div className="absolute">
              <img src="src/assets/svg/Rectangle-6759.svg" alt="" />
            </div>
            <div className="relative flex flex-col items-center gap-8">
              <div className="image1">
                <img src={image1} alt="Logo" className="" />
              </div>
              <div className="flex flex-row gap-8">
                <div className="">
                  <img
                    src="src/assets/svg/Graphic.svg"
                    alt="Logo"
                    className=""
                  />
                </div>
                <div className="">
                  <img
                    src="src/assets/svg/Mask group.svg"
                    alt="Logo"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="inline-block px-4 py-2 bg-Primary-600/10 rounded-[20px]">
              <p className="uppercase font-sans font-normal text-sm text-Primary-600">
                best choice
              </p>
            </div>
            <div className="">
              <h1 className="normal-case font-sans font-bold text-5xl leading-[60px] text-Neutral-600">
                Future strategic finance for
                <span className="normal-case text-Primary-600">
                  Entrepreneurs
                </span>
              </h1>
              <p className="normal-case font-sans text-xl leading-8 text-Neutral-400">
                Scale with checking and savings accounts, custom tools, and
                access to our investor network.
              </p>
            </div>
            <div className="bg-blue-800 p-4">
              <input
                id="emsil"
                name="emsil"
                type="text"
                placeholder="Your work email"
                className="normal-case font-sans text-base text-Neutral-400 focus:outline-none "
              />
              <div className="inline-block px-8 py-4 rounded-full bg-Primary-600">
                <button
                  type="submit"
                  className="capitalize font-sans font-normal text-base text-white"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="gap-2 text-center">
                <h2 className="font-sans font-bold text-5xl text-Primary-600">
                  10%
                </h2>
                <p className="font-sans text-base text-Neutral-300">
                  Benefical
                  <br />
                  Cashback
                </p>
              </div>
              <div className="gap-2 text-center">
                <h2 className="font-sans font-bold text-5xl text-Primary-600">
                  7M
                </h2>
                <p className="font-sans text-base text-Neutral-300">
                  Satisfied
                  <br />
                  Customer
                </p>
              </div>
              <div className="gap-2 text-center">
                <h2 className="font-sans font-bold text-5xl text-Primary-600">
                  10%
                </h2>
                <p className="font-sans text-base text-Neutral-300">
                  Country
                  <br />
                  Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
