class Player {
    constructor(data) {
        this.name = data.name;
        this.color = data.color;
        this.wins = 0;
    }
}



let playerInfo = [
    {
        "name": { "first": "Kristoffer", "middle": "Gustav", "last": "Johansson" },
        "color": "SkyBlue"
    },
    {
        "name": { "first": "Parvaneh", "middle": "Shirin", "last": "Farahani" },
        "color": "Crimson"
    },
    {
        "name": { "first": "Anamarija", "middle": "Ivana", "last": "Kovačević" },
        "color": "MediumSeaGreen"
    },
    {
        "name": { "first": "Abdulrahman", "middle": "Mohammed", "last": "Al-Masri" },
        "color": "DarkOrange"
    }
]

















/* class Player {
    static allPlayers = [];
 */
    /*
    static twoRandomPlayers() {
        let player1, player2;
        while (player1 == player2) {
            player1 = Player.allPlayers[Math.floor(Player.allPlayers.length * Math.random())];
            player2 = Player.allPlayers[Math.floor(Player.allPlayers.length * Math.random())];
        }
        return [player1, player2];
    }
    */
/* 
    static twoRandomPlayers() {
        let player1Index = Math.floor(Player.allPlayers.length * Math.random())
        let player1 = Player.allPlayers[player1Index];

        Player.allPlayers.splice(player1Index, 1);

        let player2Index = Math.floor(Player.allPlayers.length * Math.random())
        let player2 = Player.allPlayers[player2Index];

        Player.allPlayers.push(player1Index);
        return [player1, player2]
    }

    constructor(data) {
        Player.allPlayers.push(this);
        this.name = data.name;
        this.color = data.color;
        this.wins = 0;

        let first = this.name.first;
        let middle = this.name.middle;
        let last = this.name.last;

        if (first.length + middle.length + last.length > 20) {
            middle = middle[0].toUpperCase();
        }
        if (first.length + middle.length + last.length > 20) {
            first = first[0].toUpperCase();
        }
        let stringName = `${first} ${middle} ${last}`

        this.html = document.createElement("div");
        this.html.innerHTML = `
        <p>${stringName}</p>
        <p>Choice: <span class="choice"></span></p>
        <p>Wins: <span class="wins"></span></p>`;
        this.html.style.backgroundColor = this.color;
    }

    go() {
        return (["sten", "sax", "påse"][Math.floor(3 * Math.random())])
    }

    won() {
        this.html.querySelector(".wins").textContent = ++this.wins;
    }
}

for (let dataElement of playerInfo) {
    let player = new Player(dataElement);
    player.go();
}

for (let player of playerInfo) {
    // document.body.appendChild(new Player(player).html);

    new Player(player);
    document.body.appendChild(Player.allPlayers[Player.allPlayers.length - 1].html)
} */