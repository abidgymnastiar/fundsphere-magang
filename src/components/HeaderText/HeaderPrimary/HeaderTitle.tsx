interface HeaderTitleProps {
  title: string;
}

function HeaderTitle({title}:HeaderTitleProps) {
  return (
    <>
      <h2 className="normal-case font-sans font-bold text-[32px] lg:text-5xl leading-[38.4px] lg:leading-[57.6px] text-Neutral-600">
        {title}
      </h2>
    </>
  );
}
export default HeaderTitle;
