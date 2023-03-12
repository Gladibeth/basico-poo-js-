const gladibeth = {
  name: 'Gladibeth',
  age: 25,
  country: 'Venezuela',
  aprovedCourse: [
    'JavaScript',
    'HTML',
    'CSS'
  ],
  addCourseAproved(newCuorse){
    this.aprovedCourse.push(newCuorse);
  }
}

function Student(name,age,country,aprovedCourse){
  this.name = name;
  this.age = age;
  this.country = country;
  this.aprovedCourse = aprovedCourse;
}

Student.prototype.addCourseAproved = function(newCuorse){
  this.aprovedCourse.push(newCuorse)
}

const yonnys = new Student('Yonnys',25,'Venezuela',['PHP', 'Laravel']);

/* With Class */

class Student2{
  constructor({
    name,
    age,
    country,
    aprovedCourse = [],
  }){
    this.name = name;
    this.age = age;
    this.country = country;
    this.aprovedCourse = aprovedCourse;
  }

  addCourseAproved(newCuorse){
    this.aprovedCourse.push(newCuorse)
  }
}

const lucero = new Student2({
  name: 'Lucero',
  age: 25,
  country: 'Venezuela',
  aprovedCourse: ['HTML']
});