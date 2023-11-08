import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Utilities/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Mex Anime",
  description: "Website Anime Mex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} tracking-wider bg-color-primary text-color-dark`}>
        <Navbar />
        <div className="container mx-auto px-8">{children}</div>
      </body>
    </html>
  );
}
