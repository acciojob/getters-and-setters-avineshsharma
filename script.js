//complete this code
class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
		
	}
	get name(){
		return this._name;
	}
	set age(newage){
		this._age = newage;
	}
}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
