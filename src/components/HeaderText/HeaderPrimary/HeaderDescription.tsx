interface HeaderDescriptionProps {
  description: string;
}

function HeaderDescription({ description }: HeaderDescriptionProps) {
  return (
    <>
      <p className="normal-case font-sans text-base lg:text-lg text-Neutral-400">
        {description}
      </p>
    </>
  );
}
export default HeaderDescription;
