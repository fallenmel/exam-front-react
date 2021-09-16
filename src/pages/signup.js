import { isNil } from '@ramda/isnil/isNil';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeUser } from '../actions/user';
import PasswordField from '../components/shared/passwordField';
import { FormStyle } from '../styles/form.style';
import { CointainerStyle } from '../styles/layout.style';
import { SingupStyle } from '../styles/signup.style';
import { validatorPassword, validateEmail } from '../utility/helper';

const Signup = ({ doMakeUser }) => {
  const [email, emailHandler] = useState(null);
  const [name, nameHandler] = useState(null);
  const [password, passwordHandler] = useState(null);

  // error State
  const [errorFieldPassword, errorFieldPasswordHandler] = useState(null);
  const [errorFieldEmail, errorFieldEmailHandler] = useState(null);

  const _validateEmail = (email) => {
    const _emailValid = validateEmail(email);
    if (_emailValid) {
      errorFieldEmailHandler(null);
      return true;
    } else {
      errorFieldEmailHandler('Please input a valid email format');
      return false;
    }
  };

  const _validatePassword = (password) => {
    const _isValid = validatorPassword(password);

    if (_isValid.valid) {
      errorFieldPasswordHandler(null);
      return true;
    } else {
      const { error = '' } = _isValid;
      errorFieldPasswordHandler(error);
      return false;
    }
  };

  useEffect(() => {
    if (!isNil(password)) {
      _validatePassword(password);
    }

    // eslint-disable-next-line
  }, [password]);

  useEffect(() => {
    if (!isNil(email)) {
      _validateEmail(email);
    }

    // eslint-disable-next-line
  }, [email]);

  const submit = () => {
    const _payload = {
      email,
      name,
      password,
    };

    const _passwordValid = _validatePassword(password);
    const _emailValid = _validateEmail(email);

    if (_passwordValid && _emailValid) {
      console.log('_payload', _payload);
      doMakeUser(_payload)
        .then((response) => {
          console.log('response', response);
        })
        .catch((error) => {
          console.log('error', error);
        });
    }
  };

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
                  submit();
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
                  {errorFieldEmail && (
                    <p className='error'>{errorFieldEmail}</p>
                  )}
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
                    !name ||
                    !email ||
                    !password ||
                    errorFieldPassword ||
                    errorFieldEmail
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

const mapDispatchToProps = (dispatch) => ({
  doMakeUser: (payload) => dispatch(makeUser(payload)),
});

export default connect(null, mapDispatchToProps)(Signup);
