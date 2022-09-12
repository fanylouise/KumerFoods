import React from 'react';
import '../componentes/Navigation.css';

const Navigation = () => {
  return (
    <nav >
      <ul className='Navigation'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Opções</a></li>
        <li><a href="#">Favoritos</a></li>
        <li><a href="#">Contatos</a></li>
      </ul>
    </nav>
  );
}
 
export default Navigation;