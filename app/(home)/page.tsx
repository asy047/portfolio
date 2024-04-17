import { resolve } from "path";
import Navigation from "../../components/navigation";

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export const metadata = {
  title: "HOME",
};
// awiat 쓰면 async 를 꼭 부모에게 써야함
export default async function tomato() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
