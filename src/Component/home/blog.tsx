import SectionHeader from "./ui/header";
import pattern from "../../assets/svg/blog/Pattern.svg";
import SectionCardBlog from "./ui/card_blog";

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
          <div className="w-max rounded-full bg-Primary-600 hover:bg-Primary-400">
            <button className="font-sans font-medium text-base text-white px-8 py-4">
              Read More Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
