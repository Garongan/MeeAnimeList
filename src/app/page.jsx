// file jsx digunakan untuk melakukan rendering component
// file js digunakan untuk perhitungan yang sifatnya tidak dirender

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "../libs/api-libs";

const Page = async () => {
  // feticing api
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  const seasonsNow = await getAnimeResponse("seasons/now", "limit=12");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    6
  );
  recommendedAnime = { data: recommendedAnime };

  return (
    <>
      {/* anime paling populer start */}
      <section>
        <Header
          title={"terpopuler gak sih"}
          linkHref={"/populer"}
          linkTitle={"lihat aku senpai!!"}
        />
        <AnimeList apiNime={topAnime} isRecomendation={false} />
      </section>
      {/* end */}

      {/* anime paling terbaru start */}
      <section>
        <Header
          title={"yang masih segerrr"}
          linkHref={"/new-seasons"}
          linkTitle={"pantau lah"}
        />
        <AnimeList apiNime={seasonsNow} isRecomendation={false} />
      </section>
      {/* end */}

      {/* anime rekomendasi */}
      <section>
        <Header
          title={"recommended nih bos"}
          linkHref={"/recommendation"}
          linkTitle={"aku mau lebih"}
        />
        <AnimeList apiNime={recommendedAnime} isRecomendation={true} />
      </section>
      {/* end */}
    </>
  );
};

export default Page;
