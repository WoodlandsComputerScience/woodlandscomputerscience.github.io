import {ChevronRight} from "lucide-react";

export default function Template({children = []} : {children?: React.ReactNode}) {
    return <main className="flex h-full w-300 max-w-full mx-auto p-8 items-start gap-8 flex-col md:flex-row">
        <nav className="p-4 shadow-lg shadow-zinc-950 bg-zinc-800 rounded-xl border-0 flex-none text-left sticky top-8 md:w-auto w-full">
            <a href="/" className="flex mb-5">
                <img src="/logo.png" alt="logo" className="flex-none h-16 mr-4" />
                <h1 className="text-2xl font-bold flex-auto">
                    Woodlands <br/> Computer Science
                </h1>
            </a>
            <div className="ml-18 flex flex-col gap-3">
                <a href="/" className="flex gap-2 transition duration-75 ease-in hover:text-brand">
                    <ChevronRight/>Home
                </a>
                <a href="/" className="flex gap-2 transition duration-75 ease-in hover:text-brand">
                    <ChevronRight/>Calendar
                </a>
                <a href="/" className="flex gap-2 transition duration-75 ease-in hover:text-brand">
                    <ChevronRight/>Meeting Notes
                </a>
                <a href="/" className="flex gap-2 hp-link">
                    <ChevronRight />
                    <span>
                        Hack::Peel
                    </span>
                </a>
            </div>
        </nav>
        <main className="flex-auto">
            {children}
        </main>
    </main>
}