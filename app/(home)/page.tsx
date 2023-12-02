import Navbar from "../components/Navbar";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import FifthSection from "./sections/FifthSection";
import SixthSection from "./sections/SixthSection";
export default function Home() {
  return (
    <div className="w-screen">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
}
