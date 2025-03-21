class Person {
    constructor(data) {
        this.name = data.name;
        this.address = data.address;
    }
    writeName(parent) {
        let p = document.createElement("p");
        p.textContent = this.name.first + " " + this.name.last;
        parent.appendChild(p)
    }
}

let personData = [
    {
        name: { first: "Janis", last: "Joplin" },
        address: { postcode: 21655, street: "Bersgatan", number: 42, city: "Malmö" }
    },
    {
        name: { first: "Jimi", last: "Hendrix" },
        address: { postcode: 21742, street: "Västerlånggatan", number: 7, city: "Malmö" }
    },
]


const person1 = new Person(personData[0]);
person1.writeName(document.querySelector("main"))

const person2 = new Person(personData[1]);
person2.writeName(document.querySelector("main"))