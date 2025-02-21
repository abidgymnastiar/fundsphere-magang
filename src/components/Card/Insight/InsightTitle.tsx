interface InsightTitleProps {
  title: string;
}

function InsightTitle({ title }: InsightTitleProps) {
  return (
    <>
      <p className="font-sans font-medium text-lg lg:text-xl text-Neutral-600">
        {title}
      </p>
    </>
  );
}
export default InsightTitle;
