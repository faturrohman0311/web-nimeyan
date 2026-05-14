const baseUrl = "https://www.sankavollerei.com/anime";

export async function getHome() {
  const response = await fetch(`${baseUrl}/home`);
  const data = await response.json();
  return data;
}

export async function getAnimeSchedule() {
  const response = await fetch(`${baseUrl}/schedule`);
  const data = await response.json();
  return data;
}

export async function getAllGenre() {
  const response = await fetch(`${baseUrl}/genre`);
  const data = await response.json();
  return data;
}

export async function getAnimeByGenre(genre: string) {
  const response = await fetch(`${baseUrl}/genre/${genre}`);
  const data = await response.json();
  return data;
}

export async function getAnimeDetail(slug: string) {
  const response = await fetch(`${baseUrl}/anime/${slug}`);
  const data = await response.json();
  return data;
}

export async function getAnimeEpisodes(slug: string) {
  const response = await fetch(`${baseUrl}/anime/episode/${slug}`);
  const data = await response.json();
  return data;
}

export async function searchAnime(keyword: string) {
  const response = await fetch(`${baseUrl}/search/${keyword}`);
  const data = await response.json();
  return data;
}
