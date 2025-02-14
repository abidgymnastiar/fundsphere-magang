const SectionPresentation = () => {
  const statsData = [
    { value: "10%", label: "Beneficial Cashback" },
    { value: "7M", label: "Satisfied Customer" },
    { value: "40+", label: "Country Available" },
  ];

  return (
    <div className="flex flex-row justify-between">
      {statsData.map((stat, index) => (
        <div key={index} className="gap-2 text-center">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-Primary-600">
            {stat.value}
          </h2>
          <p className="font-sans text-sm lg:text-base text-Neutral-300">
            {stat.label.split(" ").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionPresentation;
