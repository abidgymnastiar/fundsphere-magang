import Content from "./Content/content";
import CTA from "./CTA/cta";

function Footer() {
  return (
    <>
      <div className="relative bg-Neutral-600 pb-14">
        <div className="absolute h-[240px] w-full z-0 bg-white"></div>
        <div className="z-1 relative flex flex-col gap-24 ">
          <CTA />
          <Content />
        </div>
      </div>
    </>
  );
}
export default Footer;
