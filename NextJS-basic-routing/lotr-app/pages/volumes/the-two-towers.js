import Head from "next/head";
import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function theReturn() {
  const volume = volumes[2];
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
      <Image
        src={"/images/the-two-towers.png"}
        alt={volume.title}
        width={140}
        height={230}
      />

      <button>
        <Link href={`/volumes/the-return-of-the-king`}>Prev Volume</Link>
      </button>
    </>
  );
}
