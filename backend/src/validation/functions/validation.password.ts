// const password = (data) => {
//   let number = false;
//   let symbols = false;
//   let upperCase = false;
//   let lowerCase = false;

//   if (!data.length) return false;

//   for (let i = 0; i < data.length; i++) {
//     if (
//       data[i] === data[i].toUpperCase() &&
//       data[i] === data[i].toLowerCase()
//     ) {
//       symbols = true;
//     } else if (
//       data[i] === data[i].toUpperCase() &&
//       data[i] !== data[i].toLowerCase()
//     ) {
//       upperCase = true;
//     } else if (
//       data[i] !== data[i].toUpperCase() &&
//       data[i] === data[i].toLowerCase()
//     ) {
//       lowerCase = true;
//     } else if (isNaN(data[i]) === false) {
//       number = true;
//     }
//   }

//   if (number && symbols && upperCase && lowerCase) {
//     return true;
//   }

//   return false;
// };

// const test = password('Vergil5565!');

// console.log(test);

import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomValidation {
  password(data) {
    console.log(data);

    let number = false;
    let symbols = false;
    let upperCase = false;
    let lowerCase = false;

    if (!data.length) return false;

    for (let i = 0; i < data.length; i++) {
      if (
        data[i] === data[i].toUpperCase() &&
        data[i] === data[i].toLowerCase()
      ) {
        symbols = true;
      } else if (
        data[i] === data[i].toUpperCase() &&
        data[i] !== data[i].toLowerCase()
      ) {
        upperCase = true;
      } else if (
        data[i] !== data[i].toUpperCase() &&
        data[i] === data[i].toLowerCase()
      ) {
        lowerCase = true;
      } else if (isNaN(data[i]) === false) {
        number = true;
      }
    }

    if (number && symbols && upperCase && lowerCase) {
      return true;
    }

    return false;
  }
}
