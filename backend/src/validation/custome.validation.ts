import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

// import password from './funtions/validation.password';

@ValidatorConstraint({ name: 'password', async: false })
export class CustomePassword implements ValidatorConstraintInterface {
  validate(value: any, validationArguments?: ValidationArguments) {
    console.log(validationArguments, 'ini dari validation Argument');
    const password = (data) => {
      let number = false;
      let symbols = false;
      let upperCase = false;
      let lowerCase = false;

      if (!data.length) return false;

      for (let i = 0; i < data.length; i++) {
        if (isNaN(data[i]) === false) {
          number = true;
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
        } else if (
          data[i] === data[i].toUpperCase() &&
          data[i] === data[i].toLowerCase()
        ) {
          symbols = true;
        }
      }

      if (number && symbols && upperCase && lowerCase) {
        return true;
      }

      return false;
    };

    return password(value);
  }
  defaultMessage(validationArguments?: ValidationArguments): string {
    console.log(validationArguments);

    return 'disini default error message';
  }
}
