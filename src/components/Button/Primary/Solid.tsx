interface SectionStaticNavProps {
  text: string;
}

function SectionSolidNav({ text }: SectionStaticNavProps) {
  return (
    <>
      <div className="bg-Primary-600 hover:bg-Primary-400 rounded-full">
        <button className="font-sans font-medium text-base text-white px-8 py-3">
          {text}
        </button>
      </div>
    </>
  );
}

export default SectionSolidNav;
