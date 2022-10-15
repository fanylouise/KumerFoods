import React from 'react';
import '../Title/Title.css'

const Title = (props) => {
  return (
    <h1>{props.text}{props.svg}</h1>
  );
}
 
export default Title;
