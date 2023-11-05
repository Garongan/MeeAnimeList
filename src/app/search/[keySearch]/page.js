import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const baseApiURl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const keySearch = params.keySearch;

  const response = await fetch(`${baseApiURl}/anime?q=${keySearch}`);
  const searchAnime = await response.json();

  return (
    <>
      {/* anime paling populer start */}
      <section>
        <Header
          title={`nih hasilnya dari ${keySearch.replace(/%20/g, ' ')}`}
        />
        <AnimeList apiNime={searchAnime} />
      </section>
      {/* end */}
    </>
  );
};

export default Page;
