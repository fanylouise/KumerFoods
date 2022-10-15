
import './App.css';
import '../src/componentes/Theme/Moon.css';

import Header from './componentes/Header/Header';

import Card from './componentes/Card/Card';

import Footer from './componentes/Footer/Footer';


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
        <Card img_url='https://static.fescopan.com.br/public/fescopan/imagens/produtos/casquinha-para-sorvete-biscoito-doce-300unid-marvi-2140.jpeg'/>
        <Card img_url='https://w7.pngwing.com/pngs/875/316/png-transparent-hd-fries-french-fries-fast-food-food.png'/>
        <Card img_url='https://i.pinimg.com/originals/f1/f9/8e/f1f98e74906d2c48ff4ec8a40e792d65.png'/>


        </section>

        <div >
        <h1 className='NewTitle'>
        <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z" fill="#F7B239"/>
        </svg>

        Novos<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z" fill="#F7B239"/>
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

