import "./styles.css";

export default function App() {
  return <Article/>;
}

export function Article() {
  return (
    <>
      <article className="article">
        <h2 className="article__title"> Headline 2</h2>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <a
          className="article__link"
          href="https://en.wikipedia.org/wiki/React_(software)"
          target="blank"
        >
          Enter
        </a>
      </article>
    </>
  );
}
