// var filtered = car => {
//     return car.name === 'ford';
// };

// const arr = [
//     {"name":"chevy", "count": 2},
//     {"name":"ford", "count": 5},
//     {"name":"acura", "count": 3},
//     {"name":"honda", "count": 16},
// ]/filtered(filtered);

// console.log("Filtered results:", newArr)


const arr = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

const fullArray = [...arr, ...newStudents];

addNewStudent(fullArray);


//TODO OLD CODE
/*
// const arr = [
//     {"name":"chevy", "count": 2},
//     {"name":"ford", "count": 5},
//     {"name":"acura", "count": 3},
//     {"name":"honda", "count": 16},
// ];

// const newArr = [];

// for(let i= 0; i < arr.length; i++){
//     if(arr[i].name === "ford" ){
//         newArr.push(arr[i]);
//     }
// }

// console.log("Filter results:", newArr);
*/


/*
// const arr = ['Bill', 'Joe', 'Emily', 'Andrea']
// const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

// function addNewStudent(array, newArray) {
//     for(let i = 0; i < newArray.length; i++) {
//         array.push(newArray[i]);
//     }
// }

// addNewStudent(arr, newStudents);
*/