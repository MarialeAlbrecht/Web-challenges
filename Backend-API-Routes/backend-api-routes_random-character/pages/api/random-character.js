import Chance from "chance";

const chance = new Chance();

export default function Character(req, res) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };

  res.status(200).json(character);
}
