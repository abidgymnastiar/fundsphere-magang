interface InputProps {
  text: string;
}

function Input({ text }: InputProps) {
  return (
    <>
      <input
        id="email"
        name="email"
        type="text"
        placeholder={text}
        className="w-full flex-1 normal-case font-sans text-base text-Neutral-400 bg-transparent focus:outline-none "
      />
    </>
  );
}
export default Input;
