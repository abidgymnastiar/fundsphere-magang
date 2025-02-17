import background from "../../assets/svg/footer/Pattern.svg";
import Sectionformemail from "../home/ui/form_email";

function CTA() {
  return (
    <>
      <div className="px-5 lg:px-0">
        <div
          className="container  max-w-[1200px] mx-auto px-5 lg:px-0 py-12 bg-Primary-600 bg-cover rounded-3xl"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="flex flex-col max-w-[504px] items-center mx-auto gap-6">
            <div>
              <h2 className="font-sans font-bold text-3xl lg:text-5xl text-white text-center leading-9 lg:leading-[57px]">
                Get started today for better future finance
              </h2>
            </div>
            <div>
              <p className="font-sans font-normal text-base lg:text-lg text-center text-Neutral-100">
                Fundsphere is a compass for business leaders, scale with
                checking and savings accounts, custom tools, and access to our
                investor network.
              </p>
            </div>
            <div className="w-full max-w-[412px]">
              <Sectionformemail />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CTA;
