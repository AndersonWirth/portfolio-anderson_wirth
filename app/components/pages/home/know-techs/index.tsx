import { SectionTitle } from "@/app/components/section-title";
import { KnownTech as IKnownTech } from "@/app/types/project";
import { KnownTech } from "./know-tech";

type KnownTechsProps = {
  techs: IKnownTech[]
}

export const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech) => (
          <KnownTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};
