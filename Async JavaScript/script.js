// console.log("Hello");
// console.log("World");

// setTimeout(() => {
//   console.log("This will run after 3 seconds!");
// }, 3000);

// console.log("This will run first!");
const getTodos = (referance, callback) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        //console.log(request.responseText);
        let data = JSON.parse(request.responseText);
        //callback(undefined, data);
        resolve(data);
      } else if (request.readyState === 4) {
        //console.log("Could not fetch the data!");
        //callback("Could not fetch the data!", undefined);
        reject("Could not fetch the data!");
      }
    });

    // request.open("GET", "https://jsonplaceholder.typicode.com/todos");
    //request.open("GET", "./todos.json");
    request.open("GET", referance);
    request.send();
  });
};

// console.log(1);
// console.log(2);
// getTodos((err, data) => {
//   console.log("callback fired");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// console.log(3);
// console.log(4);

// callback hell

// getTodos("./todos.json", (err, data) => {
//   console.log(data);
//   getTodos("./todos2.json", (err, data) => {
//     console.log(data);
//     getTodos("./todos3.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// Promises
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     resolve("some data");
//     //=reject("some error");
//   });
// };

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

getTodos("./todos.json")
  .then((data) => {
    console.log("Promise 1 resolved:", data);
    return getTodos("./todos2.json");
  })
  .then((data) => {
    console.log("Promise 2 resolved:", data);
    return getTodos("./todos3.json");
  })
  .then((data) => {
    console.log("Promise 3 resolved:", data);
  })
  .catch((err) => {
    console.log("Promise 1 rejected:", err);
  });
