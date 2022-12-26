// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain username
// If all requirements are met, return true,
// Otherwise: false

// isValidPassword('89Fjjlnms', 'dogluvr'); //true
// isValidPassword('dogluvr123', 'dogluvr'); //false

// version 1
// function isValidPassword(password, username) {
//   if (
//     password.length >= 8 &&
//     !password.includes(" ") &&
//     !password.includes(username)
//   ) {
//     return true;
//   }
//   return false;
// }

// version 2
// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     return false;
//   }
//   if (password.indexOf(" ") !== -1) {
//     return false;
//   }
//   if (password.indexOf(username) !== -1) {
//     return false;
//   }
//   return true;
// }

// version 3
// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;
//   }
//   return true;
// }

// version 4
function isValidPassword(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(" ") !== -1;
  const tooSimilar = password.indexOf(username) !== -1;

  return tooShort || hasSpace || tooSimilar;
}
