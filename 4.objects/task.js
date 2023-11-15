function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  Student.prototype.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (Student.hasOwnProperty("marks")) {
    Student.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
  if (!Student.hasOwnProperty("marks") || Student.marks.length === 0) {
    return 0;
  } else {
    return Student.marks.reduce((acc, mark, index, arr) => acc + mark / arr.length, 0);
  }
}

Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;
  Student.protoype.excluded = reason;
}

