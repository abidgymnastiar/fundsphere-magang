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
    <div className="flex flex-col gap-4 max-w-[479px] mx-auto items-center text-center">
      <div className="w-max px-4 py-2 rounded-[20px] bg-Primary-600/10">
        <p className="uppercase font-sans font-normal text-sm text-Primary-600">
          {label}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="normal-case font-sans font-bold text-5xl text-Neutral-600">
          {title}
        </h2>
        <p className="normal-case font-sans text-lg text-Neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
