// file jsx digunakan untuk melakukan rendering component
// file js digunakan untuk perhitungan yang sifatnya tidak dirender

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const baseApiURl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const responseTopAnime = await fetch(`${baseApiURl}/top/anime?limit=12`);
  const topAnime = await responseTopAnime.json();
  const responseSeasonsNow = await fetch(`${baseApiURl}/seasons/now?limit=12`);
  const seasonsNow = await responseSeasonsNow.json();

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
