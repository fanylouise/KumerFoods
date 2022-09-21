
import './App.css';
import './componentes/Moon.css';

import Header from './componentes/Header';

<<<<<<< HEAD
=======
import Navigation from './componentes/Navigation';

import MoonTheme from './componentes/Moon';
>>>>>>> origin
import Card from './componentes/Card';

import Footer from './componentes/Footer';


<<<<<<< HEAD
function App(){

  return (

    <div className="App">
      <header className='App-header'>
        <Header/>
      </header>
      <main>
        <section className='options'>
         <h1 className='OptionsTitle'>Opções</h1> 
        <Card img_url='https://source.unsplash.com/random/?water'/>
        <Card img_url='https://source.unsplash.com/random/?salad'/>
        <Card img_url='https://source.unsplash.com/random/?soup'/>
        <Card img_url='https://source.unsplash.com/random/?sushi'/>
        </section>

        <section className='Famous'>
          <h1 className='FamousTitle'>Famosos<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5765 2.64727C19.6887 2.64727 18.1529 4.18305 18.1529 6.07084C18.1529 7.28743 18.7913 8.3572 19.7503 8.96448L17.6498 11.9051L14.5532 8.80847C15.3846 8.18328 15.9235 7.18885 15.9235 6.07079C15.9235 4.18305 14.3877 2.64722 12.5 2.64722C10.6124 2.64722 9.07643 4.183 9.07643 6.07079C9.07643 7.18885 9.61525 8.18333 10.4468 8.80847L7.35026 11.905L5.24974 8.96443C6.20867 8.35706 6.84704 7.28738 6.84704 6.07079C6.84704 4.18305 5.31131 2.64722 3.42362 2.64722C1.53588 2.64727 0 4.18305 0 6.07079C0 7.56092 0.957321 8.83108 2.28905 9.30027V21.218C2.28905 21.8446 2.79701 22.3526 3.42362 22.3526H12.4999H21.5765C22.2031 22.3526 22.7111 21.8446 22.7111 21.218V9.30022C24.0427 8.83098 25 7.56087 25 6.07074C24.9999 4.18305 23.4642 2.64727 21.5765 2.64727Z" fill="#F7B239"/>
          <path d="M2.28905 9.30046V21.2182C2.28905 21.8447 2.79701 22.3528 3.42362 22.3528H12.4999H12.5V2.64746C10.6123 2.64746 9.07643 4.18325 9.07643 6.07103C9.07643 7.18909 9.61524 8.18357 10.4468 8.80872L7.35026 11.9053L5.24983 8.96467C6.20876 8.3573 6.84714 7.28763 6.84714 6.07103C6.84704 4.18329 5.31136 2.64746 3.42367 2.64746C1.53588 2.64746 0 4.18325 0 6.07098C0 7.56111 0.95732 8.83123 2.28905 9.30046Z" fill="#F7B239"/>
        </svg>


</h1> 

        <Card img_url='https://img2.gratispng.com/20180602/ar/kisspng-hamburger-coca-cola-kebab-chicken-sweet-corn-cup-5b1236e5cbbae2.2202683815279203578345.jpg'/>
=======
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
>>>>>>> origin
        <Card img_url='https://static.fescopan.com.br/public/fescopan/imagens/produtos/casquinha-para-sorvete-biscoito-doce-300unid-marvi-2140.jpeg'/>
        <Card img_url='https://w7.pngwing.com/pngs/875/316/png-transparent-hd-fries-french-fries-fast-food-food.png'/>
        <Card img_url='https://i.pinimg.com/originals/f1/f9/8e/f1f98e74906d2c48ff4ec8a40e792d65.png'/>


        </section>

        <div >
        <h1 className='NewTitle'>
<<<<<<< HEAD
        <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z" fill="#F7B239"/>
        </svg>

        Novos<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z" fill="#F7B239"/>
        </svg>

=======
            <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z" fill="#F7B239"/>
</svg>
Novos<svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z" fill="#F7B239"/>
</svg>
>>>>>>> origin
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

