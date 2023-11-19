import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ apiNime }) => {
  return (
    <>
      {apiNime.data ? (
        <div className="pb-6">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
            {apiNime.data?.map((data) => {
              return (
                <Link
                  href={`/anime/${data.mal_id}`}
                  className="cursor-pointer shadow-xl rounded-xl hover:text-color-secondary hover:scale-[102.5%] hover:-translate-y-1 transition-all duration-300"
                  key={data.mal_id}
                >
                  <Image
                    src={data.images.webp.image_url}
                    alt={data.title}
                    width={300}
                    height={400}
                    className="aspect-[3/4] rounded-t-xl"
                  />
                  <div className="text-[80%] font-semibold p-4">
                    {data.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AnimeList;
