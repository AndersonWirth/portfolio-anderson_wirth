import Image from "next/image"
import { TechBadge } from "../../../tech-badge"

export const ExperienceItem = () => {

    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">

            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src="https://media.licdn.com/dms/image/v2/C560BAQGwM1YnM51FuQ/company-logo_200_200/company-logo_200_200/0/1634662525316/crestani_filhos_ltda_vipi_supermercados_logo?e=2147483647&v=beta&t=kbUUHCuank9yRgA4JVkV9etd38quxRCw_sfaugi99Qs"
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Logo da empresa Grupo Crestani"
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a target="_blank"
                        href="https://www.linkedin.com/company/crestani-filhos-ltda-vipi-supermercados/?originalSubdomain=br"
                        className="text-gray-500 hover:text-emerald-500 transition-colors">
                        @ Grupo Crestani
                    </a>
                    <h4 className="text-gray-300">Administrador de TI</h4>
                    <span className="text-gray-500">
                        Nov 1999 • O momento • (25 Anos)
                    </span>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam non totam expedita quod ex consequuntur architecto incidunt repellat debitis?
                    </p>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <TechBadge name="Redes" />
                    <TechBadge name="Redes" />
                    <TechBadge name="Redes" />
                    <TechBadge name="Redes" />
                </div>

            </div>

        </div>

    )
}