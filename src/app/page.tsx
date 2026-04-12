import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { FeatureHighlights } from "@/components/sections/FeatureHighlights";
import { Pipeline } from "@/components/sections/Pipeline";
import { KnoxAI } from "@/components/sections/KnoxAI";
import { Competitors } from "@/components/sections/Competitors";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeatureHighlights />
      <Pipeline />
      <KnoxAI />
      <Competitors />
      <Testimonials />
      <CTA />
    </>
  );
}
