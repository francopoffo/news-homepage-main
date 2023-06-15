import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"],
});

export const metadata = {
  title: "News Page",
  description: "Landing page of news website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-[1400px] mx-[170px] max-h-screen`}
      >
        {children}
        <div className="flex flex-col items-center gap-4 font-bold pb-4">
          <Link href="https://www.frontendmentor.io?ref=challenge">
            Challenge by Frontend Mentor
          </Link>
          <Link href="https://github.com/francopoffo">
            Coded by Franco Poffo
          </Link>
        </div>
      </body>
    </html>
  );
}
