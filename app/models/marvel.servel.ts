const api = 'https://gateway.marvel.com/v1/public';
const params = `?apikey=${process.env.MARVEL_API_KEY}&hash=${process.env.MARVEL_HASH}&ts=${process.env.MARVEL_TS}&limit=80`;

export async function getCharacters() {
  const response = await fetch(`${api}/characters${params}`);
  const data = await response.json();
  return data;
}

export async function getComics() {
  const response = await fetch(`${api}/comics${params}`);
  const data = await response.json();
  return data;
}
export async function getCreators() {
  const response = await fetch(`${api}/creators${params}`);
  const data = await response.json();
  return data;
}
export async function getSeries() {
  const response = await fetch(`${api}/series${params}`);
  const data = await response.json();
  return data;
}
