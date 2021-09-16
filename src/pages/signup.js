import { isEmpty } from '@ramda/isempty/isEmpty';
import { isNil } from '@ramda/isnil/isNil';
import React, { useEffect, useState } from 'react';
import PasswordField from '../components/shared/passwordField';
import { FormStyle } from '../styles/form.style';
import { CointainerStyle } from '../styles/layout.style';
import { SingupStyle } from '../styles/signup.style';
import { validatorPassword } from '../utility/helper';

const Signup = () => {
  const [email, emailHandler] = useState(null);
  const [name, nameHandler] = useState(null);
  const [password, passwordHandler] = useState(null);

  // error State
  const [errorFieldPassword, errorFieldPasswordHandler] = useState(null);

  useEffect(() => {
    if (!isNil(password)) {
      const _isValid = validatorPassword(password);

      if (_isValid.valid) {
        errorFieldPasswordHandler(null);
      } else {
        const { error = '' } = _isValid;
        errorFieldPasswordHandler(error);
      }
    }

    // eslint-disable-next-line
  }, [password]);

  return (
    <>
      <SingupStyle>
        <CointainerStyle>
          <div>
            <h1>Start your free trial</h1>
            <p>lorem lorem lorem</p>

            <FormStyle>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}>
                <div className='field-row'>
                  <label htmlFor='form-name'>Name</label>
                  <input
                    type='text'
                    id='form-name'
                    required
                    value={name || ''}
                    onChange={(e) => {
                      nameHandler(e.target.value);
                    }}
                  />
                </div>
                <div className='field-row'>
                  <label htmlFor='form-email'>Email</label>
                  <input
                    type='email'
                    id='form-email'
                    required
                    value={email || ''}
                    onChange={(e) => {
                      emailHandler(e.target.value);
                    }}
                  />
                </div>
                <div className='field-row'>
                  <label htmlFor='form-password' required>
                    Password
                  </label>
                  <PasswordField
                    id='form-password'
                    autoComplete='false'
                    value={password || ''}
                    onChange={(e) => {
                      passwordHandler(e.target.value);
                    }}
                  />
                  {errorFieldPassword && (
                    <p className='error'>{errorFieldPassword}</p>
                  )}
                </div>
                <button
                  type='submit'
                  disabled={
                    isEmpty(name) || isEmpty(email) || isEmpty(password)
                  }>
                  Sign up
                </button>
              </form>
            </FormStyle>
          </div>
        </CointainerStyle>
      </SingupStyle>
    </>
  );
};

export default Signup;
