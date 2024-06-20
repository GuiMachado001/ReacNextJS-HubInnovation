import Image from "next/image";
import Link from "next/link"



export default function Home() {
  return (
    <div>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justy-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Devoloper</span>
              <h1 className="text-[48px] xl:text-[80px] leading-tight font-semibold mb-6">
                Ola, eu sou <br/> <span className="text-purple-400">Guilherme Machado</span>
              </h1>
              <p className="mx-w-[500px] mb-9 text-white/80">
                Eu crio experiências digitais elegantes e sou proficiente em diversas linguagens de programação
              </p>
              <div className="mb-8 xl:mb-0">
                <div className="flex gap-6">
                  <Link href={"https://github.com/GuiMachado001"} target="_blank">GitHub</Link>
                </div>
              </div>
            </div>

            <div className="order-1 xl:order-none mb-8 xl:nb-0">
              <div className="w-full h-full relative">
                <div className="w-[150px] h-[150px] xl:w-[500px] xl:h-[500px]">
                  <Image
                    src="/fotoPerfil.jpeg"
                    quality={100}
                    fill
                    className="object-container.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
