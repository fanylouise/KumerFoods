import React from 'react';
import '../Card/Card.css';
const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.src}></img>
    </div>
  );
}
 
export default Card;