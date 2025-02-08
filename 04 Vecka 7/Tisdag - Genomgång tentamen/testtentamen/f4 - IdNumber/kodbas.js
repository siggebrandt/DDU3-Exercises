class Person {
  static all = []
  constructor (bornDate, name, gender) {
    this.bornDate = bornDate; // {year: int, month: int, day: int}
    this.name = name;
    this.gender = gender;
    this.setIdNumber();
    this.constructor.all.push(this);
  }
}