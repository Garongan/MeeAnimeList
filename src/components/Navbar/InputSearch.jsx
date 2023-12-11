"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keySearch = searchRef.current.value;
    if (!keySearch || keySearch.trim() == "") return;
    router.push(`/search/${keySearch}`);
  };

  return (
    <div className="relative flex-1">
      <form onSubmit={handleSearch}>
        <div className="flex justify-end">
          <input
            placeholder="cari anime nih?..."
            className="sm:text-[80%] p-2 rounded-lg placeholder:text-color-dark hover:shadow-md shadow-color-dark/30 outline-none
            h-10 md:w-60 w-full focus-visible:md:w-72 focus-visible:w-48 focus:shadow-md focus:outline-none transition-all bg-color-primary"
            ref={searchRef}
            spellCheck={false}
          />
        </div>
        <button className="absolute top-2 end-2" type="submit">
          <Search className="active:text-color-secondary" />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
