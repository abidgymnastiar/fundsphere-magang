interface InsightImageProps {
  src: string;
}

function InsightImage({ src }: InsightImageProps) {
  return (
    <>
      <img src={src} alt="" />
    </>
  );
}
export default InsightImage;
