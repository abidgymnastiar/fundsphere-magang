import sosmet from "../../../assets/svg/SvgFooter/Facebook.svg";
import sosmet1 from "../../../assets/svg/SvgFooter/Twitter.svg";
import sosmet2 from "../../../assets/svg/SvgFooter/in.svg";

function ContentCopyright() {
  return (
    <>
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
    </>
  );
}
export default ContentCopyright;
