import Head from "next/head";
import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function theFellowship() {
  const volume = volumes[0];
  return (
    <>
      <Head>
        <title>TFOTR</title>
      </Head>
      <main>
        <Link href={`/`}> ← All Volumes</Link>
      </main>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal};{book.title}
          </li>
        ))}
      </ul>
      <Image src={volume.cover} alt={volume.title} width={140} height={230} />
      <button>
        <Link href={`/volumes/the-return-of-the-king`}>Next Volume →</Link>
      </button>
    </>
  );
}
