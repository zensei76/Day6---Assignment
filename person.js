
// Day 6 :

//Write a “person” class to hold all the details.
class person {
	constructor(fname, lname, age, gender) {
		this.fname = fname;
		this.lname = lname;
		this.age = age;
		this.gender = gender;
	}
  getDetails() {
		return ` ${this.fname} ${this.lname}  ${this.age} ${this.gender}`;
}
  details() {
    console.log(` Hi, I am ${this.fname} ${this.lname}, ${this.gender}  ${this.age} years old `)
		return ;
	}
	
}
let person1 = new person('John',"Doe",25,"Male");
person1.details();