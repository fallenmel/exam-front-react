import PasswordValidator from "password-validator";
import { isNil } from '@ramda/isnil/isNil';
import { isEmpty } from '@ramda/isempty/isEmpty';

export const validateEmail = (email) => {
  // eslint-disable-next-line
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};


const validator = new PasswordValidator()
validator
  .is()
  .min(8)
  .max(16)
  .has()
  .symbols(1)
  .has()
  .not()
  .spaces();


export const validatorPassword = (password) => {
  let _return = true;
  let _error = [];

  if (isNil(password) || isEmpty(password)) {
    _return = false;
    _error.push('is required');
  } else {
    // passport has value
    const passwordValid = validator.validate(password, { list: true });

    if (passwordValid.length) {
      _return = false;

      passwordValid.forEach((err) => {
        switch (err) {
          case 'min':
            _error.push('minimum is 8');
            break;
          case 'max':
            _error.push('maximum is 16');
            break;
          case 'spaces':
            _error.push(`should not contains ${err} `);
            break;
          default:
            _error.push(`should contains ${err} `);
        }
      });
    }
  }

  return {
    valid: _return,
    error: _return ? '' : 'Password ' + _error.join(', '),
  };
};
