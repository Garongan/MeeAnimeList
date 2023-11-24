"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [newSeasonsAnime, setNewSeasonsAnime] = useState([]);

  const forFetchData = async () => {
    const newSeasonsAnimeResponse = await getAnimeResponse("seasons/now", `page=${page}`);
    setNewSeasonsAnime(newSeasonsAnimeResponse);
  };

  useEffect(() => {
    forFetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`baru di seasons ini ...${page}`} />
      <AnimeList apiNime={newSeasonsAnime} />
      <Pagination
        page={page}
        lastPage={newSeasonsAnime.pagination?.last_visible_page}
        setPage={setPage}
        totalItems={newSeasonsAnime.pagination?.items.total}
      />
    </>
  );
};

export default Page;
