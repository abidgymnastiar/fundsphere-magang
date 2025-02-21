
interface SectionToggleProps {
  isAnnual: boolean;
  position?: string;
  setIsAnnual: (value: boolean) => void;
}

function SectionTogle({ isAnnual, position = "left", setIsAnnual }: SectionToggleProps) {
  return (
    <>
      <div className={`flex gap-4 ${position == "left" ? "justify-start md:justify-center" : "justify-center"}`}>
        <span
          className={`font-sans font-normal text-base ${
            !isAnnual ? "text-Primary-600" : "text-Neutral-300"
          }`}
        >
          Monthly
        </span>
        <div
          className={`relative w-16 h-8 flex items-center bg-gray-300 rounded-full p-1 border border-Neutral-200 cursor-pointer transition-all ${
            isAnnual ? "bg-Neutral-100" : "bg-Neutral-300/5"
          }`}
          onClick={() => setIsAnnual(!isAnnual)}
        >
          <div
            className={`absolute w-6 h-6 bg-Primary-600 rounded-full shadow-md transform transition-all ${
              isAnnual ? "translate-x-8" : "translate-x-0"
            }`}
          ></div>
        </div>
        <span
          className={`font-sans font-normal text-base ${
            isAnnual ? "text-Primary-600" : "text-Neutral-300"
          }`}
        >
          Yearly
        </span>
      </div>
    </>
  );
}
export default SectionTogle;
