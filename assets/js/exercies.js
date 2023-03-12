class Student {
  constructor({
    name,
    username,
    socialMedia:{
      facebook = undefined,
      twitter = undefined,
      linkedin = undefined,
    },
    aprovedCourse = [],
    learningPaths = {}
  }){
    this.name = name;
    this.username = username;
    this.facebook = facebook;
    this.twitter = twitter;
    this.linkedin = linkedin;
    this.aprovedCourse = aprovedCourse;
    this.learningPaths = learningPaths;
  }

}

class LearningPaths{
  constructor({
    name,
    courses = [],
  }){
    this.name = name;
    this.courses = courses;
  }
}

class Course{
  constructor({
    name,
    classCourse = [],
  }){
    this._name = name;
    this.classCourse = classCourse;
  }

  get name(){
    return this._name;
  }

  set name(value){
    if(value === "Estrella"){
      console.log("Hey no se puede");
    }else{
      this._name = value;
    }
  }
}

class classCourse{
  constructor({
    name
  }){
    this.name = name;
  }
}

const leccion1 = new classCourse({
  name: 'Leccion 1'
})

const cursoHTML = new Course({
  name: 'Curso de Html',
  classCourse: [
    leccion1
  ]
})
const cursoCSS = new Course({
  name: 'Curso de CSS',
  classCourse: [
    leccion1,
    "Leccion 2"
  ]
})


const desarrolloWeb = new LearningPaths({
  name: 'Desarrollo Web',
  courses: [
    cursoHTML, cursoCSS
  ]
})

const finanzas = new LearningPaths({
  name: 'Finanzas',
  courses: [
    "fundamentos de las finanzas", "Excel", "Excel avanzado"
  ]
})


const gladibeth = new Student({
  name: 'Gladibeth',
  username: 'strellitax1',
  socialMedia: {
    facebook: 'GladibethFranco',
    twitter: 'strellitax1',
    linkedin: 'gladibethfranco',
  },
  aprovedCourse: [
    "HTML", "CSS", "JavaScript"
  ],
  learningPaths:{
    desarrolloWeb,
    finanzas
  }
})