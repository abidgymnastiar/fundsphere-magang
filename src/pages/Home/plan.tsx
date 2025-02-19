import { useState } from "react";
import SectionHeader from "../../components/HeaderText";
import SectionTogle from "../../components/Toggle";
import SectionCradPlan from "../../components/Card/card_plan";

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
          <SectionTogle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
          {/* card */}
          <SectionCradPlan isAnnual={isAnnual} />
        </div>
      </div>
    </div>
  );
}
export default Plan;
