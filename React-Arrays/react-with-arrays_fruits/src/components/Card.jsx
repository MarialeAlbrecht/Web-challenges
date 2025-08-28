import "./Card.css";

export default function Card({ name, color }) {
  const cardClass = `card card--${color}`;
  return (
    <>
      <div className={cardClass}>
        <p>{name}</p>
      </div>
    </>
  );
}
