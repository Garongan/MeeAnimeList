import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Utilities/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mex Anime",
  description: "Website Anime Mex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container mx-auto px-4">{children}</div>
      </body>
    </html>
  );
}
