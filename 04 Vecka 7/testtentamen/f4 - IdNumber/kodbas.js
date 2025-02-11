class Person {
  static all = [];
  constructor(bornDate, name, gender) {
    this.bornDate = bornDate; // {year: int, month: int, day: int}
    this.name = name;
    this.gender = gender;
    this.setIdNumber();
    this.constructor.all.push(this);
  }

  setIdNumber() {
    let randomIdNumber = "";
    let idExists = true;

    while (idExists) {
      randomIdNumber = "";
      for (let i = 0; i < 4; i++) {
        randomIdNumber += Math.floor(Math.random() * 10);
      }

      idExists = Person.all.some(
        (person) =>
          person.bornDate == this.bornDate && person.idNumber == randomIdNumber
      );
    }
    if (this.gender == "f" && randomIdNumber[2] % 2 == 0) {
      return (this.idNumber = randomIdNumber);
    } else if (this.gender == "m" && randomIdNumber[2] % 2 != 0) {
      return (this.idNumber = Number(randomIdNumber));
    } else {
      this.setIdNumber();
    }
  }
}
