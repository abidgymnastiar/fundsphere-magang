import background from "../../assets/svg/footer/Pattern.svg";

function CTA() {
  return (
    <>
      <div
        className="container  max-w-[1200px] mx-auto py-12 bg-Primary-600 bg-cover rounded-3xl"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex flex-col max-w-[504px] items-center mx-auto gap-6">
          <div>
            <h2 className="font-sans font-bold text-5xl text-white text-center leading-[57px]">
              Get started today for better future finance
            </h2>
          </div>
          <div>
            <p className="font-sans font-normal text-lg text-center text-Neutral-100">
              Fundsphere is a compass for business leaders, scale with checking
              and savings accounts, custom tools, and access to our investor
              network.
            </p>
          </div>
          <div className=" flex flex-row w-full border-1 rounded-full py-1 pr-1 pl-8 border-Neutral-100 bg-white max-w-[412px]">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Your work email"
              className="flex-1 normal-case font-sans text-base text-Neutral-400 bg-transparent focus:outline-none "
            />
            <div className="inline-block flex-none rounded-full bg-Primary-600 hover:bg-Primary-400">
              <button
                type="submit"
                className=" capitalize font-sans font-normal text-base text-white px-8 py-4"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CTA;
