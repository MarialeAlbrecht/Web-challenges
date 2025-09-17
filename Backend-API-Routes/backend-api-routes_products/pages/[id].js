import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function singleProduct() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1> Loading...</h1>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        {data.price} {data.currency}
      </p>
      <p>{data.category}</p>
    </>
  );
}
