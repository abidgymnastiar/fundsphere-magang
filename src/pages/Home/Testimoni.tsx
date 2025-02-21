import Button from "../../components/Button/Default";
import CardTestimony from "../../components/Card/CardTestimony";
import SectionHeader from "../../components/HeaderText/HeaderPrimary";
import BedgeReview from "../../components/Bedge/ReviewBadge";

function Testimony() {
  return (
    <div className="container  max-w-[1200px] mx-auto px-5 lg:px-0 py-16 lg:py-20">
      <div className="flex flex-col gap-[60px] items-center">
        <div className="flex flex-col gap-6">
          <SectionHeader
            label="TESTIMONY"
            title="What others are saying about Us"
            description="Join hundreds of companies embracing Strategic Finance with Fundsphere."
            width="max-w-[371px]"
            show="hidden"
          />
          <div className="hidden lg:block">
            <BedgeReview />
          </div>
        </div>
        <CardTestimony />
        <div className="hidden md:block">
          <Button text="Read More Article" />
        </div>
      </div>
    </div>
  );
}

export default Testimony;
