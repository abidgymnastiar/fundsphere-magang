import "./App.css";
import Blog from "./Component/home/blog";
import Features from "./Component/home/features";
import Hero from "./Component/home/hero";
import Iklan from "./Component/home/news";
import Navbar from "./Component/navbar";
import Plan from "./Component/home/plan";
import Testimony from "./Component/home/testimoni";
import Footer from "./Component/footer";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <Navbar />
        <Hero />
        <Iklan />
        <Features />
        <Plan />
        <Blog />
        <Testimony />
        <Footer />
      </div>
    </>
  );
}

export default App;
