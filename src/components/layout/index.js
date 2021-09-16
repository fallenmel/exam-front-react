import React from 'react';
import { LayoutStyle } from '../../styles/layout.style';
import Header from '../header';


const Layout = ({ children }) => {
  return (
    <>
      <LayoutStyle>
        <Header />
        <div className='body-content'>
          {children}
        </div>
      </LayoutStyle>
    </>
  )
}


export default Layout