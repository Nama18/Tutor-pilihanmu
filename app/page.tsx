import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Subjects from "@/components/Subjects";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        <Programs />
        <Subjects />
        <Features />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomNav />
    </>
  );
}
