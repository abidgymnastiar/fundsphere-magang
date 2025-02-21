import Data from "../../components/Data";
import FormEmail from "../../components/Form/FormEmail";
import HeroHeader from "../../components/Hero/HeroHeader";
import HeroImage from "../../components/Hero/HeroImage";
import bg1 from "../../assets/svg/Hero/Rectangle1.svg";
import bg2 from "../../assets/svg/Hero/Rectangle2.svg";

function Hero() {
  return (
    <>
      <div className="relative">
        <img
          src={bg1}
          alt=""
          className="absolute bottom-0 left-0 hidden md:block z-[-1]"
        />
        <img
          src={bg2}
          alt=""
          className="absolute right-0 bottom-0 hidden md:block z-[-1]"
        />

        <div className="container  max-w-[1200px] px-5 lg:px-full mx-auto pt-10 pb-14 lg:pt-16 lg:pb-28 z-10">
          <div className="grid grid-cols-1 md:grid-cols-[54%_43%] lg:grid-cols-[644px_482px]  justify-between items-center ">
            <HeroImage />
            <div className="flex flex-col gap-8 lg:gap-16">
              <div className="flex flex-col gap-6 lg:gap-8">
                <HeroHeader />
                <FormEmail />
              </div>
              <Data />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
