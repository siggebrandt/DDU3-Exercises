
const MonthsDays = [31, 28, 31, 30, 31, etc];

const STUDENTS = [
  {
      "born": { "year": 1998, "month": 11, "day": 3  },
      "name": {
          "first": "Kerstin",
          "last": "Rivera"
      },
      "idNumber": 4707,
      "courses": [
          {
              "code": "ME101B",
              "year": 2019,
              "g": 2020
          },
          fler kurser...
      ]
  },
  fler studenter...
];

class Student {
  static all = []
  constructor (data) {
    this.constructor.push(this);
    this.born = data.born;
    this.name = data.name;
    this.idNumber = data.idNumber;
    this.courses = data.courses;
  }
}