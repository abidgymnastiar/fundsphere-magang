import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface MainLayoutsProps {
  children: ReactNode;
}

function MainLayouts({ children }: MainLayoutsProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default MainLayouts;
