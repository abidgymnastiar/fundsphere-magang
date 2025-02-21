import Features from "./featuress";
import Hero from "./heroo";
import Insight from "./Insight";
import News from "./newss";
import Pricing from "./Pricing";
import Testimony from "./testimonii";

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
