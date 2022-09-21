import React from 'react';

import './Header.css';

import Logo_Kumerfoods from './Logo-KumerFoods';
import Navigation from './Navigation';
import MoonTheme from './Moon';

  let nav = document.querySelector('.App-header');

  let y = window.scrollY;

  function Header(){

    window.addEventListener('scroll', () => {
    if (y < window.scrollY) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }

    y = window.scrollY;
  });

  return(
    <div className='App-header'>
    <>
      <Logo_Kumerfoods/>
      <Navigation/>
      <MoonTheme/> 
    </>
    </div>
  
     
  )
}
 
export default Header;