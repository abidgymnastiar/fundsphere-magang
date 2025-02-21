import Label from "../Bedge/Label";

function HeroHeader() {
  return (
    <>
    <div className="flex flex-col gap-4 lg:gap-8 "></div>
      <Label label="best choice" />
      <div className="flex flex-col gap-4 mx-w-[335px] md:max-w-[480px]">
        <h1 className="normal-case font-sans font-bold text-4xl lg:text-5xl leading-10 lg:leading-[60px] text-Neutral-600">
          Future strategic finance for <br />
          <span className="normal-case text-Primary-600">Entrepreneurs</span>
        </h1>
        <div className="max-w-[460px]">
          <p className="normal-case font-sans text-lg lg:text-xl leading-8 text-Neutral-400">
            Scale with checking and savings accounts, custom tools, and access
            to our investor network.
          </p>
        </div>
      </div>
    </>
  );
}
export default HeroHeader;
