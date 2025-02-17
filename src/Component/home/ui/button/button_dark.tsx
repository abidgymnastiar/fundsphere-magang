function SectionButtonDark({ text }: { text: string }) {
  return (
    <>
      <div className="bg-Primary-600 hover:bg-white rounded-full transition-all">
        <button className="font-sans font-medium text-base text-white py-4 w-full hover:text-Neutral-600">
          {text}
        </button>
      </div>
    </>
  );
}
export default SectionButtonDark;
