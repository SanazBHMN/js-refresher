// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// function getCard() {
//   const values = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   const suits = ["clubs", "spades", "hearts", "diamonds"];

//   return {
//     value: values[Math.floor(Math.random() * values.length)],
//     suit: suits[Math.floor(Math.random() * suits.length)],
//   };
// }

function pick(arr) {
  // return random element from arr
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getCard() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];

  return {
    value: pick(values),
    suit: pick(suits),
  };
}
