import background from "../../../assets/svg/footer/Pattern.svg";
import FormEmail from "../../Form/FormEmail";
import CtaDescription from "./CtaDescription";
import CtaTitle from "./CtaTitle";

function CTA() {
  return (
    <>
      <div className="px-5 lg:px-0">
        <div
          className="container  max-w-[1200px] mx-auto px-5 lg:px-0 py-12 bg-Primary-600 bg-cover rounded-3xl"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="flex flex-col max-w-[504px] items-center mx-auto gap-6">
            <CtaTitle />
            <CtaDescription />
            <div className="w-full max-w-[412px]">
              <FormEmail />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CTA;
