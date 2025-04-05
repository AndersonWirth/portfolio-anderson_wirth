import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"

export const WorkExperiense = () => {
    return (
        <section className="container py-16 flex md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="experiências" title="Experiência profissional" />
                <p className="text-gray-400 mt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus labore neque illum, molestias sint cupiditate error inventore hic temporibus.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <ExperienceItem />
                <ExperienceItem />
            </div>
        </section>

    )

}