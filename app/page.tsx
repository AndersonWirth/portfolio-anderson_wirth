import { HeroSection } from "./components/pages/home/hero-section"
import { HighlightedProjects } from "./components/pages/home/highlighted-projects"
import { KnownTechs } from "./components/pages/home/know-techs"
import { WorkExperiense } from "./components/pages/home/work-experiense"

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperiense />
    </>
  )
}
