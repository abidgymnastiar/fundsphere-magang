import image from "../../assets/svg/blog/Graphic.svg";
import image1 from "../../assets/svg/blog/Graphic-1.svg";
import image2 from "../../assets/svg/blog/Graphic-2.svg";

function SectionCardBlog() {
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
              <img src={stat.image} alt="" />
              <div className="flex flex-col justify-between px-6 py-2 min-h-[138px] bg-white rounded-xl">
                <p className="font-sans font-medium text-lg lg:text-xl text-Neutral-600">
                  {stat.title}
                </p>
                <p className="font-sans font-normal text-base text-Neutral-400">
                  {stat.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionCardBlog;
