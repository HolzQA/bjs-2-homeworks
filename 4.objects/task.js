function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

  this.setSubject = function(subjectName) {
    this.subject = subjectName;
  }

  this.addMarks = function(...marksToAdd) {
    if (!this.hasOwnProperty("marks")) {
      console.log("Error: Student has been expelled.");
      return;
    }
      this.marks.push(...marksToAdd);
  }

  this.getAverage = function() {
    if (!this.hasOwnProperty("marks") || !this.marks.length) {
      return 0;
    }
      return this.marks.reduce((acc, mark) => acc + mark / this.marks.length, 0);
  }

  this.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}
