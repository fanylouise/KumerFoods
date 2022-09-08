import React from 'react';
import '../componentes/Footer.css';
import Logo_Kumerfoods from './Logo-KumerFoods';

const Footer = ()=>{
  return(
    <>
      <h1 className='contacts'>Contatos</h1>
      <ul className='contacts_list'>
        <li><a href="https://beacons.ai/fanylouise">@kumer_foods</a> </li>
        <li><a href="https://beacons.ai/fanylouise">kumer@gmail.com</a> </li>
        <li><a href="https://beacons.ai/fanylouise">(00)987654321</a></li>
      </ul>
      <p className='rights'>Todos os  direitos reservados a <Logo_Kumerfoods/> &#169; 2022</p>
    </>
  )
}

export default Footer;