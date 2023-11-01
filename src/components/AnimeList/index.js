import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ apiNime }) => {
  return (
    <>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-4">
        {apiNime.data.map((data) => {
          return (
            <Link
              href={`/${data.mal_id}`}
              className="cursor-pointer shadow-xl rounded-lg"
              key={data.mal_id}
            >
              <Image
                src={data.images.webp.image_url}
                alt={data.title}
                width={300}
                height={400}
                className="aspect-[3/4] object-cover rounded-t-xl transition-all"
              />
              <div className="lg:text-md md:text-sm text-xs font-semibold p-4">
                {data.title}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AnimeList;
