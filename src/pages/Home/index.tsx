import Blog from "./blog";
import Features from "./features";
import Hero from "./hero";
import News from "./news";
import Plan from "./plan";
import Testimony from "./testimoni";

function Home() {
  return (
    <>
      <div className="h-full w-full">
        <Hero />
        <News />
        <Features />
        <Plan />
        <Blog />
        <Testimony />
      </div>
    </>
  );
}

export default Home;
