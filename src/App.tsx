import "./App.css";

import Header from "./Component/home/header";
import Navbar from "./Component/navbar";

function App() {
  return (
    <>
      <div className="w-full h-full ">
        <Navbar />
        <Header />
      </div>
    </>
  );
}

export default App;
