// let name1 = "hamid"
// let name2 = "Murad"

// let names = ["Murad","Qurban","Ruslan","Murad"];
// names[5] = "Metin";

// let name = names[2];


// console.log(names[2]);
// console.log(name);
// console.log(names.length)
// console.log(names)


// for (let index = 0; index < names.length; index++) {
//     console.log(names[index])
// }


// let i = 0;
// let count = 0;

// while (i < names.length) {
//     // console.log(names[i])

//     if (names[i] == "Murad") {
//         // console.log("Murad Index"+" "+i)

//         count++;
//     }

//     i++
// }

// console.log("Murad Adindan "+count+" Qederdir")

// let nums = [5,7,15,21,26,30];

// for (let index = 0; index < nums.length; index++) {
//     console.log(nums[index]);
    
// }

// let student1 = 
// {
//     name : "Murad",
//     surname :"Abdullayev",
//     age : 21
// }

// let student2 = 
// {
//     name : "Murad",
//     surname :"Memmedov",
//     age : 35
// }

// let student3=
// {
    
// }
// let name1 = "Murad";

// let surname = "Abdullayev";

// let age = 21;

// let name2 = "Murad";

// let surname2 = "Memmedov";

// let age2 = 35;

// console.log(student1.name+" "+student1.surname);
// console.log(student1)
// console.log(name1)


let nums = [1,3,5,4,12,10,9,6];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i])
    if (nums[i] % 5 == 0) {
        sum+=nums[i];
    }
    
}

console.log(sum)