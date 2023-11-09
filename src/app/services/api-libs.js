export const getAnimeResponse = async (resource, query) => {
  const baseApiURl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${baseApiURl}/${resource}?${query}`);
  const data = await response.json();
  return data;
};
