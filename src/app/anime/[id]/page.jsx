import { getAnimeResponse } from "@/app/services/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const detailAnime = await getAnimeResponse(`anime/${id}`);
  return (
    <div className="py-6">
      <div className="font-bold bg-color-accent p-2 rounded-t-lg">
        {detailAnime.data.title}
      </div>
      <div className="flex flex-row border-2 border-color-accent rounded-b-lg divide-x-2">
        <div className="w-3/12 flex flex-col divide-y-2 p-2">
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
          <div>
            <ul className="anime-details">
              <li>
                <span>Synonyms: </span> {detailAnime.data.title_synonyms}
              </li>
              <li>
                <span>Japanese: </span> {detailAnime.data.title_japanese}
              </li>
            </ul>
            <div className="font-semibold text-[80%] pt-6">Statistics</div>
          </div>
          <div>
            <ul className="anime-details">
              <li>
                <span>Score: </span> {detailAnime.data.score} (scored by{" "}
                {detailAnime.data.scored_by} users)
              </li>
              <li>
                <span>Ranked: </span> #{detailAnime.data.rank}
              </li>
              <li>
                <span>Popularity: </span> #{detailAnime.data.popularity}
              </li>
              <li>
                <span>Members: </span> {detailAnime.data.members}
              </li>
              <li>
                <span>Favorites: </span> {detailAnime.data.favorites}
              </li>
            </ul>
          </div>
        </div>
        <div className="w-auto"></div>
      </div>
      <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id} />
    </div>
  );
};

export default Page;
