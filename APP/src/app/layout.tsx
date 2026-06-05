import { Metadata } from "next";
import NavBar from "./components/navBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bolão Copa 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full bg-sky-950">
        <NavBar />
        <main className="ml-15">
          {children}
        </main>
      </body>
    </html>
  );
}
