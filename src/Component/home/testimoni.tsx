import SectionHeader from "./ui/header";
import star from "../../assets/svg/testimony/Star.svg";
import image1 from "../../assets/svg/testimony/Picture.svg";
import image2 from "../../assets/svg/testimony/Picture-1.svg";
import SectionButton from "./ui/button";

function Testimony() {
  return (
    <div className="container  max-w-[1200px] mx-auto px-5 lg:px-0 py-16 lg:py-20">
      <div className="flex flex-col gap-14 items-center">
        <div className="flex flex-col gap-6">
          <SectionHeader
            label="TESTIMONY"
            title="What others are saying about Us"
            description="Join hundreds of companies embracing Strategic Finance with Fundsphere."
          />
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-row gap-3">
              <img src={star} alt="" />
              <p className="font-sans font-medium text-lg text-Neutral-600">
                4.9
              </p>
            </div>
            <p className="font-sans font-normal text-lg text-Neutral-400">
              REVIEW FROM TRUSTPILOT
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8 py-8 px-10">
            <div className="">
              <img src={image1} alt="" />
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-sans font-bold text-xl lg:text-3xl text-Neutral-600">
                “Simple, seamless processing. Payroll reduces the number of
                third parties we work with.“
              </h3>
              <div className="flex flex-col gap-1">
                <p className="font-sans font-medium text-base lg:text-xl">Maria Evelyn</p>
                <p className="font-sans font-normal text-base lg:text-lg">
                  <span className="text-sm">Project Manager at </span>Stripe
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 py-8 px-10">
            <div className="">
              <img src={image2} alt="" />
            </div>
            <div className="flex flex-col gap-6 justify-between md:min-h-[199px]">
              <h3 className="font-sans font-bold text-xl lg:text-3xl text-Neutral-600">
                “Simplified processes, reduced costs. Highly recommend”
              </h3>
              <div className="flex flex-col gap-1">
                <p className="font-sans font-medium text-base lg:text-xl">John Smith</p>
                <p className="font-sans font-normal text-base lg:text-lg">
                  <span className="text-sm">Operations Manager at </span>Ebay
                </p>
              </div>
            </div>
          </div>
        </div>
        <SectionButton button="Read More Article" />
      </div>
    </div>
  );
}

export default Testimony;
