import { About } from "@/components/About";
import { ContactCTA } from "@/components/ContactCTA";
import { FloatingSideBox } from "@/components/FloatingSideBox";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileContactBar } from "@/components/MobileContactBar";
import { Services } from "@/components/Services";
import { WhySanova } from "@/components/WhySanova";

export default function Home() {
  return (
    <>
      <Header />
      <main id="icerik">
        <Hero />
        <Services />
        <About />
        <WhySanova />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingSideBox />
      <MobileContactBar />
    </>
  );
}
