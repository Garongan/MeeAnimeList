export const getAnimeResponse = async (resource, query) => {
  const baseApiURl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${baseApiURl}/${resource}?${query}`);
  const data = await response.json();
  return data;
};

export const getNestedAnimeResponse = async (resource, objectLength, query) => {
  const response = await getAnimeResponse(resource, query);
  if (objectLength == null) {
    return response.data;
  } else {
    const randomIndex = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * response.data.length)
    );
    const data = [];
    randomIndex.map((i) => {
      const nextData = response.data.find((_, index) => index === i);
      data.push(nextData);
    });
    return data;
  }
};
