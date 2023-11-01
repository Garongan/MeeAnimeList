import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-slate-600">
      <div className="container mx-auto px-4 py-4 flex md:flex-row flex-col gap-2 justify-between shadow-xl">
        <Link href="/" className="uppercase font-bold text-2xl">
          mexanime
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
