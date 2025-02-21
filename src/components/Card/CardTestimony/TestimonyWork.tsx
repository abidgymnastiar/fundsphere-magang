

interface TestimonyWorkProps {
  position: string;
  location: string;
}

function TestimonyWork({ position, location }: TestimonyWorkProps) {
  return (
    <>
      <p className="font-sans font-normal text-base lg:text-lg">
        <span className="text-sm">{position} at </span>
        {location}
      </p>
    </>
  );
}

export default TestimonyWork;
