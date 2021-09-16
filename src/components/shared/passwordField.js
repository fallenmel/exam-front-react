import React, { useState } from 'react';
import { PasswordFieldStyle } from '../../styles/shared.style';

const PasswordField = (props) => {
  const [toggle, toggleHandler] = useState(false)
  return (
    <>
      <PasswordFieldStyle>
        <input {...props} type={`${toggle ? 'text' : 'password'}`} />
        <img src='/assets/visibility.svg' alt='show' onClick={() => toggleHandler(!toggle)} />
      </PasswordFieldStyle>
    </>
  );
};

export default PasswordField;
