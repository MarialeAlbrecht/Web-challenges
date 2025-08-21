console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  console.log("Name:", data.results[2].name);
  console.log("Eye Color: ", data.results[2].eye_color);

  const R2D2 = data.results.find((element) => element.name === "R2-D2");
  console.log(R2D2.eye_color);
}
fetchData();
