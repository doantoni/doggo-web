import Image from 'next/image';
import { cn } from '@/lib/utils';
import Navbar from '../components/Navbar';
import MainSection from './sections/MainSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';

export default function Home() {
  return (
    <div className="w-full h-screen bg-red-900">
      <Navbar />
      <MainSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
