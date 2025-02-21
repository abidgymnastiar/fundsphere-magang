import image1 from "../../../assets/svg/testimony/Picture.svg";
import image2 from "../../../assets/svg/testimony/Picture-1.svg";
import TestimoniImage from "./TestimonyImage";
import TestimonyTitle from "./TestimonyTitle";
import TestimoniName from "./TestimonyName";
import TestimonyWork from "./TestimonyWork";
function CardTestimony() {
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
          <div
            key={index}
            className="flex flex-col gap-8 px-8 pt-8 pb-10 bg-Neutral-100 rounded-3xl  h-full max-h-[615px]"
          >
            <TestimoniImage src={stat.image} />
            <div className="flex flex-col gap-6 h-full justify-between">
              <TestimonyTitle title={stat.title} />
              <div className="flex flex-col gap-1 ">
                <TestimoniName namePerson={stat.name} />
                <TestimonyWork
                  position={stat.position}
                  location={stat.location}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default CardTestimony;
