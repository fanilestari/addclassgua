import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import { NavbarComponents } from '@/components/Navbar/NavbarComponents';

export default function Home() {
  return (
    <main>
      <NavbarComponents />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
