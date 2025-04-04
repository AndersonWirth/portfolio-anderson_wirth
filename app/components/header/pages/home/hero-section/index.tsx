import { Button } from "@/app/components/button"
import Image from "next/image"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TechBadge } from "../../../tech-badge"

export const HeroSection = () => {
    return (
        <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Anderson Wirth</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">Olá, meu nome é Anderson Wirth e sou Administrador de TI apaixonado por tecnologia.</p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <TechBadge name="Next.js" />
                        ))}
                    </div>

                    <div>
                        <Button className="shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>
                    </div>
                </div>

                <Image
                    width={420}
                    height={404}
                    src="/images/profile-pic.png"
                    alt="Foto de perfil do Anderson Wirth"
                />
            </div>
        </section>

    )
}
