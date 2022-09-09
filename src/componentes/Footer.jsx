import React from 'react';
import '../componentes/Footer.css';
import Logo_Kumerfoods from './Logo-KumerFoods';

const Footer = ()=>{
  return(
    <>
      <h1 className='contacts'>Contatos</h1>
      <ul className='contacts_list'>
        <li><a href="https://beacons.ai/fanylouise" target='_blank'>@kumer_foods</a> </li>
        <li><a href="https://beacons.ai/fanylouise" target='_blank'>kumer@gmail.com</a> </li>
        <li><a href="https://beacons.ai/fanylouise" target='_blank'>(00)987654321</a></li>
      </ul>
      <p className='rights'>Todos os  direitos reservados <Logo_Kumerfoods/> 2022</p>
    </>
  )
}

export default Footer;