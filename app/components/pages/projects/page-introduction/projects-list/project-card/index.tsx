import Image from "next/image"

export const ProjectCard = () => {
    return (
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 
        hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
            <div className="w-full h-48 overflow-hidden ">
                <Image
                    width={380}
                    height={200}
                    src="https://media.graphassets.com/resize=height:188,width:350/WDSGxjSYeFXszSHbp6gg"
                    alt="Thumbnail do projeto pessoal"
                    unoptimized
                    className="group-hover:scale-110 w-full h-full object-cover duration-500 transition-all"
                />
            </div>

            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500">Grupo Crestani</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veritatis nisi mollitia rerum illo nam voluptate quis sequi nobis tempora,
                    reiciendis est distinctio nostrum! Harum, voluptates odio. Deserunt, laboriosam debitis?</p>
                <span className="text-gray-400 text-sm font-medium block mt-auto truncate">Next.js, Java, Redes, Suporte, Next.js, Java, Redes, Suporte, Next.js, Java, Redes, Suporte  </span>
            </div>
        </div>
    )
}