let playerInfo = [
  {
    name: { first: "Kristoffer", middle: "Gustav", last: "Johansson" },
    color: "SkyBlue",
  },
  {
    name: { first: "Parvaneh", middle: "Shirin", last: "Farahani" },
    color: "Crimson",
  },
  {
    name: { first: "Anamarija", middle: "Ivana", last: "Kovačević" },
    color: "MediumSeaGreen",
  },
  {
    name: { first: "Abdulrahman", middle: "Mohammed", last: "Al-Masri" },
    color: "DarkOrange",
  },
];

let arrayOfPlayers = [];

for (let dataElement of playerInfo) {
  let player = new Player(dataElement);
  arrayOfPlayers.push(player);
}

Lineup.init(document.querySelector("main"), arrayOfPlayers);
