interface ButtonDefaultProps {
  text: string;
  gap?: string;
}

function ButttonDefault({ text, gap = "small" }: ButtonDefaultProps) {
  return (
    <div className="w-max bg-Primary-600 rounded-full hover:bg-Primary-400">
      <button
        className={`capitalize font-sans font-medium text-base text-white  ${
          gap == "small" ? "  px-8 py-3 md:py-4" : "px-8 py-4"
        }`}
      >
        {text}
      </button>
    </div>
  );
}
export default ButttonDefault;
