const MonthsDays = [31, 28, 31, 30, 31, etc];

const STUDENTS = [
  {
    born: { year: 1998, month: 11, day: 3 },
    name: {
      first: "Kerstin",
      last: "Rivera",
    },
    idNumber: 4707,
    courses: [
      {
        code: "ME101B",
        year: 2019,
        g: 2020,
      },
      //fler kurser...
    ],
  },
  //fler studenter...
];

class Student {
  static all = [];

  static get goodResults() {
    let arrayOfGoodResultsStudents = [];
    arrayOfGoodResultsStudents = Student.all.filter((student) =>
      student.courses.every(
        (course) => /* course.g && */ course.year === course.g
      )
    );

    return arrayOfGoodResultsStudents;
  }

  constructor(data) {
    this.constructor.push(this);
    this.born = data.born;
    this.name = data.name;
    this.idNumber = data.idNumber;
    this.courses = data.courses;
  }

  get born() {
    return this._born;
  }
  set born(birth) {
    if (
      typeof birth != "object" ||
      String(birth.year).length != 4 ||
      birth.month < 1 ||
      birth.month > 12 ||
      birth.day > MonthsDays[birth.month - 1] ||
      birth.day < 1 ||
      !Number.isInteger(birth.year) ||
      !Number.isInteger(birth.month) ||
      !Number.isInteger(birth.day)
    ) {
      throw Error("born är fel");
    }
    this._born = birth;
  }

  get pnr() {
    let month;
    if (this.born.month < 10) {
      month = "0" + this.born.month;
    } else {
      month = this.born.month;
    }
    //this.born.month.padStart(2, "0");

    let day;
    if (this.born.day < 10) {
      day = "0" + this.born.day;
    } else {
      day = this.born.day;
    }
    //this.born.day.padStart(2, "0");

    return `${this.born.year}${month}${day}-${this.idNumber}`;
  }
}
