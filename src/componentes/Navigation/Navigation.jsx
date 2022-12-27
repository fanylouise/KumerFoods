import React from 'react';
import './Navigation.css';

const Navigation = () => {


  return (
    <nav >
      <div className='hamburguer'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className='Navigation'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Opções</a></li>
        <li><a href='#'>Favoritos</a></li>
        <li><a href='#'>Contatos</a></li>
      </ul>
    </nav>
  );
}
 
export default Navigation;