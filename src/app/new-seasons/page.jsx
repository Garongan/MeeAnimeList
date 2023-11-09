"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const forFetchData = async () => {
    const baseApiURl = process.env.NEXT_PUBLIC_API_BASE_URL;
    await fetch(`${baseApiURl}/seasons/now?page=${page}`)
      .then((response) => response.json())
      .then((data) => setTopAnime(data));
  };

  useEffect(() => {
    forFetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`baru di seasons ini ...${page}`} />
      <AnimeList apiNime={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
        range={5}
      />
    </>
  );
};

export default Page;
