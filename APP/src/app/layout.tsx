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
        <link rel="shortcut icon" href="https://s2-ge.glbimg.com/RGU5LEYpvpcPRro8r9wxAEvmltU=/0x0:2048x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/q/Q/e3U1thRemgE9lEG0J4gQ/logo-fifa.jpg" type="image/x-icon" />
        <NavBar />
        <main className="ml-15">
          {children}
        </main>
      </body>
    </html>
  );
}
