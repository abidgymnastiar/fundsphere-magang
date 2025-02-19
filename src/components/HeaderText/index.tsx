import SectionLabel from "../Bedge";

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4 max-w-[479px] items-center text-center">
      <SectionLabel label={label} />
      <div className="flex flex-col gap-2 lg:gap-4">
        <h2 className="normal-case font-sans font-bold text-[32px] lg:text-5xl leading-[38.4px] lg:leading-[57.6px] text-Neutral-600">
          {title}
        </h2>
        <p className="normal-case font-sans text-base lg:text-lg text-Neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
