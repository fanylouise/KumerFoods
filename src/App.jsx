
import './App.css';
import './componentes/Moon.css';

import Logo_Kumerfoods from'./componentes/Logo-KumerFoods';

import MoonTheme from './componentes/Moon'

import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo_Kumerfoods/>
      <MoonTheme/>
      <Footer/>
      </header>

      {/* <main>
        
      </main>

      <footer>

      </footer> */}
    </div>
  );
}

export default App;

