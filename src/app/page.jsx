// file jsx digunakan untuk melakukan rendering component
// file js digunakan untuk perhitungan yang sifatnya tidak dirender

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./services/api-libs";

const Page = async () => {
  // feticing api
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  const seasonsNow = await getAnimeResponse("seasons/now", "limit=12");

  return (
    <>
      {/* anime paling populer start */}
      <section>
        <Header
          title={"terpopuler gak sih"}
          linkHref={"/populer"}
          linkTitle={"lihat aku senpai!!"}
        />
        <AnimeList apiNime={topAnime} />
      </section>
      {/* end */}

      {/* anime paling terbaru start */}
      <section>
        <Header
          title={"yang masih segerrr"}
          linkHref={"/new-seasons"}
          linkTitle={"pantau lah"}
        />
        <AnimeList apiNime={seasonsNow} />
      </section>
      {/* end */}
    </>
  );
};

export default Page;
