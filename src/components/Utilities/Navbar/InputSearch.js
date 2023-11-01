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

    router.push(`/search/${keySearch}`);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <input
          placeholder="cari anime nih?..."
          className="lg:text-md md:text-sm text-xs p-2 rounded-lg w-full"
          ref={searchRef}
        />
        <button className="absolute top-1.5 end-2" type="submit">
          <Search />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
