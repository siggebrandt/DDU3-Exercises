class Lineup {
  static matchPlayers = [];

  static init(parent, players) {
    const lineupDiv = document.createElement("div");
    lineupDiv.classList.add("lineup");
    parent.appendChild(lineupDiv);

    const matchDiv = document.createElement("div");
    matchDiv.classList.add("match");
    parent.appendChild(matchDiv);

    const newPairButton = document.createElement("button");
    newPairButton.textContent = "New Pair";
    parent.appendChild(newPairButton);
    newPairButton.addEventListener("click", Lineup.newPair);

    const matchButton = document.createElement("button");
    matchButton.textContent = "Match!";
    parent.appendChild(matchButton);
    matchButton.addEventListener("click", Lineup.match);

    for (let player of players) {
      Lineup.renderPlayer("lineup", player);
    }
  }

  static renderPlayer(where, player) {
    if (where != "lineup" && where != "match") {
      throw Error("no correct input for renderPlayer");
    }
    document.querySelector("." + where).appendChild(player.html);
    /* 
    if (where == "lineup") {
      document.querySelector(".lineup").appendChild(player);
    } else if (where != "match") {
      document.querySelector(".match").appendChild(player);
    } else {
      throw Error("no correct input");
    } */
  }

  static newPair() {
    if (Lineup.matchPlayers.length > 0) {
      Lineup.renderPlayer("lineup", Lineup.matchPlayers[0]);
      Lineup.renderPlayer("lineup", Lineup.matchPlayers[1]);
    }

    let twoRandomPlayers = Player.twoRandomPlayers();
    Lineup.matchPlayers = twoRandomPlayers;
    for (let randomPlayer of twoRandomPlayers) {
      Lineup.renderPlayer("match", randomPlayer);
    }
  }

  static match() {
    if (Lineup.matchPlayers.length < 2) {
      alert("No players selected for match!");
      return;
    }
    let player1Action, player2Action;

    Lineup.matchPlayers[0].go();
    Lineup.matchPlayers[1].go();

    player1Action =
      Lineup.matchPlayers[0].html.querySelector(".choice").textContent;
    player2Action =
      Lineup.matchPlayers[1].html.querySelector(".choice").textContent;

    if (player1Action == player2Action) {
      alert("even");
    } else if (
      (player1Action == "sten" && player2Action == "sax") ||
      (player1Action == "sax" && player2Action == "påse") ||
      (player1Action == "påse" && player2Action == "sten")
    ) {
      Lineup.matchPlayers[0].won();
    } else {
      Lineup.matchPlayers[1].won();
    }
  }
}
