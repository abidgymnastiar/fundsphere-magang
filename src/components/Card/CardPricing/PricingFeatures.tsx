import Icon from "../../../assets/svg/icon/Icon.svg";

interface PricingFeatureProps {
  features: string[];
  theme?: string;
}

function PricingFeature({ features, theme = "light" }: PricingFeatureProps) {
  return (
    <>
      <ul className="space-y-4">
        {features.map((features, idx) => (
          <li key={idx}>
            <div className="flex flex-row gap-4">
              <img src={Icon} alt="" />
              <p
                className={`font-sans font-normal text-lg ${
                  theme == "light" ? "text-Neutral-600" : "text-white"
                } `}
              >
                {features}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default PricingFeature;
