//                                     Assignment #01

let  people: any = {
    friends : [] 
};

let friend1 = {
    firstName: "seerat",
    lastName:  "Afzal",
    id:36599
};

let friend2 = {
    firstName: "saood" ,
    lastName:  "jutt",
    id:23456
};

let friend3 = {
    firstName: "zara",
    lastName:  "khan",
    id:638963
};

let add = people.friends = [friend1,friend2,friend3];
console.log(add);
     
 //                                            Assignment #02


const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
const newarr =scrambledArray.splice(2,4);
scrambledArray.pop();

scrambledArray.unshift("I" );
scrambledArray.splice(1,0,"am", "a")
 scrambledArray.join();

console.log(scrambledArray);

  //                                       Assignment #3
let inventory:{
    name:string;
    model:string;
    cost:number;
    quantity:number;
} []=[];

  const product1={
    name:"airpods",
    model:"PRS234",
    cost:4000,
    quantity:60,
  } ;                                     

  let product2={
    name:"phone",
    model:"HFU639",
    cost:60000,
    quantity:30,
  };  
  
  let product3={
    name:"laptop",
    model:"JFDK99",
    cost:80000,
    quantity:40,
  }  ;
   
  
 inventory.push(product1, product2, product3,);
  
console.log("quentity of product3",inventory[2].quantity);

inventory.push({
    name:"watch",
    model:"JI89",
    cost:30000,
    quantity:10,
});

console.log(inventory);


   //                               Assignment #04

interface student{
    name: string,
    senior:boolean,
    assignment:boolean,
}
const Students: student[] = [
    {name:"Alma", senior: true, assignment:false},
    {name:"Zaiba", senior:false ,assignment: true},
    {name:"Shazma", senior:true ,assignment: true},
    {name:"Nazia", senior:false ,assignment:false},
    {name:"Zainab", senior:true ,assignment: true},

]

function findSeniorStudentsWithAssignments(students: student[]): student[] {
    return Students.filter((student)=> student.senior && student.assignment);
}
console.log(findSeniorStudentsWithAssignments(Students));

function removeStudentsWithoutAssignments(students: student[]): student[] {
    return Students.filter((student)=> student.assignment);
}
console.log(removeStudentsWithoutAssignments);
