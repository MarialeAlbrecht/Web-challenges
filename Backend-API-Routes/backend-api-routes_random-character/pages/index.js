import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) {
    return <h1>Failed to load...</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <p>Age: {data.age}</p>
      <p>Twitter: {data.twitter}</p>
      <p>Geohash: {data.geohash}</p>
    </>
  );
}
