// helper funcs for fetching

const BASE_URL = "http://127.0.0.1:8000"

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export async function getMovies() {
  const res = await fetch(`${BASE_URL}/api/recs`);
  if (!res.ok) {
    throw new Error(`Failed to fetch movies: ${res.status}`);
  }

  const data = await res.json(); 
  console.log("movies value:", data.movies);
  console.log("movies type:", typeof data.movies);
  const raw = data.movies; 

    
    const cleaned = raw
    .replace(/```json\s*/i, "") 
    .replace(/```$/i, "");      

    const movies = JSON.parse(cleaned);

    console.log("parsed movies:", movies);
    console.log(movies[0].title);

  //console.log(data.movies[0].title);             
  return movies;
}


export default fetcher;

