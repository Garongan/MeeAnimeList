import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params: { id } }) => {
  const detailAnime = await getAnimeResponse(`anime/${id}`);

  const PropHasList = ({ title, data }) => {
    return (
      <>
        {title != null && <span>{title}: </span>}
        {data?.map((item) => {
          return (
            <Link
              key={item.mal_id}
              href={item.url}
              className="hover:underline after:content-[',\00a0'] last:after:content-['']"
            >
              {item.name}
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <div className="py-6">
      <div className="font-bold bg-color-accent p-2 rounded-t-lg">
        {detailAnime.data.title}
      </div>
      <div className="flex flex-row border-2 border-color-accent rounded-b-lg divide-x-2">
        <div className="w-1/4 flex flex-col divide-y-2 p-2">
          <div>
            <Image
              src={detailAnime.data.images.webp.large_image_url}
              alt={detailAnime.data.images.jpg.image_url}
              width={200}
              height={400}
              className="object-cover w-full"
            />
            <div className="font-semibold text-[80%] pt-6">
              Alternative Titles
            </div>
          </div>
          {/* alternative */}
          <div>
            <ul className="anime-details">
              <li>
                <span>Synonyms: </span> {detailAnime.data.title_synonyms}
              </li>
              <li>
                <span>Japanese: </span> {detailAnime.data.title_japanese}
              </li>
            </ul>
            <div className="font-semibold text-[80%] pt-6">Information</div>
          </div>
          {/* information */}
          <div>
            <ul className="anime-details">
              {/* type */}
              <li>
                <span>Type: </span> {detailAnime.data.type}
              </li>
              {/* episodes */}
              <li>
                <span>Episodes: </span> {detailAnime.data.episodes}
              </li>
              {/* status */}
              <li>
                <span>Status: </span> {detailAnime.data.status}
              </li>
              {/* aired */}
              <li>
                <span>Aired: </span> {detailAnime.data.aired.string}
              </li>
              {/* premiered */}
              <li className="capitalize">
                <span>Premiered: </span> {detailAnime.data.season}
                {detailAnime.data.year}
              </li>
              {/* broadcast */}
              <li>
                <span>Broadcast: </span> {detailAnime.data.broadcast.string}
              </li>
              {/* producers */}
              <li>
                <PropHasList
                  title="Producers"
                  data={detailAnime.data.producers}
                />
              </li>
              {/* licensors */}
              <li>
                <PropHasList
                  title="Licensors"
                  data={detailAnime.data.licensors}
                />
              </li>
              {/* studios */}
              <li>
                <PropHasList title="Studios" data={detailAnime.data.studios} />
              </li>
              {/* source */}
              <li>
                <span>Source: </span> {detailAnime.data.source}
              </li>
              {/* genres */}
              <li>
                <PropHasList title="Genres" data={detailAnime.data.genres} />
              </li>
              {/* themes */}
              <li>
                <PropHasList title={"Themes"} data={detailAnime.data.themes} />
              </li>
              {/* duration */}
              <li>
                <span>Duration: </span> {detailAnime.data.duration}
              </li>
              {/* duration */}
              <li>
                <span>Rating: </span> {detailAnime.data.rating}
              </li>
            </ul>
            <div className="font-semibold text-[80%] pt-6">Statistics</div>
          </div>
          {/* statistics */}
          <div>
            <ul className="anime-details">
              <li>
                <span>Score: </span> {detailAnime.data.score} (scored by
                {detailAnime.data.scored_by} users)
              </li>
              <li>
                <span>Ranked: </span> #{detailAnime.data.rank}
              </li>
              <li>
                <span>Popularity: </span> #{detailAnime.data.popularity}
              </li>
              <li>
                <span>Members: </span>{" "}
                {detailAnime.data.members.toLocaleString("en-US")}
              </li>
              <li>
                <span>Favorites: </span>{" "}
                {detailAnime.data.favorites.toLocaleString("en-US")}
              </li>
            </ul>
          </div>
        </div>
        <div className="w-3/4 text-[90%] flex flex-row items-start">
          {/* details penting anime */}
          <div className="flex w-4/6 divide-x-2 h-32 divide-color-dark/50 bg-color-accent/50 rounded-md p-2 m-2 gap-2">
            {/* score */}
            <div className="flex flex-col items-center justify-center gap-1 p-2">
              <div className="w-full text-center text-[80%] bg-color-secondary rounded-lg text-color-primary">
                SCORE
              </div>
              <div className="text-[200%] font-bold">
                {detailAnime.data.score}
              </div>
              <div>
                {detailAnime.data.scored_by.toLocaleString("en-US")} users
              </div>
            </div>
            {/* important details */}
            <div className="flex flex-col p-2 place-content-between">
              <ul className="flex gap-4">
                <li>
                  Ranked{" "}
                  <span className="font-bold">#{detailAnime.data.rank}</span>
                </li>
                <div>
                  Popularity{" "}
                  <span className="font-bold">
                    #{detailAnime.data.popularity}
                  </span>
                </div>
                <div>
                  Members{" "}
                  <span className="font-bold">
                    {detailAnime.data.members.toLocaleString("en-US")}
                  </span>
                </div>
              </ul>
              <div className="flex divide-x-2 divide-color-dark/50">
                <div className="capitalize px-2">
                  {detailAnime.data.season} {detailAnime.data.year}
                </div>
                <div className="px-2">{detailAnime.data.type}</div>
                <div className="px-2">
                  <PropHasList data={detailAnime.data.studios} />
                </div>
              </div>
            </div>
          </div>
          {/* video player */}
          <div className="w-2/6 me-2 mt-2 mb-2 h-32">
            <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
