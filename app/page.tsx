"use client";

import { useState } from "react";
import Footer from "./components/footer";
import MyModal from "./components/modal";
import HeroSection from "./components/hero";
import StatsSection from "./components/stats";
import MissionVisionSection from "./components/missionVision";
import ProblemSection from "./components/problem";
import SolutionSection from "./components/solution";
import AiChatMockSection from "./components/aiChatMock";
import ProductPreviewSection from "./components/productPreview";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <main id="rootElement" className="flex w-full flex-col">
      <HeroSection onRequestAccess={() => setModalIsOpen(true)} />
      <StatsSection />
      <MissionVisionSection />
      <ProblemSection />
      <SolutionSection />
      <AiChatMockSection />
      <ProductPreviewSection />
      <Footer />
      {modalIsOpen && (
        <MyModal
          isOpen
          closeModal={() => setModalIsOpen(false)}
        />
      )}
    </main>
  );
}
