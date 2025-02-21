import ButtonDark from "../../Button/Secondary/ButtonDark";
import ButtonLight from "../../Button/Secondary/ButtonLight";
import HeaderSecondary from "../../HeaderText/HeaderSecondary";
import PricingFeature from "./PricingFeatures";
import PricingPrice from "./PricingPrice";
interface SectionToggleProps {
  isAnnual: boolean;
}

function CardPricing({ isAnnual }: SectionToggleProps) {
  const statsData = [
    {
      title: "Basic",
      description: "Kickstart product research in your business at no cost.",
      price: 199,
      features: ["Unlimited workspace", "Access to RestAPI"],
      theme: "light",
    },
    {
      title: "Pro",
      description:
        "Fuel your product workflow with more advanced research features",
      price: 250,
      features: [
        "Unlimited workspace",
        "Access to RestAPI",
        "Priority Customer Support",
        "Real-Time Analytics",
      ],
      theme: "dark",
    },
    {
      title: "Enterprises",
      description: "Scale product research and learning across your company.",
      price: 250,
      features: [
        "Unlimited workspace",
        "Access to RestAPI",
        "Priority Customer Support",
        "Real-Time Analytics",
        "Data Export Capabilities",
        "Advanced Security",
        "Multi-User Access",
      ],
      theme: "light",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {statsData.map((stat, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col px-10 py-8 gap-12 lg:gap-0 ${
                stat.theme == "light" ? "bg-Neutral-100" : "bg-Neutral-600"
              }  rounded-3xl  ${
                stat.theme == "light" ? "border" : "border-none"
              } border-Primary-600 lg:min-h-[685px] justify-between`}
            >
              <div className="flex flex-col gap-8">
                <HeaderSecondary
                  title={stat.title}
                  description={stat.description}
                  theme={stat.theme}
                  gap="medium"
                />
                <PricingFeature features={stat.features} theme={stat.theme} />
              </div>
              <div className="flex flex-col gap-6">
                <PricingPrice isAnnual={isAnnual} price={stat.price} />
                <div>
                  {stat.theme == "light" ? (
                    <ButtonLight text={"Book Demo"} />
                  ) : (
                    <ButtonDark text={"Book Demo"} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardPricing;
