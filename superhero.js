const SUPERHERO_TOKEN = `5461724990554732`;
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

let getRandomHero = document.getElementById("superheroimg");

let heroImage = document.getElementById("heroImage");
const getRandomSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      // const img = `${json.image.url}`;
      // heroName.innerText = `${json.name}`; OR
      console.log(json);
      const superHero = json;
      SuperHeroStats(superHero);
      // const strength = `<p>💪 Strength: ${json.powerstats.strength}`;
    });
};

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  power: "🚂",
  durability: "🌇",
  combat: "⚔",
};

const SuperHeroStats = (character) => {
  // const stats = Object.keys(character.powerstats).map((stat) => {
  //   return `<p>${stat}: ${character.powerstats[stat]}</p>`;
  // });
  // console.log(stats);

  // for learning about for loop
  // for (const stat in character.powerstats) {
  //   // heroStats.textContent = `${stat}: ${character.powerstats[stat]}`;
  //   return `<p>${stat}: ${character.powerstats[stat]}</p>`;
  // }
  const name = `<h2>${character.name}</h2>`;
  const img = `<img src="${character.image.url}" width=200 height=200 />`;
  const stat = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${statToEmoji[stat]}: ${stat.toUpperCase()}: ${
        character.powerstats[stat]
      }</p>`;
    })
    .join("");

  heroImage.innerHTML = `${name}${img}${stat}`;

  // console.log(stat.join(""));
};

const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      // console.log(hero);
      SuperHeroStats(hero);
    });
};

const searchBtn = document.getElementById("search");

const searchInput = document.getElementById("searchInput");

let heroName = document.getElementById("heroName");

let heroStats = document.getElementById("heroStats");

searchBtn.onclick = () => {
  getSearchSuperHero(searchInput.value);
};

getRandomHero.onclick = () => getRandomSuperHero(randomHeroImage());
// const randomId = () => {
//   return Math.floor(Math.random() * 731) + 1;
// }; OR BELOW
function randomHeroImage() {
  const numberOfHeroes = 731;
  return Math.floor(Math.random() * numberOfHeroes) + 1;
}
