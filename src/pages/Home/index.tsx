import Insight from "./Insight";
import Features from "./Features";
import Hero from "./Hero";
import News from "./News";
import Pricing from "./Pricing";
import Testimony from "./Testimoni";


function Home() {
  return (
    <>
      <div className="h-full w-full">
        <Hero />
        <News />
        <Features />
        <Pricing />
        <Insight />
        <Testimony />
      </div>
    </>
  );
}

export default Home;
