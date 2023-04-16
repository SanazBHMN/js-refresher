// const repeat = (str, times) => {
//   let result = "";
//   for (let i = 0; i < times; i++) {
//     result += str;
//   }
//   return result;
// };

// const scream = (str) => {
//   return str.toUpperCase() + "!!!";
// };

// const getRantText = (phrase) => {
//   let text = scream(phrase);
//   let rant = repeat(text, 8);

//   return rant;
// };

// const makeRant = (phrase, el) => {
//   const h1 = document.createElement("h1");
//   h1.innerText = getRantText(phrase);
//   el.appendChild(h1);
// };

// // console.log("HELLO!!");

// makeRant("I hate mayonnaise", document.body);
// // makeRant("If you have to cough, please cover your mouth", document.body);

// console.log("I HAPPEN FIRST");
// setTimeout(() => {
//   console.log("I HAPPEN THIRD");
// }, 3000);
// console.log("I HAPPEN SECOND");

// const btn = document.querySelector("button");

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const moveX = (element, amount, delay, onSucess, onFailure) => {
//   setTimeout(() => {
//     const bodyBoundary = document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right;
//     const currLeft = element.getBoundingClientRect().left;

//     if (elRight + amount > bodyBoundary) {
//       onFailure();
//     } else {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//       onSucess();
//     }
//   }, delay);
// };

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//           moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000);
//           });
//         });
//       });
//     });
//   });
// });

// moveX(
//   btn,
//   100,
//   1000,
//   () => {
//     // success
//     moveX(
//       btn,
//       400,
//       1000,
//       () => {
//         // success
//         moveX(
//           btn,
//           700,
//           1000,
//           () => {
//             // success
//             console.log("REALLY, WE STILL HAVE SCREEN LEFT?");
//           },
//           () => {
//             alert("CANNOT MOVE FURTHER!");
//           }
//         );
//       },
//       () => {
//         // fail
//         alert("CANNOT MOVE FURTHER!");
//       }
//     );
//   },
//   () => {
//     // fail
//     alert("CANNOT MOVE FURTHER!");
//   }
// );

// Introducing Promises
const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});
willGetYouADog.then(() => {
  console.log("YAY WE GOT A DOG");
});
willGetYouADog.catch(() => {
  console.log(":( NO DOG");
});
