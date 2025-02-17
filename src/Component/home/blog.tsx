import SectionHeader from "./ui/header";
import pattern from "../../assets/svg/blog/Pattern.svg";
import SectionCardBlog from "./ui/card_blog";
import SectionButton from "./ui/button";

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
          <SectionCardBlog />
          <SectionButton button="See More Articles" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
