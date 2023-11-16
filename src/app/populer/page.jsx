"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../services/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const forFetchData = async () => {
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    forFetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`anime paling populer ...${page}`} />
      <AnimeList apiNime={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
        totalItems={topAnime.pagination?.items.total}
      />
    </>
  );
};

export default Page;
