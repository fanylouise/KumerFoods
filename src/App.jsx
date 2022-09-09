
import './App.css';
import './componentes/Moon.css';

import Logo_Kumerfoods from'./componentes/Logo-KumerFoods';

import MoonTheme from './componentes/Moon';
import Card from './componentes/Card';

import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo_Kumerfoods/>
      <MoonTheme/>
      </header>
      <main>
        <section className='options'>
        <h1 className='OptionsTitle'>Opções</h1>
        <Card img_url='https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2015/07/02/foto-1-istock000011585796medium.jpg'/>
        <Card img_url='https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2015/07/02/foto-1-istock000011585796medium.jpg'/>
        <Card img_url='https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2015/07/02/foto-1-istock000011585796medium.jpg'/>
        <Card img_url='https://static3.depositphotos.com/1000691/109/i/450/depositphotos_1098427-stock-photo-cheeseburger.jpg'/>
        </section>
      </main>
      <footer>
         <Footer/>
      </footer>

      {/* <main>
        
      </main>

      <footer>

      </footer> */}
    </div>
  );
}

export default App;

