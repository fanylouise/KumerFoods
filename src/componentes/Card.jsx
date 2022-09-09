import React from 'react';
import '../componentes/Card.css';
const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img_url}></img>
    </div>
  );
}
 
export default Card;