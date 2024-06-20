import Link from "next/link"

export default function Header(){
    return(
        <header className="py-8 px-4 xl:py-12 xl:px0 text-white">
            <div className="container mx-auto flex justfy-between items-center">
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold">
                        Guilherme Machado <span className="text-purple-400">.</span>
                    </h1>
                </Link>
            </div>
        </header>
    )
}