import React from 'react';
import '../Theme/Moon.css';

let body = document.querySelector('body');
let button = document.querySelector('button');

let theme = () =>{
   body.classList.toggle('theme');

   if(body.classList.contains('theme')){
  button.classList.add('changMoon'); 
}else if(button.classList.containes('changMoon')){
  button.classList.remove('changMoon') && button.classList.add('changSun')
}
};

const MoonTheme= () => {
  return <button onClick={theme}></button>;
}

export default MoonTheme;