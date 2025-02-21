import Button from "../../components/Button/Default";
import CardFeature from "../../components/Card/CardFeatures";
import Header from "../../components/HeaderText/HeaderPrimary";

function Features() {
  return (
    <div className="container  max-w-[1200px] px-5 lg:px-none mx-auto py-10 lg:py-20">
      <div className="flex flex-col gap-14 lg:gap-12">
        {/* header */}
        <Header
          label="FEATURES"
          title="Features designed for you"
          description="Growth-accelerating products for startups, ecommerce stores, angel investors, & more."
          position="center"
        />
        {/* content */}
        <div className="flex flex-col items-center gap-14 lg:gap-12">
          <CardFeature />
          <Button text="See More Features" />
        </div>
      </div>
    </div>
  );
}

export default Features;
