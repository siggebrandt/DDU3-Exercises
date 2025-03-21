class Person {
    constructor(data) {
        this.name = data.name.first + " " + data.name.last;

        this.weight = data.bioInfo.weight;
        this.height = data.bioInfo.height;
    }

    myBMI() {
        //this.weight = Math.round(this.weight * 10) / 10;
        //this.height = Math.round(this.height * 10) / 10;
        return Math.round(this.weight / (this.height * this.height) * 10) / 10;
    }
}

let personDatabase = [
    {
      name: {first: "Janis", last: "Joplin"},
      address: { postcode: 21655, street: "Bersgatan", number: 42, city: "Malmö"},
      bioInfo: { weight: 56, height: 1.62}
    },
    {
      name: {first: "Jimi", last: "Hendrix"},
      address: { postcode: 21742, street: "Västerlånggatan", number: 7, city: "Malmö"},
      bioInfo: { weight: 68, height: 1.78}
    },
]

  let person1 = new Person(personDatabase[0]);
  console.log(person1.name + " (MBI: " + person1.myBMI() + ")");

  let person2 = new Person(personDatabase[1]);
  console.log(person2.name + " (MBI: " + person2.myBMI() + ")");