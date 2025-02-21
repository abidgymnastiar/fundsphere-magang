import Features from "./features";
import Hero from "./hero";
import Insight from "./Insight";
import News from "./news";
import Pricing from "./Pricing";
import Testimony from "./testimoni";

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
