import { FileSearch, Undo2 } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center divide-x-2 divide-color-dark text-2xl bg-color-accent p-4 rounded-lg shadow-xl">
        <FileSearch size={33} className="m-4" />
        <div className="p-4 font-bold">Page Not Found</div>
      </div>
      <Link href={'/'} className="underline lowercase hover:text-color-secondary inline-flex gap-4 py-4 bg-color-accent p-4 rounded-lg m-4 shadow-xl"> <Undo2 /> back</Link>
    </div>
  );
};

export default Page;
