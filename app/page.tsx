import AboutME_Hero from "@/components/AboutME_Hero";
import LetsConnect from "@/components/Connect_Hero";
import CommonQuestions from "@/components/Fqa_Hero";
import Hero from "@/components/Hero";
import ServicesExpertise from "@/components/Services_Hero";
import SkillsMarquee from "@/components/Skills_Bar";
import HowIWork from "@/components/Workflow_Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsMarquee />
      <AboutME_Hero />
      <ServicesExpertise />
      <HowIWork />
      <CommonQuestions />
      <LetsConnect />
    </>
  );
}
