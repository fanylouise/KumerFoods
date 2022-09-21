import React from 'react';
import './Moon.css';

let body = document.querySelector('body');
let button = document.querySelector('button');

let theme = () =>{
   body.classList.toggle('theme');

   if(body.classList.contains('theme')){
  button.classList.add('changMoon');
}else{
  button.classList.remove('changMoon');
}
};

const MoonTheme= () => {
  return <button onClick={theme}></button>;
}

export default MoonTheme;