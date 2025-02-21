import image1 from "../../../assets/svg/features/Picture2.svg";
import image2 from "../../../assets/svg/features/Picture-1.svg";
import HeaderSecondary from "../../HeaderText/HeaderSecondary";
import Image from "./FeatureImage";

function CardFeature() {
  const statsData = [
    {
      title: "Pay with Fundsphere, quick, simple and easy",
      description:
        " Use Fundsphere to pay to a merchant and enjoy optimal payment user experience.",
      image: image1,
    },
    {
      title: "Bank-level Security",
      description:
        "Personal information is encrypted and protected by industry standard banking security.",
      image: image2,
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {statsData.map((stat, index) => (
        <div key={index}>
          <div className="flex flex-col justify-between gap-8 px-8 py-10 bg-Neutral-100 rounded-lg h-full max-h-[510px]">
            <HeaderSecondary
              title={stat.title}
              description={stat.description}
            />
            <Image src={stat.image}/>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CardFeature;
