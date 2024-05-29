// Assignment 1: Building Your Friend List

const people = {
    freinds: [] as {firstName: string; lastName: string; id?: number} []
}

const friend1 = {firstName: "Talha", lastName: "Khan", id: 324880}
const friend2 = {firstName: "Zubair", lastName: "Ahmed", id: 324881}
const friend3 = {firstName: "Ali", lastName: "Khan", id: 324882}

people.freinds.push(friend1, friend2, friend3)

console.log(people);


// Assignment 2:Manipulating an Array: Rearranging Words

const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];

let rearrangeArray = [
    scrambledArray[7],
    scrambledArray[4],
    scrambledArray[5],
    scrambledArray[0],
    scrambledArray[1],
    scrambledArray[6]
];

let result = rearrangeArray.join(" ")

console.log(result);


// Assignment 3: Company Product Catalog

const inventory = [] as {name:string; model:string; cost:number; quantity:number} []

let product1 = {name:"Air Conditioner", model:"R134a", cost:100000, quantity:500 }
let product2 = {name:"Washing Machine", model:"BOSS-1", cost:12000, quantity:35 }
let product3 = {name:"Refrigerator", model:"PEL-B", cost:59000, quantity:15 }

inventory.push(product1, product2, product3)

console.log(inventory[2].quantity);


// Assignment 4: Student List Organizer

interface Student {
    name: string,
    seniorStudent: boolean,
    completedAssignment: boolean
}

const student0: Student[] = [
    {name:"Rafay", seniorStudent:true, completedAssignment:true},
    {name:"Arsalan", seniorStudent:false, completedAssignment:false},
    {name:"Noman", seniorStudent:true, completedAssignment:false},
    {name:"Daniyal", seniorStudent:false, completedAssignment:true},
]

// Optional Step
const seniorAndCompleteStudents = (student0: Student[]) => {
    return student0.filter(student0 => student0.seniorStudent && student0.completedAssignment)
}


// Optional Step
const updateClassList = (student0: Student[]) => {
    return student0.filter(student0 => student0.completedAssignment)
}


console.log(seniorAndCompleteStudents(student0));
console.log(updateClassList(student0));
