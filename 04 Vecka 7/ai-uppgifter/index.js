/* Uppgift 1: Hantera en spellista

Du ska skapa en klass Playlist som hanterar en lista av låtar. Varje låt ska representeras av ett objekt med egenskaperna title, artist och duration (i sekunder).

Steg:
	1.	Skapa en klass Playlist som har en privat egenskap #songs (en array).
	2.	Lägg till metoder för att:
	•	addSong(song) → Lägger till en låt i listan.
	•	removeSong(title) → Tar bort en låt baserat på titel.
	•	getTotalDuration() → Returnerar den totala spellistetiden i minuter och sekunder.
	•	getArtists() → Returnerar en lista med unika artistnamn i spellistan.

Exempelanvändning:
const myPlaylist = new Playlist();
myPlaylist.addSong({ title: "Shape of You", artist: "Ed Sheeran", duration: 233 });
myPlaylist.addSong({ title: "Blinding Lights", artist: "The Weeknd", duration: 200 });
console.log(myPlaylist.getTotalDuration()); // "7 min 13 sek"
console.log(myPlaylist.getArtists()); // ["Ed Sheeran", "The Weeknd"] 
// 🔹 Tips:
	•	Använd map() för att extrahera alla artister.
	•	Set kan hjälpa till att få unika artister.
	•	reduce() är bra för att summera total duration.
    */

class Playlist {
  #songs;
  constructor(data) {
    this.#songs = [];
  }

  addsong(song) {}
  removeSong(title) {}
  getTotalDuration() {}
  getArtists() {}
}
