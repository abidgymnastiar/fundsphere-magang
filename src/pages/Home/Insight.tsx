
import SectionButton from "../../components/Button/Default";
import SectionCardBlog from "../../components/Card/Insight";
import SectionHeader from "../../components/HeaderText/HeaderPrimary";
import pattern from "../../assets/svg/Insight/Pattern.svg";

function Insight() {
  return (
    <div className="relative bg-Neutral-100">
      <img src={pattern} className="absolute w-full" alt="" />
      <div className="container  max-w-[1200px] mx-auto px-5 lg:px-0 py-8 lg:py-20">
        <div className="flex flex-col gap-8 md:gap-20">
          <SectionHeader
            label="INSIGHT"
            title="Magazine"
            description="Find growth insight in our blog."
          />
          <div className="flex flex-col items-center gap-8 md:gap-20">
            <SectionCardBlog />
            <SectionButton text="See More Articles" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insight;
