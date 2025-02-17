function Sectionformemail() {
  return (
    <>
      <div className=" flex flex-row justify-between w-full border-2 rounded-full py-1 pr-1 pl-8 bg-white border-Neutral-200">
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Your work email"
          className="w-full flex-1 normal-case font-sans text-base text-Neutral-400 bg-transparent focus:outline-none "
        />
        <div className="inline-block flex-none rounded-full bg-Primary-600 hover:bg-Primary-400">
          <button
            type="submit"
            className=" capitalize font-sans font-normal text-base text-white py-3 px-8 lg:py-4"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
export default Sectionformemail;
