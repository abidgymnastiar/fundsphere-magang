interface ImageProps {
  src: string;
  alt?: string;
}

function FeatureImage({ src, alt = "Feature Image" }: ImageProps) {
  return (
    <>
      <img src={src} alt={alt} />
    </>
  );
}
export default FeatureImage;
