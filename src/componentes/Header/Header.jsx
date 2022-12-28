import React from 'react';

import '../Header/Header.css';

import Logo_Kumerfoods from '../Logo/Logo-KumerFoods';
import Navigation from '../Navigation/Navigation';
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
      <div>
        <Logo_Kumerfoods />
      </div>
       
      <Navigation/>
      
    </>
    </div>
  
     
  )
}
 
export default Header;