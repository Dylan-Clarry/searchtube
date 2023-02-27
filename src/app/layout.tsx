import "./globals.css";

import NavBar from "../components/NavBar";

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
        <main className="container mt-12 px-2 sm:px-0 mx-auto">{children}</main>
      </body>
    </html>
  );
}
