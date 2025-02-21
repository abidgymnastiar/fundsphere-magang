import SectionButton from "../../components/Button/Default";
import SectionCardFeature from "../../components/Card/CardFeatures";
import SectionHeader from "../../components/HeaderText/HeaderPrimary";

function Features() {
  return (
    <div className="container  max-w-[1200px] px-5 lg:px-none mx-auto py-10 lg:py-20">
      <div className="flex flex-col gap-14 lg:gap-12">
        {/* header */}
        <SectionHeader
          label="FEATURES"
          title="Features designed for you"
          description="Growth-accelerating products for startups, ecommerce stores, angel investors, & more."
          position="center"
        />
        {/* content */}
        <div className="flex flex-col items-center gap-14 lg:gap-12">
          <SectionCardFeature />
          <SectionButton text="See More Features" />
        </div>
      </div>
    </div>
  );
}

export default Features;
