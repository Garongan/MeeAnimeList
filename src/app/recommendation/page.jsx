"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import { useEffect, useState } from "react";
import { getNestedAnimeResponse } from "../../libs/api-libs";

const Page = () => {
  const [allRecommendationsAnime, setAllRecommendationsAnime] = useState([]);
  const [visibleAnime, setVisibleAnime] = useState([]);

  const fetchData = async () => {
    const recommendedAnime = await getNestedAnimeResponse(
      "recommendations/anime",
      null
    );
    setAllRecommendationsAnime(recommendedAnime);
    setVisibleAnime({ data: recommendedAnime.slice(0, 6) });
  };

  useEffect(() => {
    fetchData();
  }, []); // Run once on component mount

  const handleLoadMore = () => {
    setVisibleAnime((prevVisibleAnime) => {
      const newData = allRecommendationsAnime.slice(
        0,
        prevVisibleAnime.data.length + 6
      );
      const isLast = newData.length >= allRecommendationsAnime.length;

      return {
        data: newData,
        isLast: isLast,
      };
    });
  };

  return (
    <>
      <HeaderMenu title={`Rekomen dari para suhu ...`} />
      <AnimeList apiNime={visibleAnime} isRecomendation={true} />
      <div className="flex justify-center w-full pb-6">
        <button
          onClick={handleLoadMore}
          disabled={visibleAnime.isLast}
          className="p-2 bg-color-accent rounded-xl text-[80%] shadow-md shadow-color-dark/30 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default Page;
