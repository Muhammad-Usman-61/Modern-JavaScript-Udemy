// let array = [1, 2, 3, 4, 5];

// const filteredArray = array.filter((item) => item > 3);

// console.log(filteredArray);

// const users = [
//     { name: 'John', age: 34 },
//     { name: 'Amy', age: 20 },
//     { name: 'camperCat', age: 10 }
// ];

// const premiumUser = users.filter((user) => user.age > 20);

// console.log(premiumUser);

// const price = [10, 20, 30, 40, 50];

// const discountPrice = price.map((item) => item * 0.8);

// console.log(discountPrice);

// const products = [
//   { name: "laptop", price: 1000 },
//   { name: "desktop", price: 1500 },
//   { name: "phone", price: 500 },
//   { name: "keyboard", price: 25 },
// ];

// const saleProducts = products.map(product => {
//   if (product.price > 100) {
//     return { name: product.name, price: product.price / 2 };
//   } else {
//     return product;
//   }
// });

// console.log(saleProducts);

// let scores = [10, 20, 30, 40, 50];

// const totalScore = scores.reduce((acc, curr) => {
//     if (curr > 30) {
//         acc++;
//     }
//     return acc;
//     }, 0);

// console.log(totalScore);

// const users = [
//     { name: 'John', age: 34 },
//     { name: 'Amy', age: 20 },
//     { name: 'camperCat', age: 10 }
// ];

// const sumOfAges = users.reduce((acc, curr) => acc + curr.age, 0);

// console.log(sumOfAges);

// const players = [
//     { name: "John", score: 30 },
//     { name: "Amy", score: 20 },
//     { name: "camperCat", score: 10 },
//     ];

// const sort = players.sort((a,b) => {
//     return b.score - a.score;
// });

// const maxScore = sort[0].score;

// console.log(maxScore);


const products = [
    { name: "laptop", type: "No Sale" },
    { name: "desktop", type: "For Sale" },
    { name: "phone", type: "No Sale" },
    { name: "keyboard", type: "For Sale" }
];

const ForSale = products.filter(product => product.type === "For Sale");

console.log(ForSale);