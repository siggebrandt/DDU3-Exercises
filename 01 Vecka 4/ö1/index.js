class Person {
    constructor(data) {
        this.name = data.name;
        this.address = data.address;
    }

    writeName() {
        return `${this.name.first} ${this.name.last}`;
    }

    writeAddress() {
        return `${this.address.street} ${this.address.number}; ${this.address.city} ${this.address.postcode}`;
    }
}

const personsData = [
    {
        name: { first: "Janis", last: "Joplin" },
        address: { postcode: 21655, street: "Bersgatan", number: 42, city: "Malmö" }
    },
    {
        name: { first: "Jimi", last: "Hendrixhn" },
        address: { postcode: 21742, street: "Västerlånggatan", number: 7, city: "Malmö" }
    }
];

for (let dataElement of personsData) {
    let personInfo = new Person(dataElement)
    console.log(personInfo.writeName(), personInfo.writeAddress())
}

/*
    const persons = [];
    for (let element of personsData) {
        persons.push(new Person(element));
        console.log(persons[persons.length - 1].writeName(), persons[persons.length - 1].writeAddress());
    }
*/