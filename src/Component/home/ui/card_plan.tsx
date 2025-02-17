import icon from "../../../assets/svg/icon/Icon.svg";
import SectionButtonDark from "./button/button_dark";
import SectionButtonLight from "./button/button_light";
interface SectionToggleProps {
  isAnnual: boolean;
}

function SectionCradPlan({ isAnnual }: SectionToggleProps) {
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
          const finalPrice = isAnnual ? stat.price * 12 : stat.price;
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
                <div className="flex flex-col gap-6">
                  <h3
                    className={`font-sans font-bold text-3xl ${
                      stat.theme == "light" ? "text-Neutral-600" : "text-white"
                    } `}
                  >
                    {stat.title}
                  </h3>
                  <p className="font-sans font-normal text-lg text-Neutral-300">
                    {stat.description}
                  </p>
                </div>
                <ul className="space-y-4">
                  {stat.features.map((plan, idx) => (
                    <li key={idx}>
                      <div className="flex flex-row gap-4">
                        <img src={icon} alt="" />
                        <p
                          className={`font-sans font-normal text-lg ${
                            stat.theme == "light"
                              ? "text-Neutral-600"
                              : "text-white"
                          } `}
                        >
                          {plan}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-2 items-end">
                  <h1 className="font-sans font-bold text-6xl text-Primary-600">
                    ${finalPrice}
                  </h1>
                  <p className="font-sans font-normal text-sm text-Neutral-300">
                    / month
                  </p>
                </div>
                <div className="">
                  {stat.theme == "light" ? (
                    <SectionButtonLight text={"Book Demo"} />
                  ) : (
                    <SectionButtonDark text={"Book Demo"} />
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

export default SectionCradPlan;
