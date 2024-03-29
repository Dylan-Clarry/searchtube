import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className="h-full flex flex-col">
                <NavBar />
                <div className="h-full grid grid-cols-6">
                    <SideBar />
                    <main className="h-full col-span-5 px-6">
                        <Component {...pageProps} />
                    </main>
                </div>
            </div>
        </>
    );
}
