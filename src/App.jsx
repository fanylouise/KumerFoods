
import './componentes/assets/css/App.css';
import '../src/componentes/Theme/Moon.css';

import Header from './componentes/Header/Header';

import Card from './componentes/Card/Card';

import Footer from './componentes/Footer/Footer';

import Hamburguer from '../src/componentes/assets/SVGs/hamburguerBlueStroke.svg';
import Combo from '../src/componentes/assets/SVGs/comboBlueStroke.svg';
import Star from '../src/componentes/assets/SVGs/Star.svg'
import Crown from '../src/componentes/assets/SVGs/crown.svg'

import Title from './componentes/Title/Title';

import Logo_Kumerfoods from './componentes/Logo/Logo-KumerFoods';

{/*Ilustrations*/}



function App(){

  return (

    <div className="App">
      <header className='App-header'>
        <Header/>
      </header>
      <main>
        <div className='top'>

        {/*Optiona*/}


        <section className='options'>
          <Title text='Opções'/>
         <div className='columnCards'>
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
        </section>


        {/*Famous*/}

       
        <section className='Famous'>
         <Title text='Famosos' />
          <div className='columnCards'>
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
        </section>

        </div>


       {/*New*/}
        <div className='bottom'>
          <Title text='Novos' />
          <section className='New'>
            <Card />
            <Card />
            <Card />
            <Card />
           </section>
        </div>

       
      </main>


      <footer>
         <Footer/>
      </footer>

    </div>
  );
}

export default App;

