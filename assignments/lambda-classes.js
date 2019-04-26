// CODE here for your Lambda Classes

class Person {
    constructor (attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructors extends Person {
    constructor (attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.faveLanguage = attributes.faveLanguage;
        this.catchPhrase = `Trust the process.`;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} recieves a perfect score on ${subject}`;
    }
}

class Students extends Person {
    constructor(attributes){
        super(attributes);
        this. previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects; 
    }
    listsSubjects(favSubjects){
        for(let i=0; i<this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructors {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`
    }
    debugsCode(Students, subject){
        return `${this.name} debugs ${Students.name}'s code on ${subject}`;
    }
}

// Two Student Objects
const rasha = new Students({
    name: 'Rasha',
    age: 40,
    location: 'Philadelphia',
    gender: 'Female',
    previousBackground: 'tech support',
    className: 'WebPT6',
    favSubjects: ['HTML', 'CSS', 'JS']
});

const sami = new Students({
    name: 'Sami',
    age: 34,
    location: 'New York',
    gender: 'Male',
    previousBackground: 'mechanic',
    className: 'WebPT4',
    favSubjects: ['React', 'JS'],
});


// Two Instructor Objects

const bilal = new Instructors ({
    name: 'Bilal',
    age: 45,
    location: 'Baltimore',
    gender: 'male',
    specialty: 'React',
    faveLanguage: 'JavaScript',
    catchPhrase: 'Trust the process'
});

const rami = new Instructors ({
    name: 'Rami',
    age: 39,
    location: 'Chicago',
    gender: 'male',
    specialty: 'Python',
    faveLanguage: 'Go',
    catchPhrase: 'Explain it to me.'
})

// Two PM Objects

const kat = new ProjectManagers ({
    name: 'Kat',
    age: 30,
    location: 'New York',
    gender: 'female',
    gradClassName: 'CS10',
    favInstructor: 'Rami'
})

const maya = new ProjectManagers ({
    name: 'Maya',
    age: 25,
    location: 'DC',
    gender: 'female',
    gradClassName: 'CS12',
    favInstructor: 'Bilal'
})

console.log(maya.debugsCode(rasha, 'CSS'));
console.log(kat.standUp('WebPT6'));

console.log(rasha.PRAssignment('JavaScript-IV'));
console.log(sami.sprintChallenge('JavaScript Fundamentals'));
rasha.listsSubjects();

console.log(rami.catchPhrase);
console.log(bilal.demo('React'));
console.log(rami.grade(rasha, 'JavaScript'));




