import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../../styles/header.style';
import { CointainerStyle } from '../../styles/layout.style';

const Header = () => {
  const menus = [
    {
      title: 'Home',
      url: '#',
    },
    {
      title: 'About',
      url: '#',
    },
    {
      title: 'Pricing',
      url: '#',
    },
    {
      title: 'Blogo',
      url: '#',
    },
    {
      title: 'Page',
      url: '#',
    },
    {
      title: 'Help',
      url: '#',
    },
    {
      isButtom: true,
      title: 'Sign up',
      url: '#',
    },
  ];
  return (
    <>
      <HeaderStyle>
        <CointainerStyle>
          <div>
            <img src='/assets/Logo.jpg' alt='logo' />
          </div>
          <div>
            <ul>
              {menus.map((e, i) => (
                <Fragment key={i}>
                  <li className={`${e.isButtom ? 'btn' : ''}`}>
                    <Link to='/'>{e.title}</Link>
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>
        </CointainerStyle>
      </HeaderStyle>
    </>
  );
};

export default Header;
