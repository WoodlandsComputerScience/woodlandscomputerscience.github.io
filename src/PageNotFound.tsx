import Logo from "./components/Logo.tsx";

export default function PageNotFound() {

    return <div className="flex flex-col items-center justify-center p-16 gap-8">
        <Logo />
        <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-9xl font-black mt-4">404</h1>
            <h2 className="text-4xl">Page Not Found</h2>
        </div>
        <a href="/">Return Home</a>
    </div>
}