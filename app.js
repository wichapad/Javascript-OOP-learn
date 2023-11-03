// Create class
// class User {
// Property

// public
//   name = "Avatar";
//   password = 000;
// Default Constructor
// constructor() {
//   console.log("Call use constructor");
// }

// Private
//   #name;
//   #password;
//   static type = "User system"; //static property
// Parameter Constructor
//   constructor(n, p) {
//     this.#name = n;
//     this.#password = p;
//     // this.showDetail() //Call method in class use keyword this
//   }
// method
//   showDetail() {
//     console.log(`Name users ${this.#name}, Password ${this.#password}`);
//   }
// Setter Method change values
//   setName(newN) {
//     this.#name = newN;
//   }
//   setPass(newP) {
//     this.#password = newP;
//   }
// Getter Method put values
//   getName() {
//     return this.#name;
//   }
//   getPassword() {
//     return this.#password;
//   }
// Setter Method แบบ accessors
//   set Name(newN) {
//     this.#name = newN;
//   }
//   set Password(newP) {
//     this.#password = newP;
//   }
//   // Getter Method แบบ accessors
//   get Name() {
//     return this.#name;
//   }
//   get Password() {
//     return this.#password;
//   }
//}

// Create Object
// const user1 = new User("admin", 456789);
// User.showType()
//Call method outside class use object

// Example1 Static property
// Math
// console.log(Math.max(10,20));

// Example 2
// CreateUser Class Main
class User {
  // Protected
  _name;
  // Private
  #password;

  constructor(name, password) {
    this._name = name;
    this.#password = password;
  }
  // method
  showDetail() {
    console.log(`Name users ${this._name}, Password ${this.#password}`);
  }

  // Setter Method แบบ accessors
  set Name(newN) {
    this._name = newN;
  }
  set Password(newP) {
    this.#password = newP;
  }
  //   // Getter Method แบบ accessors
  get Name() {
    return this._name;
  }
  get Password() {
    return this.#password;
  }
  // Call use static method addUser
  static addUser(newUser) {
    this.database.push(newUser);
  }
}
// extends สืบทอดคุณสมบัติ
class Teacher extends User {
  #course;
  constructor(name, password, course) {
    super(name, password);
    this.#course = course;
  }
  showDetail() {
    console.log(`ชื่อคุณครู ${this._name} สอนวิชา ${this.#course}`);
  }
}
class Student extends User {
  #score;
  constructor(name, password, score) {
    super(name, password);
    this.#score = score;
  }
  showDetail() {
    console.log(`ชื่อ นักเรียน ${this._name} สอบได้ ${this.#score} คะแนน`);
  }
}
const user1 = new Teacher("teacher1", 123, "Programmer");
user1.showDetail();
const user2 = new Teacher("teacher2", 123, "English");
user2.showDetail();
const user3 = new Student("student1", 456, 100);
user3.showDetail();
const user4 = new Student("student2", 789, 80);
user4.showDetail();
