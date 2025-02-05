class Lineup {
    static matchPlayers = [];
    static init(parent, players) {
        let dom1 = document.createElement("div");
        dom1.classList.add("lineup");
        parent.appendChild(dom1);

        let dom2 = document.createElement("div");
        dom2.classList.add("lineup");
        parent.appendChild(dom2);

        let newPair = document.createElement("button");
        newPair.textContent = "Nytt Par!";
        parent.appendChild(newPair);

        let matchPlayers = document.createElement("button");
        matchPlayers.textContent = "Match!";
        parent.appendChild(matchPlayers);
        matchPlayers.addEventListener("click", function () { this.match() })
    }
    static renderPlayer(where, player) {
        if (where != "lineup" && where != "match") {
            throw error("error?!");
        }
        document.querySelector("." + where).appendChild(player.html);
    }
    static newPair() {
        let players = Player.twoRandomPlayers();
        Lineup.renderPlayer("match", players[0]);
        Lineup.renderPlayer("match", players[1]);
        Lineup.matchPlayers = players;
    }

    static match() {

    }
}
