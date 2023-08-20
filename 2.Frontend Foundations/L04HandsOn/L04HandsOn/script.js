class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
}

class Manager extends Employee {
    constructor(descriptionOfJob, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription() {
        console.log(this.name + ' was hired on ' + this.hireDate + ' and makes $' + this.salary + ' because she is responsible for ' + this.descriptionOfJob);
    }
}
  
class Designer extends Employee {
    constructor(experience, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.experience = experience;
    }
    yearsExperience() {
        console.log(this.name + ' is a designer with ' + this.experience + "years of experience. But she was only hired on " + this.hireDate + ' so she only makes $' + this.salary);
    }
}

class SalesAssociate extends Employee {
    constructor(degrees, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.degrees = degrees;
    }
    degreeCompleted() {
        console.log(this.name + ' Has been working here since ' + this.hireDate + ' making him the most senior employee despite being a sales associate. Because of this he makes $' + this.salary + ' and holds a ' + this.degrees + " degree.");
    }
}

let description = new Manager("overseeing the sales staff.", "Brian", 1000, "10/12/2004");
let yrsExperience = new Designer(12, "Brian", 2000, "11/12/2004");
let highestCompleted = new SalesAssociate("masters", "Brian", 3000, "12/13/2003")
description.jobDescription();
yrsExperience.yearsExperience();
highestCompleted.degreeCompleted();