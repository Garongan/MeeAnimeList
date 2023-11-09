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
    if (!keySearch) return;
    router.push(`/search/${keySearch}`);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <div className="flex justify-end">
          <input
            placeholder="cari anime nih?..."
            className="lg:text-md md:text-sm text-xs p-2 rounded-lg
            md:w-60 w-full focus-visible:md:w-72 focus-visible:w-48 transition-all"
            ref={searchRef}
          />
        </div>
        <button className="absolute top-1.5 end-2" type="submit">
          <Search />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
