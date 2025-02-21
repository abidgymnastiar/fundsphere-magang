import Features from "./Features";
import Hero from "./hero";
import Insight from "./Insight";
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
