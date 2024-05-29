// Assignment 1: Building Your Friend List
var people = {
    freinds: []
};
var friend1 = { firstName: "Talha", lastName: "Khan", id: 324880 };
var friend2 = { firstName: "Zubair", lastName: "Ahmed", id: 324881 };
var friend3 = { firstName: "Ali", lastName: "Khan", id: 324882 };
people.freinds.push(friend1, friend2, friend3);
// console.log(people);
// Assignment 2:Manipulating an Array: Rearranging Words
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
var rearrangeArray = [
    scrambledArray[7],
    scrambledArray[4],
    scrambledArray[5],
    scrambledArray[0],
    scrambledArray[1],
    scrambledArray[6]
];
var result = rearrangeArray.join(" ");
// console.log(result);
// Assignment 3: Company Product Catalog
var inventory = [];
var product1 = { name: "Air Conditioner", model: "R134a", cost: 100000, quantity: 500 };
var product2 = { name: "Washing Machine", model: "BOSS-1", cost: 12000, quantity: 35 };
var product3 = { name: "Refrigerator", model: "PEL-B", cost: 59000, quantity: 15 };
inventory.push(product1, product2, product3);
var student0 = [
    { name: "Rafay", seniorStudent: true, completedAssignment: true },
    { name: "Arsalan", seniorStudent: false, completedAssignment: false },
    { name: "Noman", seniorStudent: true, completedAssignment: false },
    { name: "Daniyal", seniorStudent: false, completedAssignment: true },
];
// Optional Step
var seniorAndCompleteStudents = function (student0) {
    return student0.filter(function (student0) { return student0.seniorStudent && student0.completedAssignment; });
};
// Optional Step
var updateClassList = function (student0) {
    return student0.filter(function (student0) { return student0.completedAssignment; });
};
console.log(seniorAndCompleteStudents(student0));
console.log(updateClassList(student0));
