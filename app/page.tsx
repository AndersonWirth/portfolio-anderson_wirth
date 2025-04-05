import { HeroSection } from "./components/header/pages/home/hero-section"
import { KnownTechs } from "./components/header/pages/home/know-techs"

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
    </>
  )
}
