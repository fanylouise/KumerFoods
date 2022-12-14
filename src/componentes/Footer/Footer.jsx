import React from 'react';
import '../Footer/Footer.css';
import Logo_Kumerfoods from '../Logo/Logo-KumerFoods';

const Footer = ()=>{
  return(
    <>
      <h1 className='contacts'>Contatos</h1>
      <ul className='contacts_list'>
        <li><a href="https://beacons.ai/fanylouise" target='_blank'>@kumer_foods</a> </li>
        <li><a href="https://beacons.ai/fanylouise" target='_blank'>kumer@gmail.com</a> </li>
        <li><a href="https://beacons.ai/fanylouise" target='_blank'>(00)987654321</a></li>
      </ul>
      <p className='rights'>Imagens meramente ilustrativas.
      Todos os  direitos reservados <Logo_Kumerfoods/> 2022</p>
    </>
  )
}

export default Footer;