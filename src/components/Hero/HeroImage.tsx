import image1 from "../../assets/svg/hero/img1.svg";
import image2 from "../../assets/svg/hero/Graphic.svg";
import image3 from "../../assets/svg/hero/Mask group.svg";
import image4 from "../../assets/svg/hero/Rectangle-6759.svg";

function HeroImage() {
  return (
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
  );
}
export default HeroImage;
