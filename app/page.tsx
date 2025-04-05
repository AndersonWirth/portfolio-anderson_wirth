import { HeroSection } from "./components/header/pages/home/hero-section"
import { HighlightedProjects } from "./components/header/pages/home/highlighted-projects"
import { KnownTechs } from "./components/header/pages/home/know-techs"
import { WorkExperiense } from "./components/header/pages/home/work-experiense"

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
