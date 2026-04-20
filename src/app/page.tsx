import Scene from "@/components/Scene";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import ProjectTimeline from "@/components/ProjectTimeline";
import StatsStrip from "@/components/StatsStrip";

export default function Home() {
  return (
    <>
      <Scene />
      <main className="page-shell">
        <Hero />
        <FeatureCards />
        <ProjectTimeline />
        <StatsStrip />

        <section className="section final-cta">
          <div className="glass-card final-panel">
           <p className="section-label">CV-ready framing</p>
           <h2>Designed and built a cinematic interactive portfolio experience.</h2>
           <p>
              Add this under projects, and describe it as a premium motion-driven
              front-end experience with 3D visuals, scroll storytelling, and polished UX.
           </p>
          </div>
        </section>
      </main>
    </>
  );
}
