import React from 'react';
import './Moon.css';

let theme = () =>{
  // document.body.style.backgroundColor='#4991A0'
  // document.getElementsByTagName('h1').style.color='#ffffff';
};

const MoonTheme= () => {
  return <button onClick={theme()}></button>;
}

export default MoonTheme;