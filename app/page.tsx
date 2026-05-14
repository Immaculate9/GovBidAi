"use client";
import Image from "next/image";

import { FaArrowDown } from "react-icons/fa";
import Footer from "./components/footer";
import MyModal from "./components/modal";
import { useState } from "react";
import HeroSection from "./components/hero";
import StatsSection from "./components/stats";
import ProblemSection from "./components/problem";
import SolutionSection from "./components/solution";
import ProductPreviewSection from "./components/productPreview";

export const dynamic = "force-dynamic";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <main
      id="rootElement"
      className="flex flex-col items-center justify-between p-0 m-0 w-full h-full"
    >
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <SolutionSection />
      {/* <ProductPreviewSection /> */}
      <Footer />
      {/* <Products />

      <section className="h-[250px] w-full flex justify-center items-end">
        <div className="md:h-[59%] h-auto w-5/6 bg-orange text-white md:flex justify-between items-center p-4 md:p-9">
          <h5 className="w-full md:w-[516px] text-white text-2xl font-medium font-['General Sans']">
            Let&apos;s work together to transform your data into profitable
            insight.
          </h5>
          <button
            onClick={openModal}
            className="w-[205px] h-[57px] bg-primary rounded-[30px] shadow my-2 md:my-0 text-sm"
          >
            Request a demo
          </button>
          <MyModal isOpen={modalIsOpen} closeModal={closeModal} />
        </div>
      </section>
      <Footer /> */}
    </main>
  );
}
