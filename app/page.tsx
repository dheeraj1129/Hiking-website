import Image from "next/image";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Guide from "@/components/Guide";
import GetApp from "@/components/GetApp";
import Camp from "@/components/Camp";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Features />
      <Guide />
      <GetApp />
    </>
  );
}
