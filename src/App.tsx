import "./App.css";
import Hero from "./Component/home/hero";
import Navbar from "./Component/navbar";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <Navbar />
        <div className="pt-9"></div>
        <Hero />
      </div>
    </>
  );
}

export default App;
