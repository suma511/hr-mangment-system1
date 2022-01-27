"use strict";
const tax = 0.075;
function Employee(id, fullName, departMent, level, imageUrl) {
  this.id = id;
  this.fullName = fullName;
  this.departMent = departMent;
  this.level = level;
  this.imageUrl = imageUrl;
  this.salary = 0;
}


function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

Employee.prototype.finalsalary = function () {
  let max, min;
  switch (this.level) {
    case ("senior"):
      max = 2000;
      min = 1500;
      this.salary = parseInt(randomNumber(min, max) - (randomNumber(min, max) * 0.075));
      break;
    case ("midsenior"):
      max = 1500;
      min = 1000;
      this.salary = parseInt(randomNumber(min, max) - (randomNumber(min, max) * 0.075));

      break;
    case ("junior"):
      max = 1000;
      min = 500;
      this.salary = parseInt(randomNumber(min, max) - (randomNumber(min, max) * 0.075));

      break;
  }
}

Employee.prototype.render = function () {
  console.log("hi");
  document.write(`<p> ${this.fullName}        ${this.salary}   </p>  `);
}






const Ghazi = new Employee(1000, "Gazi Samer", "adminstration", "senior");
Ghazi.finalsalary()
Ghazi.render();
const Lana = new Employee(1001, "Lana Ali", "Finance", "senior");
Lana.finalsalary()
Lana.render();
const Tamara = new Employee(1002, "Tamara Ayoub", "marketing", "senior");
Tamara.finalsalary()
Tamara.render();
const Safi = new Employee(1003, "Safi Walid", "adminstration", "medsenior");
Safi.finalsalary()
Safi.render();
const Omar = new Employee(1004, "Omar Zaid", "development", "senior");
Ghazi.finalsalary()
Ghazi.render();
const Rana = new Employee(1005, "Rana Saleh", "development", "junior");
Ghazi.finalsalary()
Ghazi.render();
const Hadi = new Employee(1006, "Hadi Ahmad", "finance", "medsenior");
Omar.finalsalary()
Omar.render();
