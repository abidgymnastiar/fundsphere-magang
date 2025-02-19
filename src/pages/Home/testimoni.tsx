import star from "../../assets/svg/testimony/Star.svg";
import SectionButton from "../../components/Button/Default";
import SectionCardTestimony from "../../components/Card/card_testimony";
import SectionHeader from "../../components/HeaderText";

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
        <SectionCardTestimony />
        <SectionButton button="Read More Article" />
      </div>
    </div>
  );
}

export default Testimony;
