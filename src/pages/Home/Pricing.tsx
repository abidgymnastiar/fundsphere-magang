import { useState } from "react";
import Header from "../../components/HeaderText/HeaderPrimary";
import Togle from "../../components/Toggle";
import CradPlan from "../../components/Card/CardPricing";

function Plan() {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <div className="container  max-w-[1200px] mx-auto px-5 lg-px-none py-20">
      <div className="flex flex-col gap-10">
        <Header
          label="PRICING PLAN"
          title="Choose Package"
          description="Join our pro features for unlimited without any contract and cancel anytime."
        />
        <div className="flex flex-col gap-10">
          <Togle
            isAnnual={isAnnual}
            position="left"
            setIsAnnual={setIsAnnual}
          />
          <CradPlan isAnnual={isAnnual} />
        </div>
      </div>
    </div>
  );
}
export default Plan;
