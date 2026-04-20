import Scene from "@/components/Scene";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import ProjectTimeline from "@/components/ProjectTimeline";
import StatsStrip from "@/components/StatsStrip";

export default function Home() {
  return (
    <>
      <Scene />
      <Hero />
      <FeatureCards />
      <ProjectTimeline />
      <StatsStrip />
    </>
  );
}
