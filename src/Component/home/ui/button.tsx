interface SectionHeaderProps {
  button: string;
}

const SectionButton: React.FC<SectionHeaderProps> = ({ button }) => {
  return (
    <div className="w-max bg-Primary-600 rounded-full">
      <button className="capitalize font-sans font-medium text-base text-white px-8 py-4">
        {button}
      </button>
    </div>
  );
};

export default SectionButton;
