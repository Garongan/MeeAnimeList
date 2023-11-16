"use client";

import { getAnimeResponse } from "@/app/services/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const keySearch = params.keySearch;
  const decodedKeySearch = decodeURI(keySearch);

  const forFetchData = async () => {
    const searchAnime = await getAnimeResponse(
      "anime",
      `q=${decodedKeySearch}&page=${page}`
    );
    setSearchResults(searchAnime);
  };

  useEffect(() => {
    forFetchData();
  }, [page]);

  return (
    <>
      {/* anime paling populer start */}
      <section>
        <Header title={`nih hasilnya dari ${decodedKeySearch} ...${page}`} />
        <AnimeList apiNime={searchResults} />
        <Pagination
          page={page}
          lastPage={searchResults.pagination?.last_visible_page}
          setPage={setPage}
          totalItems={searchResults.pagination?.items.total}
        />
      </section>
      {/* end */}
    </>
  );
};

export default Page;
