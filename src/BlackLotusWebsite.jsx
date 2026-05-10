import { useState } from "react";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import MissionSection from "./components/MissionSection";
import ProgramsSection from "./components/ProgramsSection";
import PlatformSection from "./components/PlatformSection";
import ImpactSection from "./components/ImpactSection";
import StoriesSection from "./components/StoriesSection";
import FounderTimeline from "./components/FounderTimeline";
import NationalMovementSection from "./components/NationalMovementSection";
import SponsorCalculator from "./components/SponsorCalculator";
import Footer from "./components/Footer";

export default function BlackLotusWebsite() {
  const [lang, setLang] = useState("en");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060507] text-white selection:bg-amber-300 selection:text-black">
      {/* Global ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(185,134,11,0.15),transparent_50%),radial-gradient(ellipse_at_80%_0%,rgba(109,40,217,0.12),transparent_50%),radial-gradient(ellipse_at_50%_100%,rgba(109,40,217,0.08),transparent_50%)]" />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.018) 1px,transparent 1px)", backgroundSize: "40px 40px" }}
        />
      </div>

      <Nav lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <StatsSection lang={lang} />
      <MissionSection lang={lang} />
      <ProgramsSection lang={lang} />
      <PlatformSection lang={lang} />
      <ImpactSection lang={lang} />
      <StoriesSection lang={lang} />
      <FounderTimeline lang={lang} />
      <NationalMovementSection lang={lang} />
      <SponsorCalculator lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
