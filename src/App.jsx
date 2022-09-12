
import './App.css';
import './componentes/Moon.css';

import Logo_Kumerfoods from'./componentes/Logo-KumerFoods';

import Navigation from './componentes/Navigation';

import MoonTheme from './componentes/Moon';
import Card from './componentes/Card';

import Footer from './componentes/Footer';


function App() {
  return (

    <div className="App">
      <header className="App-header">
      <Logo_Kumerfoods/>
      <Navigation/>
      <MoonTheme/>
      </header>
      <main>
        <section className='options'>
        {/* <h1 className='OptionsTitle'>Opções</h1> */}
        <Card img_url='https://img2.gratispng.com/20180602/ar/kisspng-hamburger-coca-cola-kebab-chicken-sweet-corn-cup-5b1236e5cbbae2.2202683815279203578345.jpg'/>
        <Card img_url='https://static.fescopan.com.br/public/fescopan/imagens/produtos/casquinha-para-sorvete-biscoito-doce-300unid-marvi-2140.jpeg'/>
        <Card img_url='https://w7.pngwing.com/pngs/875/316/png-transparent-hd-fries-french-fries-fast-food-food.png'/>
        <Card img_url='https://i.pinimg.com/originals/f1/f9/8e/f1f98e74906d2c48ff4ec8a40e792d65.png'/>
        </section>

        <section className='Famous'>
          {/* <h1 className='FamousTitle'>Famosos <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.153 5.29471C39.3775 5.29471 36.3057 8.36628 36.3057 12.1419C36.3057 14.575 37.5827 16.7146 39.5006 17.9291L35.2996 23.8104L29.1064 17.6171C30.7692 16.3667 31.8469 14.3779 31.8469 12.1418C31.8469 8.36628 28.7754 5.29462 25 5.29462C21.2248 5.29462 18.1529 8.36619 18.1529 12.1418C18.1529 14.3779 19.2305 16.3668 20.8937 17.6171L14.7005 23.8103L10.4995 17.929C12.4173 16.7143 13.6941 14.575 13.6941 12.1418C13.6941 8.36628 10.6226 5.29462 6.84724 5.29462C3.07176 5.29471 0 8.36628 0 12.1418C0 15.122 1.91464 17.6623 4.57811 18.6007V42.4362C4.57811 43.6893 5.59402 44.7053 6.84724 44.7053H24.9998H43.1531C44.4062 44.7053 45.4222 43.6894 45.4222 42.4362V18.6006C48.0854 17.6621 50 15.1219 50 12.1417C49.9998 8.36628 46.9283 5.29471 43.153 5.29471Z" fill="#F7B239"/>
<path d="M4.57811 18.6007V42.4362C4.57811 43.6893 5.59402 44.7053 6.84724 44.7053H24.9998H25V5.29471C21.2246 5.29471 18.1529 8.36628 18.1529 12.1418C18.1529 14.378 19.2305 16.3669 20.8937 17.6172L14.7005 23.8104L10.4997 17.9291C12.4175 16.7144 13.6943 14.575 13.6943 12.1418C13.6941 8.36638 10.6227 5.29471 6.84734 5.29471C3.07176 5.29471 0 8.36628 0 12.1418C0 15.122 1.91464 17.6622 4.57811 18.6007Z" fill="#F7B239"/>
</svg>
</h1>  */}

          <Card img_url='https://img2.gratispng.com/20180602/ar/kisspng-hamburger-coca-cola-kebab-chicken-sweet-corn-cup-5b1236e5cbbae2.2202683815279203578345.jpg'/>
        <Card img_url='https://static.fescopan.com.br/public/fescopan/imagens/produtos/casquinha-para-sorvete-biscoito-doce-300unid-marvi-2140.jpeg'/>
        <Card img_url='https://w7.pngwing.com/pngs/875/316/png-transparent-hd-fries-french-fries-fast-food-food.png'/>
        <Card img_url='https://i.pinimg.com/originals/f1/f9/8e/f1f98e74906d2c48ff4ec8a40e792d65.png'/>


        </section>

        <div >
        <h1 className='NewTitle'>
            <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z" fill="#F7B239"/>
</svg>
Novos<svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z" fill="#F7B239"/>
</svg>
</h1>
        </div>


        <section className='New'>

        <Card img_url='https://source.unsplash.com/random/?fastfood'/>
        
        <Card img_url='https://source.unsplash.com/random/?icecream'/>
        <Card img_url='https://source.unsplash.com/random/?fries'/>
        <Card img_url='https://source.unsplash.com/random/?juice'/>
        </section>

      </main>


      <footer>
         <Footer/>
      </footer>

    </div>
  );
}

export default App;

