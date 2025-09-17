import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/products/", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>
            {product.price} {product.currency}
          </p>
          <p>{product.category}</p>
        </li>
      ))}
    </ul>
  );
}
