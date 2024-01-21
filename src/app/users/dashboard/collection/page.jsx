import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Header title={"My Collection"} />
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
        <Link
          href={"/"}
          className="cursor-pointer shadow-md shadow-color-dark/30 rounded-xl hover:text-color-secondary hover:scale-[102.5%] hover:-translate-y-1 transition-all duration-300"
        >
          <Image
            src=""
            alt=""
            width={300}
            height={400}
            className="aspect-[3/4] rounded-t-xl"
          />
          <div className="sm:text-[80%] font-semibold p-4">ini title</div>
        </Link>
        <Link
          href={"/"}
          className="cursor-pointer shadow-md shadow-color-dark/30 rounded-xl hover:text-color-secondary hover:scale-[102.5%] hover:-translate-y-1 transition-all duration-300"
        >
          <Image
            src=""
            alt=""
            width={300}
            height={400}
            className="aspect-[3/4] rounded-t-xl"
          />
          <div className="sm:text-[80%] font-semibold p-4">ini title</div>
        </Link>
        <Link
          href={"/"}
          className="cursor-pointer shadow-md shadow-color-dark/30 rounded-xl hover:text-color-secondary hover:scale-[102.5%] hover:-translate-y-1 transition-all duration-300"
        >
          <Image
            src=""
            alt=""
            width={300}
            height={400}
            className="aspect-[3/4] rounded-t-xl"
          />
          <div className="sm:text-[80%] font-semibold p-4">ini title</div>
        </Link>
      </div>
    </>
  );
};

export default Page;
