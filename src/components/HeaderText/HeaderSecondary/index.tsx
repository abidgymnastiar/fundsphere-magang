interface HeaderSecondaryProps {
  title: string;
  description: string;
  theme?: string;
  gap?: string;
}

function HeaderSecondary({
  title,
  description,
  theme = "light",
  gap = "small",
}: HeaderSecondaryProps) {
  return (
    <div
      className={`flex flex-col ${
        gap == "small" ? "gap-2" : "gap-2 lg:gap-6"
      } `}
    >
      <h3
        className={`font-sans font-bold text-3xl ${
          theme == "light" ? "text-Neutral-600" : "text-white"
        }`}
      >
        {title}
      </h3>
      <p
        className={`normal-case font-sans font-normal text-base lg:text-lg ${
          theme == "light" ? "text-Neutral-300" : "text-Neutral-400"
        } `}
      >
        {description}
      </p>
    </div>
  );
}
export default HeaderSecondary;
