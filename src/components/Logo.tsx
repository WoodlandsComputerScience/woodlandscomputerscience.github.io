export default function Logo() {
    return <a href="/" className="flex items-center -mt-3 no-underline">
        <img src="/logo.png" alt="logo" className="flex-none h-16 mr-3 pb-1" />
        <span className="text-xl font-bold flex-auto shrink-0 text-white">
            Woodlands <br/> Computer Science
        </span>
    </a>
}