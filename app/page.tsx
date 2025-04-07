import { HeroSection } from "./components/pages/home/hero-section"
import { HighlightedProjects } from "./components/pages/home/highlighted-projects"
import { KnownTechs } from "./components/pages/home/know-techs"
import { WorkExperiense } from "./components/pages/home/work-experiense"
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query"
import { HomePageData } from "./types/page-info"

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knowsTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // 1 day
  )
}

export default async function Home() {

  const { page: pageData } = await getPageData();
  console.log(pageData);
  debugger

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperiense />
    </>
  )
}
