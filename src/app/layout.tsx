import "./globals.css";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export const metadata = {
    title: "SearchTube",
    description: "Watch Youtube with intention",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <NavBar />
                <div className="h-full grid grid-cols-6">
                    <SideBar />
                    <main className="col-span-5 px-6">{children}</main>
                </div>
            </body>
        </html>
    );
}

// <main className="mt-14 mx-10 flex flex-row h-full">
