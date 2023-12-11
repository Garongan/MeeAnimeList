import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import UserSignInButton from "@/components/Navbar/UserSignInButton";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "MeeAnimeList",
  description: "Website Anime Mee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} tracking-tight bg-color-primary text-color-dark 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs`}
      >
        <Navbar>
          <UserSignInButton />
        </Navbar>
        <div className="container sm:container">{children}</div>
      </body>
    </html>
  );
}
