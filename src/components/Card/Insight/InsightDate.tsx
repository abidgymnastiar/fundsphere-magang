type InsightDateProps = {
  date: string;
};

function InsightDate({ date }: InsightDateProps) {
  return (
    <>
      <p className="font-sans font-normal text-base text-Neutral-400">
        {date}
      </p>
    </>
  );
}
export default InsightDate;
