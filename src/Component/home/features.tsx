import image1 from "../../assets/svg/features/Picture.svg";
import image2 from "../../assets/svg/features/Picture-1.svg";
import SectionHeader from "./ui/header";

function Features() {
  return (
    <div className="container  max-w-[1200px] mx-auto py-20">
      <div className="flex flex-col gap-14 items-center">
        {/* header */}
        <SectionHeader
          label="FEATURES"
          title="Features designed for you"
          description="Growth-accelerating products for startups, ecommerce stores, angel investors, & more."
        />
        {/* content */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-8 px-8 py-10 bg-Neutral-100 rounded-lg">
            <div className="flex flex-col gap-2">
              <h3 className="normal-case font-sans font-bold text-3xl text-Neutral-600">
                Pay with Fundsphere, quick, simple and easy
              </h3>
              <p className="normal-case font-sans font-normal text-lg text-Neutral-400">
                Use Fundsphere to pay to a merchant and enjoy optimal payment
                user experience.
              </p>
            </div>
            <div className="">
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-8 px-8 py-10 bg-Neutral-100 rounded-lg">
            <div className="flex flex-col gap-2">
              <h3 className="normal-case font-sans font-bold text-3xl text-Neutral-600">
                Bank-level Security
              </h3>
              <p className="normal-case font-sans font-normal text-lg text-Neutral-400">
                Personal information is encrypted and protected by industry
                standard banking security..
              </p>
            </div>
            <div className="">
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
        <div className="w-max bg-Primary-600 rounded-full">
          <button className="capitalize font-sans font-medium text-base text-white px-8 py-4">
            See More Features
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
