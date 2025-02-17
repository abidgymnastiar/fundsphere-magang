interface SectionStaticNavProps {
  text: string;
}

function SectionStaticNav({ text }: SectionStaticNavProps) {
  return (
    <>
      <div className="bg-white hover:border hover:border-Primary-400 rounded-full">
        <button className="font-sans font-medium text-base text-Primary-600 hover:text-Primary-400 px-8 py-3">
          {text}
        </button>
      </div>
    </>
  );
}

export default SectionStaticNav;
