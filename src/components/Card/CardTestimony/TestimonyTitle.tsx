interface TestimonyTitleProps {
    title: string;
}

function TestimonyTitle({ title }: TestimonyTitleProps) {
  return (
    <>
      <h3 className="font-sans font-bold text-xl lg:text-3xl text-Neutral-600">
        {title}
      </h3>
    </>
  );
}
export default TestimonyTitle;
