interface SectionHeaderProps {
  label: string;
}

const SectionLabel: React.FC<SectionHeaderProps> = ({ label }) => (
  <>
    {label ? (
      <div className="w-max px-4 py-2 rounded-[20px] bg-Primary-600/10">
        <p className="uppercase font-sans font-normal text-sm text-Primary-600">
          {label}
        </p>
      </div>
    ) : (
      <p>No label provided</p>
    )}
  </>
);

export default SectionLabel;
