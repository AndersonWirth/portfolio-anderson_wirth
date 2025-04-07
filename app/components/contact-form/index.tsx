'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { HiArrowNarrowRight } from "react-icons/hi";
import { z } from "zod";
import { Button } from "../button";
import { SectionTitle } from "../section-title";

const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {

    const { handleSubmit, register } = useForm({
        resolver: zodResolver(contactFormSchema)
    })

    const onSubmit = (data: ContactFormData) => {
        console.log(data)
    }

    return (
        <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
            <div className="w-full max-w-[420px] mx-auto">
                <SectionTitle
                    subtitle="contato"
                    title="Vamor trabalhar juntos? Entre em contato"
                    className="items-center text-center"
                />

                <form className="mt-12 w-full flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

                    <input
                        {...register('name')}
                        placeholder="None"
                        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-4 ring-emerald-400"
                    />
                    <input
                        {...register('email')}
                        placeholder="E-mail"
                        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-4 ring-emerald-400"
                    />
                    <textarea
                        {...register('message')}
                        placeholder="Mensagem..."
                        className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-4 ring-emerald-400"
                        maxLength={500}
                    />

                    <Button className="mt-6 w-max mx-auto shadow-button">
                        Enviar Mensagem
                        <HiArrowNarrowRight size={18} />
                    </Button>
                </form>
            </div>
        </section >
    )

}