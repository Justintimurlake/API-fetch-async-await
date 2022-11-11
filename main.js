// throw
// function myFunction() {
//   const message = document.getElementById("p01");
//   message.innerHTML = "";
//   let x = document.getElementById("demo").value;
//   try {
//     if (x == "") throw "empty";
//     if (isNaN(x)) throw "not a number";
//     x = Number(x);
//     if (x < 5) throw "too low";
//     if (x > 10) throw "too high";
//   } catch (err) {
//     message.innerHTML = "Input is " + err;
//   }
// }

// //async await ex2

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let isShopOpen = true;

// function time(ms) {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(resolve, ms);
//     } else {
//       reject(console.log("shop is closed"));
//     }
//   });
// }

// async function kitchen() {
//   try {
//     await time(2000);
//     console.log(`${stocks.Fruits[0]} was selected`);

//     await time(1000);
//     console.log("production has started");

//     await time(2000);
//     console.log("cut the fruits");

//     await time(1000);
//     console.log(
//       `${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`
//     );

//     await time(1000);
//     console.log("start the machine");

//     await time(3000);
//     console.log("serve the ice cream");
//   } catch (error) {
//     console.log("customer left ", error);
//   } finally {
//     console.log("day ended, shop is closed");
//   }
// }

// kitchen();

// ====================================

// //async await ex1

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let isShopOpen = true;

// let toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Which toppings would you like to add?"));
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log("A");
//   console.log("B");
//   console.log("C");

//   await toppings_choice();
//   console.log("D");
//   console.log("E");
// }

// kitchen();

// console.log("doing the dishes");
// console.log("cleaning the table");
// console.log("taking others orders");

// --------------------------------------------

// //promise

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let isShopOpen = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Our shop is closed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   .then(() => {
//     return order(0000, () => console.log("production has started"));
//   })
//   .then(() => {
//     return order(2000, () => console.log("the fruit was chopped"));
//   })
//   .then(() => {
//     return order(1000, () =>
//       console.log(
//         `${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`
//       )
//     );
//   })
//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })
//   .then(() => {
//     return order(2000, () =>
//       console.log(`ice cream placed on ${stocks.holder[0]}`)
//     );
//   })
//   .then(() => {
//     return order(3000, () =>
//       console.log(
//         `ice cream placed on ${stocks.toppings[0]}  was selected`
//       )
//     );
//   })
//   .then(() => {
//     return order(2000, () => console.log("ice cream was served"));
//   })
//   .catch(() => {
//     console.log("Customer left");
//   })
//   .finally(() => {
//     console.log("day ended, shop is closed");
//   });

//================================================================

// //callBack

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let order = (Fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[Fruit_name]} was selected`);
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("productions was started");

//     setTimeout(() => {
//       console.log("the fruit has been chopped");

//       setTimeout(() => {
//         console.log(
//           `${stocks.liquid[0]} and ${stocks.liquid[1]} was added`
//         );

//         setTimeout(() => {
//           console.log("machine was started");
//           setTimeout(() => {
//             console.log(
//               `ice cream was placed on ${stocks.holder[0]} `
//             );

//             setTimeout(() => {
//               console.log(
//                 `${stocks.toppings[0]} was added as toppings`
//               );

//               setTimeout(() => {
//                 console.log("serve ice cream");
//               }, 1000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order(2, production);

// vidoes:
// https://www.youtube.com/watch?v=JRNToFh3hxU

// https://www.youtube.com/watch?v=ZYb_ZU8LNxs

// https://www.youtube.com/watch?v=PoRJizFvM7s&list=LL&index=2

// https://www.youtube.com/watch?v=_9vgd9XKlDQ&list=LL&index=3

// https://www.youtube.com/watch?v=V_Kr9OSfDeU&list=LL&index=4

// https://www.youtube.com/watch?v=DHvZLI7Db8E&list=LL&index=5
