interface TestimoniImageProps {
  src: string;
}

function TestimoniImage({ src }: TestimoniImageProps) { 
  return (
    <>
      <img src={src} alt="" />
    </>
  );
}
export default TestimoniImage;
