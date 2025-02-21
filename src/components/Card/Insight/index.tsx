import image from "../../../assets/svg/Insight/Graphic.svg";
import image1 from "../../../assets/svg/Insight/Graphic-1.svg";
import image2 from "../../../assets/svg/Insight/Graphic-2.svg";
import InsightImage from "./InsightImage";
import InsightTitle from "./InsightTitle";
import InsightDate from "./InsightDate";

function CardInsight() {
  const statsData = [
    {
      image: image,
      title: "Online Payment Failure: Why it Happens and How to Avoid it.",
      date: "January 4, 2024",
    },
    {
      image: image1,
      title: "Some of trategies for Quickly Expanding Your Business.",
      date: "February 8, 2024",
    },
    {
      image: image2,
      title:
        "Business strategy converging into a new approach for solving business.",
      date: "January 16, 2024",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {statsData.map((stat, index) => (
          <div key={index}>
            <div className="flex flex-col justify-center gap-5">
              <InsightImage src={stat.image} />
              <div className="flex flex-col justify-between px-6 py-2 min-h-[138px] bg-white rounded-xl">
                <InsightTitle title={stat.title} />
                <InsightDate date={stat.date} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardInsight;
