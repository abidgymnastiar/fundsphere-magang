import image1 from "../../../assets/svg/features/Picture.svg";
import image2 from "../../../assets/svg/features/Picture-1.svg";
function SectionCartFeature() {
  const statsData = [
    {
      title: "Pay with Fundsphere, quick, simple and easy",
      descriptiom:
        " Use Fundsphere to pay to a merchant and enjoy optimal payment user experience.",
      image: image1,
    },
    {
      title: "Bank-level Security",
      descriptiom:
        "Personal information is encrypted and protected by industry standard banking security.",
      image: image2,
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {statsData.map((stat, index) => (
        <div key={index}>
          <div className="flex flex-col justify-between gap-8 px-8 py-10 bg-Neutral-100 rounded-lg h-full max-h-[510px]">
            <div className="flex flex-col gap-2">
              <h3 className="normal-case font-sans font-bold text-2xl lg:text-3xl text-Neutral-600">
                {stat.title}
              </h3>
              <p className="normal-case font-sans font-normal text-base lg:text-lg text-Neutral-400">
                {stat.descriptiom}
              </p>
            </div>
            <div className="">
              <img src={stat.image} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default SectionCartFeature;
