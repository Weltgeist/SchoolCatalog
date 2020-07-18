class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(numberOfStudents) {
    if (typeof numberOfStudents === 'number') {
      this._numberOfStudents = numberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers){
    return substituteTeachers[Math.floor(Math.random()*substituteTeachers.length)];
  }

}

class Primary extends School {
  
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name);
    super(level);
    super(numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }

}


class Middle extends School {
  
  constructor(name, level, numberOfStudents) {
    super(name);
    super(level);
    super(numberOfStudents);
  }

}

class High extends School {
  
  constructor(name, level, numberOfStudents, sportsTeams) {
    super(name);
    super(level);
    super(numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    return this._sportsTeams;
  }

}