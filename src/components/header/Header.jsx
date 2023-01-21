import React from 'react';
import Logo from '../logo/logo';
// styles
import './Header.scss';
import Nav from '../nav/Nav';

export default function Header() {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  );
}
