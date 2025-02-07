import "./App.css";
import Blog from "./Component/home/blog";
import Features from "./Component/home/features";
import Hero from "./Component/home/hero";
import Iklan from "./Component/home/iklan";
import Navbar from "./Component/navbar";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <Navbar />
        <Hero />
        <Iklan />
        <Features />
        <Blog />
      </div>
    </>
  );
}

export default App;
