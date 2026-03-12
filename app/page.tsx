import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import ROICalculator from "@/components/ROICalculator";
import HowItWorks from "@/components/HowItWorks";
import UrgencyBanner from "@/components/UrgencyBanner";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CalEmbed from "@/components/CalEmbed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <ROICalculator />
        <HowItWorks />
        <UrgencyBanner />
        <Reviews />
        <FAQ />
        <CalEmbed />
      </main>
      <Footer />
    </>
  );
}
