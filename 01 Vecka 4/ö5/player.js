class Player {
  static allPlayers = [];

  static twoRandomPlayers() {
    if (Player.allPlayers.length < 2) {
      throw Error("Not enough players");
    }

    let player1Index = Math.floor(Math.random() * Player.allPlayers.length);
    let player2Index = player1Index;

    do {
      player2Index = Math.floor(Math.random() * Player.allPlayers.length);
    } while (player1Index == player2Index);

    let player1 = Player.allPlayers[player1Index];
    let player2 = Player.allPlayers[player2Index];

    return [player1, player2];
  }

  constructor(data) {
    this.name = data.name;
    this.color = data.color;
    this.wins = 0;

    let first = this.name.first;
    let middle = this.name.middle;
    let last = this.name.last;

    if (first.length + middle.length + last.length > 20) {
      middle = middle[0] + ".";

      if (first.length + middle.length + last.length > 20) {
        first = first[0] + ".";
      }
    }
    let nameString = first + " " + middle + " " + last;

    this.html = document.createElement("div");
    this.html.innerHTML = `
        <p>Name: ${nameString}</p>
        <p>Choice: <span class="choice"></span></p>
        <p>Wins: <span class="wins">${this.wins}</span></p>`;
    this.html.style.backgroundColor = this.color;

    Player.allPlayers.push(this);
  }

  go() {
    let arrayOfActions = ["sten", "sax", "påse"];
    let action = arrayOfActions[Math.floor(Math.random() * 3)];

    this.html.querySelector(".choice").textContent = action;
  }

  won() {
    this.wins += 1;
    this.html.querySelector(".wins").textContent = this.wins;
    //++this.wins;
  }
}
