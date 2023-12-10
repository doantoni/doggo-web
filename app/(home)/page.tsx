import Navbar from "../components/Navbar";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import FifthSection from "./sections/FifthSection";
import SixthSection from "./sections/SixthSection";
import SeventhSection from "./sections/SeventhSection";
import EigthSection from "./sections/EigthSection";
import Footer from "../components/Footer";
import NavWrapper from "../components/NavWrapper";
import { NavEnum } from "../components/Navigation";
export default function Home() {
  return (
    <NavWrapper selected={NavEnum.NASLOVNA}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EigthSection />
      <Footer />
    </NavWrapper>
  );
}
