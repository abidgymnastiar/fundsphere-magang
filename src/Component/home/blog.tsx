import SectionHeader from "./ui/header";
import image from "../../assets/svg/blog/Graphic.svg";
import image1 from "../../assets/svg/blog/Graphic-1.svg";
import image2 from "../../assets/svg/blog/Graphic-2.svg";
import pattern from "../../assets/svg/blog/Pattern.svg";

function Blog() {
  return (
    <div className="relative bg-Neutral-100">
      <img src={pattern} className="absolute w-full" alt="" />
      <div className="container  max-w-[1200px] mx-auto px-5 lg:px-0 py-8 lg:py-20">
        <div className="flex flex-col gap-20 items-center">
          <SectionHeader
            label="INSIGHT"
            title="Magazine"
            description="Find growth insight in our blog."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col justify-center gap-5">
              <img src={image} alt="" />
              <div className="flex flex-col justify-between px-6 py-2 min-h-[138px] bg-white rounded-xl">
                <p className="font-sans font-medium text-lg lg:text-xl text-Neutral-600">
                  Online Payment Failure: Why it Happens and How to Avoid it.
                </p>
                <p className="font-sans font-normal text-base text-Neutral-400">
                  January 4, 2024
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5">
              <img src={image1} alt="" />
              <div className="flex flex-col justify-between px-6 py-2 min-h-[138px] bg-white rounded-xl">
                <p className="font-sans font-medium text-lg lg:text-xl text-Neutral-600">
                  Some of trategies for Quickly Expanding Your Business.
                </p>
                <p className="font-sans font-normal text-base text-Neutral-400">
                  February 8, 2024
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5">
              <img src={image2} alt="" />
              <div className="flex flex-col justify-between px-6 py-2 min-h-[138px] bg-white rounded-xl">
                <p className="font-sans font-medium text-lg lg:text-xl text-Neutral-600">
                  Business strategy converging into a new approach for solving
                  business.
                </p>
                <p className="font-sans font-normal text-base text-Neutral-400">
                  January 16, 2024
                </p>
              </div>
            </div>
          </div>
          <div className="w-max rounded-full bg-Primary-600 hover:bg-Primary-400">
            <button className="font-sans font-medium text-base text-white px-8 py-4">
              Read More Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
