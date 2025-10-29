import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Location />
      <Gallery />
      <Reviews />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
