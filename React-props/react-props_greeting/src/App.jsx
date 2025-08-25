export default function App() {
  return (
    <>
      <Greeting name={Gimmena} isCoach={true} />
      <Greeting name={Pedro} isCoach={false} />
    </>
  );
}

function Greeting({ name, isCoach }) {
  return <h1>Hello, {isCoach ? "Coach" : { name }}</h1>;
}

//   return <Greeting name={Pedro} />;
// }
// function Greeting({ name }) {
//   return <h1>Hello, {name}</h1>;
// }
