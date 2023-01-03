
import './App.css';
import Header from './componentes/Header/Header';

import Card from './componentes/Card/Card';

import Footer from './componentes/Footer/Footer';

import Title from './componentes/Title/Title';

import Logo_Kumerfoods from './componentes/Logo/Logo-KumerFoods';

{/*Ilustrations*/}

function App(){

  return (

    <div className="App">
      <header className='App-header'>
        <Header/>
      </header>
      <main className='mainTop'>
        <div className='top'>
        <section className='options'>
          <Title text='Opções'/>
         <div className='cubeCardsFomation'>
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
        </section>
        {/*Famous*/}
        <section className='Famous'>
         <Title text='Famosos' />
          <div className='cubeCardsFomation'>
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

