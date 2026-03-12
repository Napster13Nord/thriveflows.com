import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import VideoSection from "@/components/VideoSection";
import ROICalculator from "@/components/ROICalculator";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import UrgencyBanner from "@/components/UrgencyBanner";
import CalEmbed from "@/components/CalEmbed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reviews />
        <VideoSection />
        <ROICalculator />
        <HowItWorks />
        <FAQ />
        <UrgencyBanner />
        <CalEmbed />
      </main>
      <Footer />
    </>
  );
}
