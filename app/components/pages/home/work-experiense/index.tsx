import { SectionTitle } from "@/app/components/section-title"
import { WorkExperiense as IWorkExperiense } from "@/app/types/work-experience"
import { ExperienceItem } from "./experience-item"

type WorkExperienseProps = {
    experiences: IWorkExperiense[]
}

export const WorkExperiense = ({ experiences }: WorkExperienseProps) => {
    return (
        <section className="container py-16 flex md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="experiências" title="Experiência profissional" />
                <p className="text-gray-400 mt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus labore neque illum, molestias sint cupiditate error inventore hic temporibus.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {experiences?.map(experience => (
                    <ExperienceItem
                        key={experience.companyName}
                        experience={experience}
                    />
                ))}
            </div>
        </section>

    )

}