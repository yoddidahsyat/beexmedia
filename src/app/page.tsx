import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CaseStudy from "@/components/CaseStudy";
import BtsLab from "@/components/BtsLab";
import Disciplines from "@/components/Disciplines";
import Dispatch from "@/components/Dispatch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full relative z-10">
        <div className="flex flex-col w-full text-on-surface">
          <Hero />
          <Stats />
          <CaseStudy />
          <BtsLab />
          <Disciplines />
          <Dispatch />
        </div>
      </main>
      <Footer />
    </>
  );
}
