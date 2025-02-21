interface TestimonyNameProps {
  namePerson: string;
}

function TestimoniName({ namePerson }: TestimonyNameProps) {
  return (
    <>
      <p className="font-sans font-medium text-base lg:text-xl">{namePerson}</p>
    </>
  );
}
export default TestimoniName;
