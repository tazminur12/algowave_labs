import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
// import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Clients />
        <Services />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        {/* <Testimonials /> */}
        
      </main>
      <Footer />
    </div>
  );
}
