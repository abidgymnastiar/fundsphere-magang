function SectionButtonLight({ text }: { text: string }) {
  return (
    <>
      <div className="border border-Primary-600 rounded-full hover:bg-Primary-600  transition-all">
        <button className="font-sans font-medium text-base text-Neutral-600 py-4 w-full hover:text-white">
          {text}
        </button>
      </div>
    </>
  );
}
export default SectionButtonLight;
