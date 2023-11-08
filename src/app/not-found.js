import { FileSearch } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex flex-row justify-center items-center divide-x-2 divide-color-dark text-2xl bg-color-accent p-4 rounded-lg shadow-xl animate-bounce">
        <FileSearch size={33} className="m-4" />
        <div className="p-4 font-bold">Page Not Found</div>
      </div>
    </div>
  );
};

export default Page;
