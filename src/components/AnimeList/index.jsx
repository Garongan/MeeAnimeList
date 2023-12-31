import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ apiNime, isRecomendation }) => {
  // Options for formatting the date
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  return (
    <>
      {apiNime.data ? (
        <div className="pb-6">
          {isRecomendation ? (
            // recomendation
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {apiNime.data.flatMap((item, index) => {
                return (
                  <div
                    key={index}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {item.entry.map((data) => {
                        return (
                          <Link
                            href={`/anime/${data.mal_id}`}
                            className="cursor-pointer shadow-md shadow-color-dark/30 rounded-xl hover:text-color-secondary hover:scale-[102.5%] hover:-translate-y-1 transition-all duration-300"
                            key={data.mal_id}
                          >
                            <Image
                              src={data.images.webp.image_url}
                              alt=""
                              width={300}
                              height={400}
                              className="aspect-[3/4] rounded-t-xl"
                            />
                            <div className="sm:text-[80%] font-semibold p-4">
                              {data.title}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="shadow-inner shadow-color-dark/30 rounded-xl p-4 flex flex-col gap-2 sm:text-[80%] h-fit">
                      <div className="flex flex-col">
                        <div className="font-semibold">Reason:</div>
                        {item.content}
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold">Date added:</div>
                        {new Date(item.date).toLocaleString("en-US", options)}
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold">Rekomen dari:</div>
                        <Link
                          href={item.user.url}
                          className="hover:underline hover:text-color-secondary"
                        >
                          {item.user.username}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // normal page
            <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
              {apiNime.data.map((data) => {
                return (
                  <Link
                    href={`/anime/${data.mal_id}`}
                    className="cursor-pointer shadow-md shadow-color-dark/30 rounded-xl hover:text-color-secondary hover:scale-[102.5%] hover:-translate-y-1 transition-all duration-300"
                    key={data.mal_id}
                  >
                    <Image
                      src={data.images.webp.image_url}
                      alt=""
                      width={300}
                      height={400}
                      className="aspect-[3/4] rounded-t-xl"
                      priority={true}
                    />
                    <div className="sm:text-[80%] font-semibold p-4">
                      {data.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AnimeList;
