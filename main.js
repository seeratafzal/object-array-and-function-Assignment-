//                                     Assignment #01
var people = {
    friends: []
};
var friend1 = {
    firstName: "seerat",
    lastName: "Afzal",
    id: 36599
};
var friend2 = {
    firstName: "saood",
    lastName: "jutt",
    id: 23456
};
var friend3 = {
    firstName: "zara",
    lastName: "khan",
    id: 638963
};
var add = people.friends = [friend1, friend2, friend3];
console.log(add);
//                                            Assignment #02
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
var newarr = scrambledArray.splice(2, 4);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 0, "am", "a");
scrambledArray.join();
console.log(scrambledArray);
//                                       Assignment #3
var inventory = [];
var product1 = {
    name: "airpods",
    model: "PRS234",
    cost: 4000,
    quantity: 60,
};
var product2 = {
    name: "phone",
    model: "HFU639",
    cost: 60000,
    quantity: 30,
};
var product3 = {
    name: "laptop",
    model: "JFDK99",
    cost: 80000,
    quantity: 40,
};
inventory.push(product1, product2, product3);
console.log("quentity of product3", inventory[2].quantity);
inventory.push({
    name: "watch",
    model: "JI89",
    cost: 30000,
    quantity: 10,
});
console.log(inventory);
var Students = [
    { name: "Alma", senior: true, assignment: false },
    { name: "Zaiba", senior: false, assignment: true },
    { name: "Shazma", senior: true, assignment: true },
    { name: "Nazia", senior: false, assignment: false },
    { name: "Zainab", senior: true, assignment: true },
];
function findSeniorStudentsWithAssignments(students) {
    return Students.filter(function (student) { return student.senior && student.assignment; });
}
console.log(findSeniorStudentsWithAssignments(Students));
function removeStudentsWithoutAssignments(students) {
    return Students.filter(function (student) { return student.assignment; });
}
console.log(removeStudentsWithoutAssignments);
