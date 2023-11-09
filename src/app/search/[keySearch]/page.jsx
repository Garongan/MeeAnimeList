import { getAnimeResponse } from "@/app/services/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const baseApiURl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const keySearch = params.keySearch;
  const decodedKeySearch = decodeURI(keySearch)
  const response = await fetch(`${baseApiURl}/anime?`);
  const searchAnime = await getAnimeResponse('anime', `q=${decodedKeySearch}`)

  return (
    <>
      {/* anime paling populer start */}
      <section>
        <Header title={`nih hasilnya dari ${decodedKeySearch}`} />
        <AnimeList apiNime={searchAnime} />
      </section>
      {/* end */}
    </>
  );
};

export default Page;
