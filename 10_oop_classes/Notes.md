#Javascript and Classes

## do javascript really have classes?
 
Yes, JavaScript has classes, but they are a syntactical sugar over JavaScript's existing prototype-based inheritance model. Classes were introduced in ECMAScript 2015 (ES6) to make object-oriented programming (OOP) easier and more intuitive for developers coming from class-based languages like Java or C#.

What Are JavaScript Classes?
A class in JavaScript is a blueprint for creating objects. You can define methods, constructors, and use inheritance via the extends keyword.


``` 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

// Creating an instance
const john = new Person('John', 30);
john.greet(); // Output: Hi, I'm John and I'm 30 years old.

```

##OOP (Object Oriented Programing)
-Collection of Properties and Methods
-ex toLowerCase,Promise

## Why Use OOP

## part of OOP
 - object literal

- Contructor function 
- Prototypes
- Classes
- Instances (new,this)


# 4 Pillars of OOP
Abstraction
Encapsulation
Inheritance
Polymorphism

