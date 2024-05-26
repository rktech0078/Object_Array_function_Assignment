// Assignment 1: Building Your Friend List

const people = {
    freinds: [] as {firstName: string; lastName: string; id?: number} []
}

const friend1 = {firstName: "Talha", lastName: "Khan", id: 324880}
const friend2 = {firstName: "Zubair", lastName: "Ahmed", id: 324881}
const friend3 = {firstName: "Ali", lastName: "Khan", id: 324882}

people.freinds.push(friend1, friend2, friend3)

console.log(people);
