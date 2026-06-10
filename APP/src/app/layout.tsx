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
      <body className="min-h-screen bg-slate-950 text-white">
        <NavBar />
        <main className="ml-15">
          {children}
        </main>
      </body>
    </html>
  );
}
