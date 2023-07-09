// promises

// let marks = 5
// let prom = new Promise ( function (resolve , reject){
//    if (marks  > 10) {
//    resolve(marks)
//    }else{
//    reject(marks)
//    }
// })
// console.log(prom);

// function result(marks) {
//   return new Promise(function (resolve, reject) {
//     if (marks > 10) {
//       resolve(marks);
//     }
//     else {
//       reject(marks);
//     }
//   });
// }

// console.log(result(20));

// function result(marks) {
//   return new Promise(function (resolve, reject) {
//     if (marks > 10) {
//       resolve(marks);
//     } else {
//       reject(marks);
//     }
//   });
// }

// function fullfill(result) {
//   console.log(result);
// }
// function rejected(result) {
//   console.log(result);
// }
// // console.log(result(20));
// result(20).then(fullfill() )
// result(20).catch(rejected ())






function result(marks) {
    return new Promise(function (resolve, reject) {
        console.log("fetching results...");
     setTimeout ( function name(params) {
        if (marks > 10) {
            resolve(marks);
          } else {
            reject(marks);
          }
     },3000
       )
    });
  }
  
  function fullfill(result) {
    console.log(result);
  }
  function rejected(result) {
    console.log(result);
  }
  // console.log(result(20));
  result(20).then(fullfill() )
  result(20).catch(rejected ())