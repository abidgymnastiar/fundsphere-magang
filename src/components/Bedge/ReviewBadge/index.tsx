import ratingstar from "../../../assets/svg/testimony/Star.svg";

function BadgeReview() {
  return (
    <>
      <div className="flex flex-col items-center gap-2 ">
        <div className="flex flex-row gap-3">
          <img src={ratingstar} alt="" />
          <p className="font-sans font-medium text-lg text-Neutral-600">4.9</p>
        </div>
        <p className="font-sans font-normal text-lg text-Neutral-400">
          REVIEW FROM TRUSTPILOT
        </p>
      </div>
    </>
  );
}
export default BadgeReview;
