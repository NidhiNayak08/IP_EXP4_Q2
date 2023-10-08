// Method 1: Using a function constructor
function Person1(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Method 2: Using ES6 class syntax
  class Person2 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Non-arrow function as a member function
    sayHello() {
      return `Hello, my name is ${this.name}, and I am ${this.age} years old.`;
    }
  
    // Arrow function as a member function
    introduce = () => {
      return `Hi, I'm ${this.name}.`;
    };
  }
  
  // Student class inherits from Person
  class Student extends Person2 {
    constructor(name, age, rollNumber) {
      super(name, age); // Call the constructor of the parent class
  
      if (rollNumber === 0) {
        throw new Error('Roll number cannot be zero.');
      }
  
      this.rollNumber = rollNumber;
    }
  
    // Override the introduce method
    introduce() {
      return `Hi, I'm ${this.name}, and I'm a student with roll number ${this.rollNumber}.`;
    }
  }
  
  // Create instances of the classes
  const person1 = new Person1('Alice', 25);
  const person2 = new Person2('Bob', 30);
  const student = new Student('Charlie', 20, 12345);
  
  // Print details
  console.log(person1.name, person1.age);
  console.log(person2.sayHello());
  console.log(person2.introduce());
  console.log(student.introduce());
  
  // Error case: Creating a student with roll number 0 will throw an exception
  try {
    const invalidStudent = new Student('Invalid', 22, 0);
    console.log(invalidStudent.introduce());
  } catch (error) {
    console.error(error.message);
  }
  