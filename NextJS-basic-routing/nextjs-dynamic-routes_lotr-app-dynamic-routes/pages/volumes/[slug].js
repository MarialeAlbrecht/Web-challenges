import { useRouter } from "next/router";
import Image from "next/image";
import { volumes } from "@/lib/data";
import Link from "next/link";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((v) => v.slug === slug);

  const index = volumes.findIndex((vi) => vi.slug === slug);
  const previousVolume = index > 0 ? volumes[index - 1] : 0;
  const nextVolume = index < volumes.length - 1 ? volumes[index + 1] : 0;

  if (!volume) return <p>Loading...</p>;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>

      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={volume.cover}
        alt={`Cover image of ${volume.title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
