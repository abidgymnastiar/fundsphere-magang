import image1 from "../../../assets/svg/testimony/Picture.svg";
import image2 from "../../../assets/svg/testimony/Picture-1.svg";
function SectionCardTestimony() {
  const statsData = [
    {
      image: image1,
      title:
        "Simple, seamless processing. Payroll reduces the number of third parties we work with.",
      name: "Maria Evelyn",
      position: "Project Manager",
      location: "Stripe",
    },
    {
      image: image2,
      title: "Simplified processes, reduced costs. Highly recommend",
      name: "John Smith",
      position: "Operations Manager",
      location: "Ebay",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col gap-8 py-8 px-10">
            <div className="">
              <img src={stat.image} alt="" />
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-sans font-bold text-xl lg:text-3xl text-Neutral-600">
                {stat.title}
              </h3>
              <div className="flex flex-col gap-1">
                <p className="font-sans font-medium text-base lg:text-xl">
                  {stat.name}
                </p>
                <p className="font-sans font-normal text-base lg:text-lg">
                  <span className="text-sm">{stat.position} at </span>
                  {stat.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default SectionCardTestimony;
