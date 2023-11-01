'use client'

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const baseApiURl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const response = await fetch(`${baseApiURl}/top/anime?limit=8`);
  const topAnime = await response.json();

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
          linkHref={"/new"}
          linkTitle={"pantau lah"}
        />
        <AnimeList apiNime={topAnime} />
      </section>
      {/* end */}
    </>
  );
};

export default Page;
