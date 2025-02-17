import { useState } from "react";
import SectionHeader from "./ui/header";
import SectionCradPlan from "./ui/card_plan";

function Plan() {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <div className="container  max-w-[1200px] mx-auto px-5 lg-px-none py-20">
      <div className="flex flex-col gap-10 items-center">
        <SectionHeader
          label="PRICING PLAN"
          title="Choose Package"
          description="Join our pro features for unlimited without any contract and cancel anytime."
        />
        <div className="flex flex-col gap-10 items-center">
          {/* togle */}
          <div className="flex items-center gap-4">
            <span
              className={`font-sans font-normal text-base ${
                !isAnnual ? "text-Primary-600" : "text-Neutral-300"
              }`}
            >
              Monthly
            </span>
            <div
              className={`relative w-16 h-8 flex items-center bg-gray-300 rounded-full p-1 border border-Neutral-200 cursor-pointer transition-all ${
                isAnnual ? "bg-Neutral-100" : "bg-Neutral-300/5"
              }`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div
                className={`absolute w-6 h-6 bg-Primary-600 rounded-full shadow-md transform transition-all ${
                  isAnnual ? "translate-x-8" : "translate-x-0"
                }`}
              ></div>
            </div>
            <span
              className={`font-sans font-normal text-base ${
                isAnnual ? "text-Primary-600" : "text-Neutral-300"
              }`}
            >
              Yearly
            </span>
          </div>
          {/* card */}
          <SectionCradPlan />
        </div>
      </div>
    </div>
  );
}
export default Plan;
