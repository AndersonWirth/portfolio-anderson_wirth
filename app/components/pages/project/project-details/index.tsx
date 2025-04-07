import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/header/tech-badge"
import { SectionTitle } from "@/app/components/section-title"
import { TbBrandGithub } from "react-icons/tb"
import { FiGlobe } from "react-icons/fi"
import { Link } from "@/app/components/link"
import { HiArrowCircleLeft, HiArrowNarrowLeft } from "react-icons/hi"

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: 'url(/images/hero-bg.png) no-repeat center/cover, url(https://media.graphassets.com/resize=height:188,width:350/WDSGxjSYeFXszSHbp6gg) no-repeat center/cover',
        }}
      />

      <SectionTitle
        subtitle="projetos"
        title="BookWise"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed assumenda dolorem illo vel magni aliquam? Commodi reprehenderit
        omnis aliquam laborum. Unde eveniet repellat laudantium inventore neque ex recusandae. Qui, mollitia.
      </p>

      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href="https://github.com" target="_blank">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositorio
          </Button>
        </a>
        <a href="https://github.com" target="_blank">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>

      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}
